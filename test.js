const axios=require('axios')


const API=async()=>{
    var options = {
        method: "get",
        url: `http://api.openweathermap.org/data/2.5/weather?q=delhi&appid=a6c967706478065f362b77e144b97650`
    } 
    let result = await axios(options)
    console.log(result.data)
}
API();