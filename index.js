const input=document.getElementById("place");
const button=document.getElementById("search");
const cityname=document.getElementById("city");
const cel=document.getElementById("temp-c");
const fer=document.getElementById("temp-f")
const time=document.getElementById("city-time");
const cloud= document.getElementById("city-cloud");
const humidity= document.getElementById(" city-humidity");
const region= document.getElementById("city-region");
const cityupdate=document.getElementById(" city-lastupdate")
const tz= document.getElementById("city-tz");
async function getdata(cityname){
const data= await fetch(`http://api.weatherapi.com/v1/current.json?key=253fe188111b492f8df120505231607&q=${cityname}&aqi=yes`);
// console.log(data.json());
return await data.json();
   }
button.addEventListener("click", async()=>{
    const value=input.value;
    const result= await getdata(value);
 
    cityname.innerText=`WELCOME to  ${result.location.name}`;
    region.innerHTML=`City of ${result.location.region}`
    time.innerText=` Local-Time : ${result.location.localtime}`;
    cel.innerHTML=`Feelslike in celcius : ${result.current.temp_c}`;
    fer.innerHTML=`Feelslike in fehrenheit :${result.current.temp_f}`;
      cityupdate.innerText =result.current.last_updated;
    humidity.innerText=`Humidity : ${result.current.humidity}`;
    tz.innerText=`Tz-Id:${result.location.tz_id}`;
    cloud.innerHTML=`cloud : ${result.current.air_quality.cloud}`;


     console.log(result);
})
 