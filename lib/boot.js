var path = require('path');

// Custom Errors
global.NotFoundError = function NotFoundError(message) {
  this.name = 'NotFoundError';
  this.message = message || 'Not Found';
}

NotFoundError.prototype = Object.create(Error.prototype);
NotFoundError.prototype.constructor = NotFoundError;

// Load LithiumEngine
if (CONFIG[CONFIG.environment].enableLithium) {
  require('./LithiumEngine.js');
}

// Routes
CONFIG.router = require(path.join(process.cwd(), 'config', 'routeMapper.js'));
CONFIG.router.helpers = CONFIG.router.mappings;
