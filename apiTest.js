const dotenv = require('dotenv')
dotenv.config()

const API_KEY = process.env.API_KEY
const gameName = "cammy1"
const tagLine = "NA1"
const uri = `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}?api_key=${API_KEY}`
fetch(uri).then((response) => {
	return response.json()
}).then((response) => {
	console.log(response)
})

