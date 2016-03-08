import emberFrostButton from './ember-frost-button-config'
import emberFrostSelect from './ember-frost-select-config'
import emberFrostInfoBar from './ember-frost-info-bar-config'
import emberFrostScroll from './ember-frost-scroll-config'
import emberFrostTabs from './ember-frost-tabs-config'
import emberFrostLogin from './ember-frost-login-config'
import config from '../config/environment'
export default function () {
 if (config && config.isProd){
    this.namespace = "https://ciena-frost.github.io/"
//    this.namespace = "http://ewhite613.github.io/ciena-frost.github.io/"
  }else{
    this.namespace = 'https://localhost:4200/'
  }
	emberFrostButton.call(this)
	emberFrostSelect.call(this)
	emberFrostInfoBar.call(this)
	emberFrostScroll.call(this)
	emberFrostTabs.call(this)
	emberFrostLogin.call(this)
}
