describe('EventPlanner', function() {

  let eventPlanner = new EventPlanner()

  it('eventPlanner is an instance of Event Planner class', function() {
    instanceOf(eventPlanner, EventPlanner);
  });

  it('checks for content', function() {
    let eventPlanner2 = new EventPlanner('content')
    // console.log(eventPlanner2.getContent())
    expectToEqual('content', eventPlanner2.getContent());
  });

});
