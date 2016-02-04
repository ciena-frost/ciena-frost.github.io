import Ember from 'ember'
import _ from 'lodash/lodash'

export default Ember.Route.extend({
	      routing: Ember.inject.service('-routing'),

	      beforeModel: function (transition) {
		      let targetRouteName = transition['targetName']
		      if (!targetRouteName.match(/v\d+-\d+-\d+$/)) {
			      targetRouteName = targetRouteName.substr(0, targetRouteName.length - 'vX-X-X'.length) // Drop versioning
			      let versions = _.chain(this.get('routing').availableRoutes())
				.filter(function (routeName) {
					      if (_.contains(routeName, targetRouteName) &&
						!_.isEmpty(_.trim(routeName.substr(targetRouteName.length))) &&
						!_.endsWith(routeName, '.error') &&
						!_.endsWith(routeName, '.index') &&
						!_.endsWith(routeName, '.loading')) {
						      return true
					}
					      return false
				})
				.map(function (routeName) {
					      return routeName.substr(targetRouteName.length + '.'.length)
				})
				.sortBy(function (version) {
					      version = version.substr(1)
					      let versionNumbers = _.words(version, '-')
					      return versionNumbers[0] * 100 + versionNumbers[1] * 10 + versionNumbers[2]
				})
				.value()
			      this.transitionTo(targetRouteName + '.' + versions[0])
		}
	}
})
