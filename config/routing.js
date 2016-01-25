module.exports = [
	{id: 'overview', alias: 'Overview', type: 'category', route: 'overview', items: [
		{id: 'vision', alias: 'Vision', type: 'route', route: 'overview.vision'},
		{id: 'roadmap', alias: 'Roadmap', type: 'route', route: 'overview.roadmap'},
    {id: 'defects', alias: 'Defects', type: 'route', route: 'overview.defects'},
		{id: 'changelog', alias: 'Changelog', type: 'route', route: 'overview.changelog'}
	]},
	{id: 'development', alias: 'Development', type: 'category', route: 'development', items: [
			{id: 'environment', alias: 'Environment', type: 'route', route: 'development.environment'},
			{id: 'app', alias: 'Developing apps', type: 'route', route: 'development.app'},
			{id: 'addon', alias: 'Developing addons', type: 'route', route: 'development.addon'},
      {id: 'learning', alias: 'Learning resources', type: 'route', route: 'development.learning'},
			{id: 'notes', alias: 'General notes', type: 'route', route: 'development.notes'}
	]},
	{id: 'design-strategy', alias: 'Design strategy', type: 'category', route: 'design-strategy', items: [
		{id: 'design-principles', alias: 'Design principles', type: 'route', route: 'design-strategy.design-principles'},
		{id: 'personas', alias: 'Personas', type: 'route', route: 'design-strategy.personas'},
		{id: 'usability-myths', alias: 'Usability myths', type: 'route', route: 'design-strategy.usability-myths'},
		{id: 'design-philosophy', alias: 'Design philosophy', type: 'route', route: 'design-strategy.design-philosophy'},
		{id: 'branding', alias: 'Branding', type: 'route', route: 'design-strategy.branding'}
	]},
	{id: 'design-conventions', alias: 'Design conventions', type: 'category', route: 'design-conventions', items: [
		{id: 'icons', alias: 'Icons', type: 'route', route: 'design-conventions.icons'},
		{id: 'spacing', alias: 'Spacing', type: 'route', route: 'design-conventions.spacing'},
		{id: 'color', alias: 'Color', type: 'route', route: 'design-conventions.color'},
		{id: 'typography', alias: 'Typography', type: 'route', route: 'design-conventions.typography'},
		{id: 'selection-indication', alias: 'Selection indication', type: 'route', route: 'design-conventions.selection-indication'},
		{id: 'animation', alias: 'Animation', type: 'route', route: 'design-conventions.animation'}
	]},
	{id: 'design-patterns', alias: 'Design patterns', type: 'category', route: 'design-patterns', items: [
		{id: 'about', alias: 'About', type: 'route', route: 'design-patterns.about'},
		{id: 'screen-architecture', alias: 'Screen architecture', type: 'route', route: 'design-patterns.screen-architecture'},
		{id: 'application-bar', alias: 'Application bar', type: 'route', route: 'design-patterns.application-bar'},
		{id: 'error-page', alias: 'Error page', type: 'route', route: 'design-patterns.error-page'},
		{id: 'filtering', alias: 'Filtering', type: 'route', route: 'design-patterns.filtering'},
		{id: 'forms', alias: 'Forms', type: 'route', route: 'design-patterns.forms'},
		{id: 'global-search', alias: 'Global search', type: 'route', route: 'design-patterns.global-search'},
		{id: 'info-bar', alias: 'Info bar', type: 'route', route: 'design-patterns.info-bar'},
		{id: 'login-logout', alias: 'Login/Logout', type: 'route', route: 'design-patterns.login-logout'},
		{id: 'landing-page', alias: 'Landing page', type: 'route', route: 'design-patterns.landing-page'},
		{id: 'map-data-pods', alias: 'Map data pods', type: 'route', route: 'design-patterns.map-data-pods'},
		{id: 'navigation', alias: 'Navigation', type: 'route', route: 'design-patterns.navigation'},
		{id: 'notifications', alias: 'Notifications', type: 'route', route: 'design-patterns.notifications'},
		{id: 'object-browser', alias: 'Object browser', type: 'category', route: 'design-patterns.object-browser', items: [
			{id: 'overview', alias: 'Overview', type: 'route', route: 'design-patterns.object-browser.overview'},
			{id: 'list', alias: 'List', type: 'route', route: 'design-patterns.object-browser.list'},
      {id: 'list-samples', alias: 'List samples', type: 'route', route: 'design-patterns.object-browser.list-samples'},
			{id: 'table', alias: 'Table', type: 'route', route: 'design-patterns.object-browser.table'}
		]},
		{id: 'object-details', alias: 'Object details', type: 'route', route: 'design-patterns.object-details'}
	]},
	{id: 'ui-components', alias: 'UI components', type: 'category', route: 'ui-components', items: [
		{id: 'button-controls', alias: 'Button controls', type: 'category', route: 'ui-components.button-controls', items: [
			{id: 'button', alias: 'Button', type: 'route', route: 'ui-components.button-controls.button'},
			{id: 'link', alias: 'Link', type: 'route', route: 'ui-components.button-controls.link'},
			{id: 'checkbox', alias: 'Checkbox', type: 'route', route: 'ui-components.button-controls.checkbox'},
			{id: 'checkbox-group', alias: 'Checkbox group', type: 'route', route: 'ui-components.button-controls.checkbox-group'},
			{id: 'help-button', alias: 'Help button', type: 'route', route: 'ui-components.button-controls.help-button'},
			{id: 'radio-button', alias: 'Radio button', type: 'route', route: 'ui-components.button-controls.radio-button'},
			{id: 'radio-button-group', alias: 'Radio button group', type: 'route', route: 'ui-components.button-controls.radio-button-group'},
			{id: 'toggle', alias: 'Toggle', type: 'route', route: 'ui-components.button-controls.toggle'}
		]},
		{id: 'menu-controls', alias: 'Menu Controls', type: 'category', route: 'ui-components.menu-controls', items: [
			{id: 'command-menu', alias: 'Command menu', type: 'route', route: 'ui-components.menu-controls.command-menu'},
			{id: 'context-menu', alias: 'Content menu', type: 'route', route: 'ui-components.menu-controls.context-menu'},
			{id: 'disclosure-tab', alias: 'Disclosure tab', type: 'route', route: 'ui-components.menu-controls.disclosure-tab'}
		]},
		{id: 'indicator-controls', alias: 'Indicator controls', type: 'category', route: 'ui-components.indicator-controls', items: [
			{id: 'notifications', alias: 'Notifications', type: 'route', route: 'ui-components.indicator-controls.notifications'},
			{id: 'progress-indicators', alias: 'Progress', type: 'route', route: 'ui-components.indicator-controls.progress-indicators'}
		]},
		{id: 'input-controls', alias: 'Input controls', type: 'category', route: 'ui-components.input-controls', items: [
			{id: 'text', alias: 'Text', type: 'route', route: 'ui-components.input-controls.text'},
			{id: 'text-area', alias: 'Text area', type: 'route', route: 'ui-components.input-controls.text-area'},
			{id: 'password', alias: 'Password', type: 'route', route: 'ui-components.input-controls.password'},
			{id: 'file-chooser', alias: 'File chooser', type: 'route', route: 'ui-components.input-controls.file-chooser'},
			{id: 'select', alias: 'Select', type: 'route', route: 'ui-components.input-controls.select'},
			{id: 'slider', alias: 'Slider', type: 'route', route: 'ui-components.input-controls.slider'}
		]},
		{id: 'text', alias: 'Text', type: 'category', route: 'ui-components.text', items: [
			{id: 'tone', alias: 'Tone', type: 'route', route: 'ui-components.text.tone'},
			{id: 'capitalization', alias: 'Capitalization', type: 'route', route: 'ui-components.text.capitalization'},
			{id: 'titles', alias: 'Titles', type: 'route', route: 'ui-components.text.titles'},
			{id: 'labels', alias: 'Labels', type: 'route', route: 'ui-components.text.labels'},
			{id: 'units', alias: 'Units', type: 'route', route: 'ui-components.text.units'},
			{id: 'truncation', alias: 'Truncation', type: 'route', route: 'ui-components.text.truncation'}
		]},
		{id: 'content-views', alias: 'Content views', type: 'category', route: 'ui-components.content-views', items: [
			{id: 'accordion', alias: 'Accordion', type: 'route', route: 'ui-components.content-views.accordion'},
			{id: 'collapsible-section', alias: 'Collapsible section', type: 'route', route: 'ui-components.content-views.collapsible-section'},
			{id: 'info-pods', alias: 'Info pods', type: 'route', route: 'ui-components.content-views.info-pods'},
			{id: 'list', alias: 'List', type: 'route', route: 'ui-components.content-views.list'},
			{id: 'modal-dialog', alias: 'Modal dialog', type: 'route', route: 'ui-components.content-views.modal-dialog'},
			{id: 'scrollbar', alias: 'Scrollbar', type: 'route', route: 'ui-components.content-views.scrollbar'},
			{id: 'table', alias: 'Table', type: 'route', route: 'ui-components.content-views.table'},
			{id: 'tabs', alias: 'Tabs', type: 'route', route: 'ui-components.content-views.tabs'}
		]}
	]},
	{id: 'data-visualization', alias: 'Data visualization', type: 'category', route: 'data-visualization', items: [
		{id: 'defender-view', alias: 'Defender view', type: 'route', route: 'data-visualization.defender-view'},
		{id: 'charts', alias: 'Charts', type: 'route', route: 'data-visualization.charts'},
		{id: 'geographic-topology', alias: 'Geographic topology', type: 'route', route: 'data-visualization.geographic-topology'},
		{id: 'network-objects', alias: 'Network objects', type: 'route', route: 'data-visualization.network-objects'},
		{id: 'physical-equipment', alias: 'Physical equipment', type: 'route', route: 'data-visualization.physical-equipment'},
		{id: 'subway-map', alias: 'Subway map', type: 'route', route: 'data-visualization.subway-map'},
		{id: 'subway-line', alias: 'Subway line', type: 'route', route: 'data-visualization.subway-line'},
		{id: 'trail-analyzer', alias: 'Trail analyzer', type: 'route', route: 'data-visualization.trail-analyzer'}
	]},
	{id: 'terminology', alias: 'Terminology', type: 'route', route: 'terminology'}
];
