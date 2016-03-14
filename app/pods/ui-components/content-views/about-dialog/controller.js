import ApiController from 'frost-guide/utils/ApiController'

export default ApiController.extend({
  isAboutVisible: false,
  actions: {
    toggleAboutDialog (type) {
      this.set('isAboutVisible', true)
      this.set('dialogType', type)
      this.set('dialogTitle', 'Product Name')
      this.set('dialogMessage', 'Product tag line bacon ipsum color ametr turducken tial')
      this.set('dialogServerMessage', ['Server Version: 5.0.0 257541', 'Client Version: 5.0.0'])
      this.set('dialogCopyrightText', 'Copyright &copy; 2016 Company, all rights reserved.')
      this.set('dialogLicenseText', [
        'This is example license text, overriding the default license text in frost-about-dialog component.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      ])
    }
  }
})
