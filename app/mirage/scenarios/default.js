import emberFrostButton from './ember-frost-button-default'
import emberFrostSelect from './ember-frost-select-default'
import emberFrostInfoBar from './ember-frost-info-bar-default'
import emberFrostScroll from './ember-frost-scroll-default'
import emberFrostTabs from './ember-frost-tabs-default'
import emberFrostLogin from './ember-frost-login-default'
export default function (server) {
	emberFrostButton(server)
	emberFrostSelect(server)
	emberFrostInfoBar(server)
	emberFrostScroll(server)
	emberFrostTabs(server)
	emberFrostLogin(server)
}
