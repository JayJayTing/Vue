new Vue({
  el: '#app',
  data: {
    title: 'test',
    link: 'http://www.google.com'
  },
  methods: {
    changeTitle: function(e) {
      this.title = e.target.value;
    },
    sayHello: function() {
      return this.title;
    },
    hello: function() {
      console.log('testing');
    }
  }
});

//within new Vue() the this keyword is proxied to data property within the object
