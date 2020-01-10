new Vue({
  el: '#app',
  data: {
    title: 'test'
  },
  methods: {
    changeTitle: function(e) {
      this.title = e.target.value;
    }
  }
});
