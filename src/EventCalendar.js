class EventCalendar {
  constructor(eventList = null) {
    this._eventList = [];
  }

  pushEvent(event) {
  this._eventList.push(event);
}

  showEvents() {
    for(var i = 0; i < this._eventList.length; i++) {
      return this._eventList[i];
    }
  }

}
