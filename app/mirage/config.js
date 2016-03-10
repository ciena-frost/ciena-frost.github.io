import emberFrostButton from './ember-frost-button-config'
import emberFrostSelect from './ember-frost-select-config'
import emberFrostText from './ember-frost-text-config'
import emberFrostCheckbox from './ember-frost-checkbox-config'
import emberFrostList from './ember-frost-list-config'
import emberFrostLink from './ember-frost-link-config'
import emberFrostInfoBar from './ember-frost-info-bar-config'
import emberFrostScroll from './ember-frost-scroll-config'
import emberFrostTabs from './ember-frost-tabs-config'
import emberFrostLoading from './ember-frost-loading-config'
import emberFrostPassword from './ember-frost-password-config'
import emberFrostAboutDialog from './ember-frost-about-dialog-config'
import emberFrostTextarea from './ember-frost-textarea-config'
import emberFrostSort from './ember-frost-sort-config'
import emberFrostLogin from './ember-frost-login-config'
import emberFrostModalInput from './ember-frost-modal-input-config'
import emberFrostNavigation from './ember-frost-navigation-config'
import emberFrostBunsen from './ember-frost-bunsen-config'
import emberFrostAppBar from './ember-frost-app-bar-config'
import config from '../config/environment'
export default function () {
 if (config && config.isProd){
    this.namespace = "https://ciena-frost.github.io"
  }else{
    this.namespace = 'https://localhost:4200/'
  }
  emberFrostButton.call(this)
  emberFrostSelect.call(this)
	emberFrostText.call(this)
	emberFrostCheckbox.call(this)
	emberFrostList.call(this)
	emberFrostLink.call(this)
  emberFrostInfoBar.call(this)
  emberFrostScroll.call(this)
  emberFrostTabs.call(this)
	emberFrostLoading.call(this)
	emberFrostPassword.call(this)
	emberFrostAboutDialog.call(this)
	emberFrostTextarea.call(this)
	emberFrostSort.call(this)
  emberFrostLogin.call(this)
	emberFrostModalInput.call(this)
	emberFrostNavigation.call(this)
	emberFrostBunsen.call(this)
	emberFrostAppBar.call(this)
}
