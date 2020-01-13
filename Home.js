new Vue({
	el: "#app",
	data: {
		title: "test",
		count: 0,
		link: "http://www.google.com",
		finishedLink: '<a href="wwww.google.com">GOOGLE</a>',
		x: 0,
		y: 0
	},
	methods: {
		changeTitle: function(e) {
			console.log(e.target.value);
			this.title = e.target.value;
		},
		sayHello: function() {
			//this.title = 'hello';
			console.log("sayHElo");
			return "testing";
		},
		hello: function() {
			console.log("testing");
		},
		increase() {
			return this.count++;
		},
		updateCoordinates: function(e) {
			this.x = e.clientX;
			this.y = e.clientY;
		}
	}
});

//within new Vue() the this keyword is proxied to data property within the object
