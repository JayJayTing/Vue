new Vue({
  el: '#app',
  data: {
    twoWayBinding: 'twoWayBinding',
    title: 'test',
    count: 0,
    link: 'http://www.google.com',
    finishedLink: '<a href="wwww.google.com">GOOGLE</a>',
    x: 0,
    y: 0
  },
  watch: {
    count: function() {
      setTimeout(() => {
        this.count = 0;
      }, 1000);
    }
  },
  computed: {
    cached: function() {
      console.log('this is called');
      return this.count * 89;
    }
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
    },
    increase(number, event) {
      console.log('i think this is working');
      console.log(event.target.value);
      return (this.count += number);
    },
    updateCoordinates: function(e) {
      this.x = e.clientX;
      this.y = e.clientY;
      e.stopPropagation();
    },
    alertMe() {
      alert('Alert');
    }
    // dummy: function(e) {
    // 	e.stopPropagation();
    // }
    //this last function can be omitted by adding v-on:something.stop -- the keyword is the .stop. you also need "" empty string also a keyword
  }
});

//within new Vue() the this keyword is proxied to data property within the object
