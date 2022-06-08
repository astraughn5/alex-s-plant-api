document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const plantName = document.querySelector('input').value
    try{
        const response = await fetch(`https://alex-plant-api.herokuapp.com/api/${plantName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.light
        document.querySelector('img').src = data.image
    }catch(error){
        console.log(error)
    }
}