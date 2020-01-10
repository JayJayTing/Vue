new Vue({
  el: '#app',
  data: {
    title: 'test',
    link: 'http://www.google.com',
    finishedLink: '<a href="wwww.google.com">GOOGLE</a>'
  },
  methods: {
    changeTitle: function(e) {
      console.log(e.target.value);
      this.title = e.target.value;
    },
    sayHello: function() {
      //this.title = 'hello';
      console.log('sayHElo');
      return 'testing';
    },
    hello: function() {
      console.log('testing');
    }
  }
});

//within new Vue() the this keyword is proxied to data property within the object
