const submit=document.getElementById("submitbtn")
const city=document.getElementById("cityname");
const output=document.getElementById("city")
const temp=document.getElementById("temp")
const daybox=document.getElementById("day")
const datebox=document.getElementById("date")


switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

daybox.innerHTML=day;


const date = new Date();

var d= `${date.getDate()} / ${date.getMonth() } / ${date.getFullYear()}`

datebox.innerHTML=d;



const getinfo= async (event)=>{
    event.preventDefault()
    const cityval=city.value ;
    console.log(cityval)
    if(cityval === "" ){
       
        output.innerText=`Plz Enter valid Input`
    }
    else{
        try {
            // output.innerText=cityval    
            let url= `api.openweathermap.org/data/2.5/weather?q=pune&appid=e4890f2e459e481ecc42d1e5b16f527b`
            const response = await fetch(url);
            console.log(response)
            // console.log(typeof(response));
          
            var data = await response.json();
            console.log(data)


            // const arrdata=[data]
            // temp.innerText=arrdata[0].main.temp;
            // console.log(arrdata)
        } catch (error) {
            
        }
    }
}
submit.addEventListener('click',getinfo);