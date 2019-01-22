describe('Feature Test', function() {

  let eventPlanner = new EventPlanner()
  let eventCalendar = new EventCalendar()

  it('eventPlanner is an instance of Event Planner class', function() {
    instanceOf(eventPlanner, EventPlanner);
  });

});
