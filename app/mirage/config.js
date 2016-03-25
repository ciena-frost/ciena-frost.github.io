import emberFrostSelect from './ember-frost-select-config'
import emberFrostText from './ember-frost-text-config'
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
import emberFrostAppBar from './ember-frost-app-bar-config'
import emberFrostDatePicker from './ember-frost-date-picker-config'
import emberFrostCore from './ember-frost-core-config'
import config from '../config/environment'
export default function () {
	this.namespace = config.mirageNamespace
	emberFrostSelect.call(this)
	emberFrostText.call(this)
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
	emberFrostAppBar.call(this)
	emberFrostDatePicker.call(this)
	emberFrostCore.call(this)
}
