
window.addEventListener('load', ()=>{

  let calendar = new EventCalendar();
  let button = document.getElementById('event_create_button')

  button.addEventListener('click', ()=> {
    makeEvent();
  });

//creates event & push to a calendar
  function makeEvent() {
  let content = document.getElementById('user_input').value
  let datetime = document.getElementById('date_time').value
  let event = new EventPlanner(content, datetime);
  calendar.pushEvent(event);
  displayEvent()
  }

  const displayEvent = ()=> {
    let eventlistings = document.getElementById('eventlistings');
    events = calendar.displayEvent();
    eventlistings.innerText = " ";
    eventlistings.appendChild(events);
  }

let weatherbutton = document.getElementById('weatherbutton')
weatherbutton.addEventListener('click', () => {

  var request = new XMLHttpRequest();
  let div = document.getElementById('weather_results')
  request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + city.value + "&APPID=e1af4c2316d9bfc6c1e3b836725eefee", true)
  request.onload = function () {
    var result = JSON.parse(this.response);
    div.innerHTML = `${result.weather[0].description}`
  }
  request.send()
})
 
})

