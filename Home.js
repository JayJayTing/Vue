new Vue({
  el: '#app',
  data: {
    title: 'test'
  },
  methods: {
    changeTitle: function(e) {
      this.title = e.target.value;
    },
    sayHello: function() {
      return this.title;
    }
  }
});

//within new Vue() the this keyword is proxied to data property within the object
