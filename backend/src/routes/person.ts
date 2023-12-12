const { Router } = require("express")
const router = Router()
const { check, validationResult } = require('express-validator');
const moment = require('moment');



router.post('/', 
	[
		check('fullName', {message: 'Name is missed'}).exists(),
		check('fullName', {message: 'Wrong name format: too short'}).isLength({ min: 1, max: 50}),
		check('fullName', {message: 'Wrong name format: too long'}).isLength({ max: 50}),
		check('country', {message: 'Country is missed'}).exists(),
		check('country', {message: 'Wrong country format: too short'}).isLength({ min: 1}),
		check('country', {message: 'Wrong country format: too long'}).isLength({ max: 50}),
		check('dob', {message: 'Date of birth is missed'}).exists(),
		check('dob', {message: 'Wrong date of birth: wrong format'}).isISO8601().toDate(),
		check('dob', {message: 'Day of birth in the future'}).custom((value) => new Date(value) < new Date()),
	],
    async (req, res) => {   
		const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: `Provided data is not correct (${errors.array().length} errors found): ${errors.array().map((error, i) => (`${i + 1}) ${error.msg.message}; `))}`
            })
        }

        try {
			const {fullName, dob, country} = req.body
			
			const date = moment.utc(dob).format('YYYY-MM-DD') //change requested dob from UTC format to YYYY-MM-DD format

			const personToCheck = {
				apiKey: process.env.apiKey,
				minScore: 95, //sensevity of search
				source: ["SDN"],
				cases: [
					{
						name: fullName,
						dob: date,
						adress: {
							country
						}
					}

				]
			}

			//checkin person using https://ofac-api.com
			const response = await fetch(process.env.apiUrl, {
				method: 'POST',
				headers: {
                    "Content-Type": 'application/json',
                },
				body: JSON.stringify(personToCheck)
			})
			
			const result = await response.json()
			const persons = result.matches[fullName] //list of all persons in response

			
			const countryList = [] //list of all countries in response
			persons.map(person => person.addresses?.map(adr => countryList.push(adr.country)))
			//console.log(countryList);
			
			const dobList = persons //list of all dobs in response
				.map(person => (person.dob ? moment(person.dob, 'DD MMM YYYY').format('YYYY-MM-DD') : null))
				.filter(dob => dob)
			//console.log(dobList, date);

			const personToReturn = {
				fullName, 
				dob, 
				country,
				statuses: [
					{
						fieldName: 'Full name',
						status: persons.some(pers => pers.fullName?.toLowerCase() === fullName.toLowerCase()) //if any person has completely the same name
					},
					{
						fieldName: 'Country',
						status: countryList.some(c => c.toLowerCase() === country.toLowerCase())//if any person has completely the same country
					},					
					{
						fieldName: 'Date of birth',
						status: dobList.some(dob => dob === date) //if any person has completely the same dob
					}
				]
			}
            return res.status(200).json({person: personToReturn})
        } catch (error) {
            return res.status(500).json({message: 'Server error, pelase try again later'})
        }
    }
)


module.exports = router