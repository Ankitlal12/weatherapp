//  Ankit lal shrestha  2408477

//  var temp=document.querySelector(".temp");



async function getWeather(city)
{
    
    
     var city=document.querySelector(".city").value || "london";
    var result= await fetch(``)
    if(result.status==404){
        alert("invalid city name")
    }
    var info=await result.json();
    console.log(info);
    document.querySelector(".cityname").innerHTML= info.name
    document.querySelector(".temp").innerHTML=(info.main.temp)+"°C";
    document.querySelector(".p1").innerHTML = " "+info.main.humidity+"%";
    document.querySelector(".winds").innerHTML=""+info.wind.speed+"m/s";
    document.querySelector("#pressure").innerHTML=""+info.main.pressure+"Pascal";
    document.querySelector("#condition").innerHTML=""+info.weather[0].description+"";
    
     // Update image source based on weather condition
        
        var weatherIcon = document.querySelector(".weatherIcon")
        if(info.weather[0].main=="Clouds"){
            weatherIcon.src="https://i.pinimg.com/564x/e0/82/2b/e0822b2b751dd441370b6ab2ebc31cf2.jpg";  
        }else if(info.weather[0].main=="Rain"){
            weatherIcon.src="https://i.pinimg.com/474x/f9/df/09/f9df0902c906cfb36fc494ed92426dc3.jpg";
        }else if(info.weather[0].main=="Foggy"){
            weatherIcon.src="https://i.pinimg.com/474x/f0/ea/85/f0ea859a513d43f5eeed9fcdad432c02.jpg";
        }else if(info.weather[0].main=="snowy"){
            weatherIcon.src="https://i.pinimg.com/564x/fb/8a/cf/fb8acfe7cc5d3acb1ccec2b13e46b0e8.jpg";
        }else if(info.weather[0].main=="Mist"){
            weatherIcon.src="https://i.pinimg.com/474x/ee/27/1e/ee271e65f8674eadb85d614633927c60.jpg";
        }else if(info.weather[0].main=="Clear"){
            weatherIcon.src="https://i.pinimg.com/474x/32/af/56/32af56d28752c7d7b0a8ed7372bef401.jpg";
        }else{
            weatherIcon.src="https://i.pinimg.com/474x/bf/dd/b6/bfddb6a0f917932260550ff91928396a.jpg"
        }
 /*date and time*/
    
   let timestamp= info.timezone //yo chai timezone ho hai
  const timestampOnset = Math.floor(Date.now() / 1000) + timestamp ;
  const date = new Date(timestampOnset * 1000);

  const localDateTime = date.toLocaleString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'UTC'
  });
console.log(localDateTime);
document.querySelector(".date").innerHTML = localDateTime;
}
getWeather();

