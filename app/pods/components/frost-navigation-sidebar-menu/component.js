import Ember from 'ember'
let category = {}
let keywordSearch = function (item, query) {
  let keywords = item.keywords ? item.keywords : ''
  var castBTree = null;

  let alias = (item.alias || '').toLowerCase()
  let lowerCaseQuery = query.toLowerCase()
  if (keywords.includes(lowerCaseQuery) || alias.includes(lowerCaseQuery)) {
    category[alias] = true
    return true
  }
  category[alias] = false
  if (item.items) {
    return item.items.some(e => keywordSearch(e, query))
  }
  return false
}

let deepCopy = function (obj) {
  if (Object.prototype.toString.call(obj) === '[object Array]') {
    let out = [],
      i = 0,
      len = obj.length
    for (; i < len; i++) {
      out[i] = deepCopy(obj[i])
    }
    return out
  }
  if (typeof obj === 'object') {
    if (obj.hidden) {
      return;
    }
    let out = {},
      i
    for (i in obj) {
      if (obj.hasOwnProperty(i)) {
        out[i] = deepCopy(obj[i])
      }
    }
    return out
  }
  return obj
}

export default Ember.Component.extend({
  classNames: ['frost-navigation-sidebar-menu'],
  selectedCategory: null,
  filteredItems: Ember.computed('items', function () {
    return this.get('items')
  }),
  didInitAttrs() {
    this.set('selectedCategory', this.get('routeCategory'))
  },

  didReceiveAttrs() {
    this.set('selectedCategory', this.get('routeCategory'))
  },
  didInsertElement() {
    $(window).scroll(function () {
      if(($(window).scrollTop() + $(window).height() <= $(document).height())){
        $('.guide-sidebar').css('top', $(this).scrollTop() + 'px')
        $('.guide-sidebar-mobile').css('top', $(this).scrollTop() + 'px')
      }
    })
  },
  actions: {
    categorySelected(category, selected) {
        this.set('selectedCategory', selected ? category : null)
      },
      toggleCollapsed() {
        window.scrollTo(0, 0) // patches bad sidebar behavior when route change from scrolled position
        this.sendAction('toggleCollapsed') //send action to application controller
      },
      search(attrs) {
        let items = this.get('items')
        let query = attrs.value
        console.log("Query: " + query)
        if (!query.length) {
          this.set('filteredItems', items)
          return
        }
        let filteredItems = deepCopy(items.filter(e => keywordSearch(e, query)))
        let i = 0,
          len = filteredItems.length
        for (; i < len; i++) {
          if (!filteredItems[i].items || category[filteredItems[i].alias.toLowerCase()]) {
            continue
          }
          filteredItems[i].items = filteredItems[i].items.filter(function (e) {
            return keywordSearch(e, query)
          })
        }
        console.log(filteredItems)
        this.set('filteredItems', filteredItems)
      }
  }
})
