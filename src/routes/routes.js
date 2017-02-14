import indexHandler from '../handlers/';
import statusHandler from '../handlers/status';
import controlHandler from '../handlers/status/control';
import errorsHandler from '../handlers/status/errors';
import rulesHandler from '../handlers/rules';
import ruleGetHandler from '../handlers/rules/id/get';
import rulePostHandler from '../handlers/rules/id/post';
import ruleDeleteHandler from '../handlers/rules/id/delete';
import testPostHandler from '../handlers/test/post';
import configGetHandler from '../handlers/config/get';
import configPostHandler from '../handlers/config/post';

/**
 * A server route.
 * @typedef {Object} Route
 * @property {String} path The path to route (without '/' at the start).
 * @property {String|String[]} method The method to route. Can be any of the [Express routing methods](http://expressjs.com/en/4x/api.html#routing-methods).
 * @property {Function|Function[]} handler The handler function for this route. See the [Express documentation](http://expressjs.com/en/4x/api.html) for more info.
 *                                         If 'method' is an array, this property should be an equal length array too.
 */

/**
 * An overview
 * @type {Route[]}
 */
let routes = [
  {
    path: '',
    method: 'GET',
    handler: indexHandler
  }, {
    path: 'status',
    method: 'GET',
    handler: statusHandler
  }, {
    path: 'status/control/:action',
    method: 'GET',
    handler: controlHandler,
  }, {
    path: 'status/errors',
    method: 'GET',
    handler: errorsHandler
  }, {
    path: 'rules',
    method: 'GET',
    handler: rulesHandler
  }, {
    path: 'rules/:id',
    method: ['GET', 'POST', 'DELETE'],
    handler: [ruleGetHandler, rulePostHandler, ruleDeleteHandler]
  }, {
    path: 'test',
    method: 'POST',
    handler: testPostHandler
  }, {
    path: 'config',
    method: ['GET', 'POST'],
    handler: [configGetHandler, configPostHandler]
  }
];

export default routes;