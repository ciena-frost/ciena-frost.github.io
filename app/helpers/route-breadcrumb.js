import Ember from 'ember'
import config from 'frost-guide/config/environment'
import _ from 'lodash/lodash'

function flattenRoutes (flattenedRoutes, routes) {
	  _.each(routes, (route) => {
		  flattenedRoutes.push(route)
		  if (_.isArray(route.items)) {
			  flattenRoutes(flattenedRoutes, route.items)
		}
	})
	  return flattenedRoutes
}

export function routeBreadcrumb ([route]) {
	  let path = route.path.replace('.index', '')
	  return _.find(flattenRoutes([], config.APP.routingConfig), {route: path}).alias
}

export default Ember.Helper.helper(routeBreadcrumb)
