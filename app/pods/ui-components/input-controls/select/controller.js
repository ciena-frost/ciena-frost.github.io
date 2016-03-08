import ApiController from 'frost-guide/utils/ApiController'
import Ember from 'ember'
import _ from 'lodash'

export default ApiController.extend({
  data: Ember.computed('data', 'search', function () {
    let result = this.model.map((record) => {
      return {
        label: record.get('label'),
        value: record.id
      }
    })
    if (this.get('search')) {
      let filteredResult = _.filter(result, (item) => {
        return item.label.toLowerCase().indexOf(this.get('search').toLowerCase()) !== -1
      })
      result = filteredResult
    }
    return result
  }),
  singlePreSelected: 1,
  multiplePreSelected: [1, 2],
  actions: {
    onChange (values) {
      console.log('User selected: ' + values)
    },
    onInput (filterValue) {
      console.log('Handling input: ' + filterValue)
      this.set('search', filterValue)
    }
  }
})
