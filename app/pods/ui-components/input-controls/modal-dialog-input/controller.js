import ApiController from 'frost-guide/utils/ApiController'
import Ember from 'ember'

export default ApiController.extend({
  showModalForm: false,
  isModalActive: Ember.computed.readOnly('modalForms.isModalActive'),
  modalForms: Ember.inject.service('modal-forms'),
  actions: {
    save (attrs) {
      this.notifications.addNotification({
        message: 'Submission success',
        type: 'success',
        autoClear: true,
        duration: 1500
      })
      console.log(attrs)
    },

    showForm () {
      this.set('showModalForm', true)
    }
  }

})
