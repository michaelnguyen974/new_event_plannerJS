describe('EventPlanner', function() {

  let eventPlanner = new EventPlanner()

  it('eventPlanner is an instance of Event Planner class', function() {
    instanceOf(eventPlanner, EventPlanner);
  });

  it('checks for content', function() {
    let eventPlanner2 = new EventPlanner('content')
    expectToEqual('content', eventPlanner2.getContent());
  });

  it('checks for the date', function() {
    let eventPlanner3 = new EventPlanner('content', '22/01/2019')
    expectToEqual('22/01/2019', eventPlanner3.getDate());
  });

});
