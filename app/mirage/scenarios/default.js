import emberFrostButton from './ember-frost-button-default'
import emberFrostSelect from './ember-frost-select-default'
import emberFrostText from './ember-frost-text-default'
import emberFrostCheckbox from './ember-frost-checkbox-default'
import emberFrostList from './ember-frost-list-default'
import emberFrostInfoBar from './ember-frost-info-bar-default'
import emberFrostScroll from './ember-frost-scroll-default'
import emberFrostTabs from './ember-frost-tabs-default'
import emberFrostLoading from './ember-frost-loading-default'
import emberFrostPassword from './ember-frost-password-default'
import emberFrostAboutDialog from './ember-frost-about-dialog-default'
import emberFrostTextarea from './ember-frost-textarea-default'
import emberFrostSort from './ember-frost-sort-default'
import emberFrostLogin from './ember-frost-login-default'
import emberFrostModalInput from './ember-frost-modal-input-default'
import emberFrostNavigation from './ember-frost-navigation-default'
import emberFrostBunsen from './ember-frost-bunsen-default'
import emberFrostAppBar from './ember-frost-app-bar-default'
export default function (server) {
	emberFrostButton(server)
	emberFrostSelect(server)
	emberFrostText(server)
	emberFrostCheckbox(server)
	emberFrostList(server)
	emberFrostInfoBar(server)
	emberFrostScroll(server)
	emberFrostTabs(server)
	emberFrostLoading(server)
	emberFrostPassword(server)
	emberFrostAboutDialog(server)
	emberFrostTextarea(server)
	emberFrostSort(server)
	emberFrostLogin(server)
	emberFrostModalInput(server)
	emberFrostNavigation(server)
	emberFrostBunsen(server)
	emberFrostAppBar(server)
}
