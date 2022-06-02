const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let plants = {
	'dumb cane':{
		"scientificName": 'Dieffenbachia Amoena',
		'light': 'This plant prefers bright, indirect sun light for the optimal growth. It will accept lighting conditions up to full shade and continue stunted growth. Full sun will burn the leaves.',
        'watering': `For the best results, keep the dumb cane plant's top inch of soil moist at all times. It will tolerate extended periods of watering neglect, but the leaves will begin to shrivel. Watering makes the leaves stiffen. Before moving the plant, allow the soil to dry out. This will give the leaves a more rubbery texture which will better survive the handling process.`,
		'soil': 'This plant is not picky about its soil conditions. It will grow in almost any soil mix except sand and orchid mixtures. For best results, a one to one mixture of potting soil and perlite should be used.',
		'fertilizer': 'To encourage your plant to grow faster, you may introduce a full strength mixture of standard, balanced fertilizer once a month. Over-fertilization will cause the plant to start dropping leaves.',
		'repotting': 'This plant needs to have its root density checked annually in the spring. If the roots are becoming dense, re-pot into a size bigger pot. Reduce watering for a week before transplant.',
		'humidity': 'Normal room humidity is fine.',
        'image': 'https://www.houseplantsexpert.com/image-files/dumb_cane_plant.jpg'
	},
	'aluminum plant': {
		'scientificName': 'Pilea Cadierei',
		'light': 'This plant requires at least four hours of indirect, but bright, sunlight a day. Do not permit this plant to be exposed to overly bright or direct sunlight. Too much sun will burn the leaves and cause the green parts to turn brown.',
        'watering': `The Aluminum plant needs to be watered differently during different times of the year. During spring and summer, the top quarter inch of the soil should be kept moist. During fall and winter, allow the top quarter inch of soil to dry out before watering again. Do not permit water to stand in the saucer underneath the plant.`,
		'soil': 'This plant prefers a sandy soil mixture to live in. Combine one part clean sand (or perlite) with two parts peat to provide the required soil content for continued health.',
		'fertilizer': '',
		'repotting': 'Check the root density of Pilea cadierei every spring. If the roots are becoming overly dense, transplant the plant to a size larger pot. If you do not, the root system will break the container in an attempt to find more room to grow.',
		'humidity': 'Normal air humidity will please this plant. If your home is overly dry during the winter, mist the leaves every other day with plain water.',
        'image': 'https://www.houseplantsexpert.com/image-files/aluminum_plant.jpg'
	},
	'unknown':{
		'scientificName': 'Unknown',
		'light': '',
        'watering': '',
		'soil': '',
		'fertilizer': '',
		'repotting': '',
		'humidity': '',
        'image': ''
	}
}

app.get('/', (req, res)=>{
	res.sendFile( __dirname + '/index.html')
})

app.get('/api/:name', (req, res)=>{
	const plantName = req.params.name.toLowerCase()
	if (plants[plantName]){
		res.json(plant[plantName])
	}
	else{
		res.json(plants['unknown'])
	}
})


app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})