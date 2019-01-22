describe('Feature Test', function() {

  let eventPlanner = new EventPlanner()
  let eventCalendar = new EventCalendar()

  it('We can create an event and push it in a calendar', function() {
    eventCalendar.pushEvent(eventPlanner)
    expectToEqual(eventPlanner, eventCalendar.showEvents());
  });

});
