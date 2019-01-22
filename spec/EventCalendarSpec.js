describe('EventCalendar', function() {

  let eventCalendar = new EventCalendar()
  let eventPlanner = new EventPlanner()

  it('eventCalendar is an instance of Event Calendar class', function() {
    instanceOf(eventCalendar, EventCalendar);
  });

  it('eventCalendar is able to show list of the events', function() {
    eventCalendar.pushEvent(eventPlanner)
    expectToEqual(eventPlanner, eventCalendar.showEvents());
  });

});
