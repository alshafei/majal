var routeMapper = new RouteMapper();;

routeMapper
  .root('Home#index')
  .post('/donation', {to : 'Home#donation'});

module.exports = routeMapper;
