import ApiController from 'frost-guide/utils/ApiController'

export default ApiController.extend({
  first: {
    id: 3,
    text: 'custom first'
  },
  second: {
    id: 4,
    text: 'custom second'
  },

  actions: {
    text (attrs) {
      this.notifications.addNotification({
        message: "value: '" + attrs.value + "'",
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
    }
  },

  basic: {
    alias: 'basic',
    template: `
      {{#frost-link <bd>'demo.min'</bd> id='basic'}}Basic Link{{/frost-link}}
      `
  },

  first1: {
    alias: 'first',
    template: `
      {{#frost-link <bd>'demo.first' 1</bd> id='model-id'}}First : 1{{/frost-link}}
      `
  },

  nested: {
    alias: 'nested',
    template: `
      {{#frost-link <bd>'demo.first.second' 1 2</bd> id='nested-model-id'}}First : 1 / Second : 2{{/frost-link}}
      `
  },

  disabled: {
    alias: 'disabled',
    template: `
      {{#frost-link <bd>'demo.min'</bd> <a>disabled</a>=<bd>true</bd> id='attributes-disabled'}}Disabled{{/frost-link}}
      `
  },

  primary: {
    alias: 'primary',
    template: `
      {{#frost-link <bd>'demo.min'</bd> class=<c>'small primary'</c> id='primary1'}}
        &lt;div class=<c>'text'</c>&gtLink&lt/div&gt;
      {{/frost-link}}
     `
  },

  secondary: {
    alias: 'secondary',
    template: `
      {{#frost-link <bd>'demo.min'</bd> class=<c>'medium secondary'</c> id='secondary1'}}
        &lt;div class=<c>'text'</c>&gtLink&lt/div&gt;
      {{/frost-link}}
   `
  },

  tertiary: {
    alias: 'tertiary',
    template: `
      {{#frost-link <bd>'demo.min'</bd> class=<c>'large tertiary'</c> id='tertiary1'}}
        &lt;div class=<c>'text'</c>&gtLink&lt/div&gt;
      {{/frost-link}}
    `
  },

  icon: {
    alias: 'icon',
    template: `
      {{#frost-link <bd>'demo.min'</bd> class=<c>'small tertiary'</c> id='icon-small1'}}
        &lt;div class=<c>'icon'</c>&gt;
          {{frost-icon icon='frost/add'}}
        &lt;/div&gt;
      {{/frost-link}}
      `
  },

  icontext: {
    alias: 'icon-text',
    template: `
      {{#frost-link <bd>'demo.min'</bd> class=<c>'medium primary'</c>}}
        &lt;div class=<c>'icon-text'</c>&gt;
          {{frost-icon icon='frost/add'}}
          &lt;div class=<c>'text'</c>&gt;Text&lt;/div&gt;
        &lt;div&gt;
      {{/frost-link}}
      `
  },

  info: {
    alias: 'info',
    template: `
      {{#frost-link <bd>'demo.min'</bd> class=<c>'extra-large primary'</c> id='info1'}}
        &lt;div class=<c>'info'</c>&gt;
          {{frost-icon icon='frost/add'}}
            &lt;div class=<c>'content'</c>&gt;
              &lt;div class=<c>'alias'</c>&gt;Info alias&lt;/div&gt;
              &lt;div class=<c>'details'</c>&gt;Info details&lt;/div&gt;
            &lt;/div&gt;
          &lt;/div>&gt;
      {{/frost-link}}
      `
  }
})
