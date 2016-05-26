module.exports = RouteMapper()
  .get('/', { to: 'Home#index' })
  .post('/donation', { to : 'Home#donation' });
