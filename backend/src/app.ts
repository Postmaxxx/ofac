const compression = require('compression')
const express = require('express')
const https = require('https')
const path = require('path')
const cors = require('cors')
const fse = require('fs-extra')

const personRoutes = require('./routes/person')
const coutryRoutes = require('./routes/countries')
const mode = process.env.NODE_ENV?.trim() || 'development';


const pathToEnv = `.env.${mode}`.trim()
require('dotenv').config({
    path: pathToEnv,
})
console.log('ENV mode: ', pathToEnv);
console.log('Port: ', process.env.PORT);


const app = express()

app.use(express.json({ extended: true, }));
app.use(compression())


//adjust CORS policy
app.use(cors({ 
    origin: "*", 
    credentials: true,
    optionSuccessStatus: 200,
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));



app.use('/api/person', personRoutes)
app.use('/api/countries', coutryRoutes)


const PORT: number = Number(process.env.PORT) || 5000

const backendFolder = (path.resolve(__dirname, '..'))

if (mode === 'development') {
	app.listen(PORT, () => console.log(`Server has been successfully started on port ${PORT}...`))
} else {
	https
		.createServer( //use https certs
			{
				key: fse.readFileSync(`${backendFolder}/privkey.pem`),
				cert: fse.readFileSync(`${backendFolder}/cert.pem`),
			},
			app
		)
		.listen(PORT, function () {
				console.log(`Server has been successfully started on port ${PORT}...`)
		});
}	


module.exports = app;
export {}