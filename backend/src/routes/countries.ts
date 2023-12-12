const { Router } = require("express")
const router = Router()
import { countries } from "../data/countries"

//return list of countries for autofill
router.get('/',
    async (req, res) => {   
        try {
            return res.status(200).json({countries})
        } catch (error) {
            return res.status(500).json({message: 'Server error, pelase try again later'})
        }
    }
)


module.exports = router