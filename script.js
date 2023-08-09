// wqeqwehttps://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric

// c802032d5ac67c26d9c88352107a3acf

const api='https://api.openweathermap.org/data/2.5/weather?units=metric&q='
const apikey='c802032d5ac67c26d9c88352107a3acf'
const searchbox=document.querySelector('.first input')
const button =document.querySelector('.first button')
const images = document.querySelector('.goodmorning')
const display= document.querySelector('.second')
const invalid= document.querySelector('.error')


async function firstapi(city){
  let sai=await fetch(api+ city+ `&appid=${apikey}`)
if(sai.status==404){
  invalid.style.display='block'
  display.style.display='none'
  let hasReloaded = false;
function reloadPageOnce() {
   setTimeout(function(){
  if (!hasReloaded) {
    window.location.reload();
    hasReloaded = true;
  }},2000)
} reloadPageOnce()} 
   let ram= await sai.json()
  document.querySelector('.temp').innerHTML=Math.round( ram.main.temp)+'°C';
  document.querySelector('.city').innerHTML=ram.name;
  document.querySelector('.humidity').innerHTML=ram.main.humidity+'%';
  document.querySelector('.windspeed').innerHTML=ram.wind.speed+'km/h';
  if(ram.weather[0].main=='Clouds'){
    images.src='images/clouds.png'
  }
  else if(ram.weather[0].main=='Clear'){
    images.src='images/clear.png'
  }
  else if(ram.weather[0].main=='rain'){
    images.src='images/rain.png'
  }
  else if(ram.weather[0].main=='Drizzle'){
    images.src='images/drizzle.png'
  }
  else if(ram.weather[0].main=='Mist'){
    images.src='images/mist.png'
  }
  else if(ram.weather[0].main=='Snow'){
    images.src='images/snow.png'
  }
  else if(ram.weather[0].main=='Humidity'){
    images.src='images/humidity.png'
  }
  display.style.display='block'
  
}


const danger = document.querySelector('.goodnight')
const details =document.querySelector('.details')
const card =document.querySelector('.card')
 const temp=document.querySelector('.temp')

function anubhav (){
  console.log('ok')
  images.style.display="none"
  danger.style.display='block'
danger.src='images/anubhav.jpg'
  document.querySelector('.city').innerHTML='ANUBHAV'
    details.style.display="none"
  document.body.style.backgroundColor = 'pink';
card.style.background='#e45e76'
  temp.innerHTML='100°C'
  temp.style.color='red'
    display.style.display='block'

}


button.addEventListener('click',()=>{

if (searchbox.value == 'sanskruti'||searchbox.value == 'Sanskruti'){
 anubhav()
}
  else{
     firstapi(searchbox.value)
  }})


