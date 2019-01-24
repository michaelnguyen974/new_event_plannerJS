describe('Feature Test', function() {

  let eventPlanner = new EventPlanner()
  let eventCalendar = new EventCalendar()
  let e1 = {_content: "First test", _date: "2019-01-31T00:00" }
  let e2 = {_content: "Second test", _date: "2019-01-31T12:00"}
  // it('We can create an event and push it in a calendar', function() {
  //   eventCalendar.pushEvent(eventPlanner)
  //   expectToEqual(eventPlanner, eventCalendar.displayEvent());
  // });

  it("Create sorted events", () => {
    eventCalendar.pushEvent(e2)
    eventCalendar.pushEvent(e1)
    expectToEqual(eventCalendar._eventList[0], e2) 
  })

});
