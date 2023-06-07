const b1= document.querySelector(".box1");
const b2= document.querySelector(".box2");
const b3= document.querySelector(".box3");
const b4= document.querySelector(".box4");
const b5= document.querySelector(".box5");
const par= document.querySelector(".today");
const cont = document.querySelector(".content")
const col = document.querySelector(".column") 

/*const body = document.body
body.append("Hello world", " bye")

const div = document.createElement("div")
//div.innerText="Hello World" 
 
div.innerHTML= "<strong>HELLO WORLD 2</strong>"
body.append(div) 
const dtrong = document.createElement('strong')
strong.innerText = 'Hello World 2'
body.append(strong)*/
/* b5.remove()
col.append(b5) */
//console.log(b5.setAttribute("title", "sfd"))
//b5.removeAttribute("class")

//const x = document.getElementById("demo");

/* function getTemperature(position) {
  try {
    navigator.geolocation.getCurrentTemparature(showDate);
  } catch {
    b1.innerHTML = err;
  }
}

function showDate() {
  b1.innerHTML = "Temp:  " + position.coords.latitude + 
  "<br>Date " + position.coords.longitude;
}

//localStorage.setItem("name","John Doe");
//document.getElementById("demo").innerHTML = localStorage.getItem("name"); */

/*function myFunction() {
    const inpObj = document.getElementById("id1");
    if (!inpObj.checkValidity()) {
      document.getElementById("id1").innerHTML = inpObj.validationMessage;
    } else {
      document.getElementById("id1").innerHTML = "Input OK";
    } 
  } */
  fetch("https://api.open-meteo.com/v1/forecast?latitude=28.65&longitude=77.23&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FSingapore&start_date=2023-02-14&end_date=2023-02-20").then(response => response.json()).then(json => weather(json));
  
  // .then(response => {
  //   console.log(response);
  // })
  // .catch(err => {
  //   console.error(err);
  // });

   function weather(response){
    //  var location=response.resolvedAddress;
    // var days=response.days;
   par.innerHTML=response.daily.time[0] + "<br>" + response.daily.temperature_2m_max[0] + " " + "°C";
    b1.innerHTML=response.daily.time[1] + "<br>" + response.daily.temperature_2m_max[1] + " " + "°C";
    b2.innerHTML=response.daily.time[2] + "<br>" + response.daily.temperature_2m_max[2] + " " + "°C";
    b3.innerHTML=response.daily.time[3] + "<br>" + response.daily.temperature_2m_max[3] + " " + "°C";
    b4.innerHTML=response.daily.time[4] + "<br>" + response.daily.temperature_2m_max[4] + " " + "°C";
    b5.innerHTML=response.daily.time[5] + "<br>" + response.daily.temperature_2m_max[5] + " " + "°C";
     
   }
   //console.log("Location: "+location);}
  
  // for (var i=0;i<days.length;i++) {
  //   console.log(days[i].datetime+": tempmax="+days[i].tempmax+", tempmin="+days[i].tempmin);
  // }
  // }



  document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
