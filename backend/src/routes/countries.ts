import { ICoincidences } from "../interfaces"

const { Router } = require("express")
const router = Router()
import { countries } from "../data/countries"


router.get('/', //get list of coutries
    async (req, res) => {   
        try {
            return res.status(200).json({countries})
        } catch (error) {
            return res.status(500).json({message: 'Server error, pelase try again later'})
        }
    }
)


module.exports = router