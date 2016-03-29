import emberFrostCore from './ember-frost-core-config'
import config from '../config/environment'
export default function () {
	this.namespace = config.mirageNamespace
	emberFrostCore.call(this)
}
