class EventCalendar {
  constructor() {
    this._eventList = [];
  }

  pushEvent(event) {
    this._eventList.push(event);
  }

  upComingEvents(){
    let upcoming = [];
    this._eventList.forEach((event) => {
      let now = new Date();
      let eventDate = event.getDateObject();
      if (eventDate > now) {
        upcoming.push(event);
      }
    })
    return upcoming
  }
  

  displayEvent(){
    let div = document.createElement('div');
    this.sortUpcomingEvents().forEach((e)=>{
      let eventHTML = e.displayAnEvent();
      div.appendChild(eventHTML);
    })
    return div
  }

  sortUpcomingEvents(){
    let result = this.upComingEvents()
    result.sort((e1, e2) => {
      let date1 = e1.getDateObject()
      let date2 = e2.getDateObject()
      return date1 - date2;
    });
    return result;
  }
}
