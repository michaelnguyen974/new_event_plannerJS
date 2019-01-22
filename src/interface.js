let full_event;
let eventInCalendar;

function makeEvent() {
  let content = document.getElementById('user_input').value
  let datetime = document.getElementById('date_time').value
  let event = new EventPlanner(content, datetime);
  full_event = (`Event: ${event.getContent()} - Starting time: ${event.getDate()}`)
  pushInCalendar();
}

function pushInCalendar() {
  let calendar = new EventCalendar();
  calendar.pushEvent(full_event);
  eventInCalendar = document.createTextNode(calendar.showEvents());
  let newlist = document.createElement('li')
  newlist.appendChild(eventInCalendar)
  document.getElementById('upcomingevents').prepend(newlist)
}
