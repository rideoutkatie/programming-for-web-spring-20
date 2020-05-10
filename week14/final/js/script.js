
$(function(){
	
	var page = $("body");
	var contents = $("#container");
	var segnaposto = $(".segna");
	var years = $(".sidebar_year");
	var firstYear = $(years.get(0));
	var sidebarOffset = firstYear.offset();
	var segnapostoTopMargin = (segnaposto.height() - firstYear.height())/2;
	
	segnaposto.css("top", sidebarOffset.top - segnapostoTopMargin);
	segnaposto.fadeIn();
	
	$(window).scroll(function(scroll) {
    	
    	var yOffset = $(this).scrollTop() - contents.height();
    	var currentPageOffset = (yOffset) / (contents.height() * contents.length);
		var currentPage = $(contents.children().get(Math.round(currentPageOffset+1)));
	    	
	    var averagePosition = currentPageOffset * page.height() * 0.077;
		segnaposto.css('margin-top', averagePosition);
		
		return false;
    	
    });
    
    $(".sidebar_year").click(function() {
	    
	    $("html, body").animate({
		    scrollTop: $($.attr(this, "href")).offset().top
		}, 500);
	    
	    return false;
    });
	
	$(".arrow.animated.bounce").click(function() {
		
		$("html, body").animate({
		    scrollTop: $("#1930").offset().top
		}, 500);
	    
	    return false;
	});	
});

var x = [],
  y = [],
  segNum = 10,
  segLength = 30;

for (var i = 0; i < segNum; i++) {
  x[i] = 0;
  y[i] = 0;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(10);
  stroke(255,255,255, 100);
  
  

  
}

function draw() {
  
  background('#FFDD00');
  
  dragSegment(0, mouseX, mouseY);
  for( var i=0; i<x.length-1; i++) {
    dragSegment(i+1, x[i], y[i]);
  }
}

function mousePressed() {
  segNum = segNum + 1;
}

function dragSegment(i, xin, yin) {
  var dx = xin - x[i];
  var dy = yin - y[i];
  var angle = atan2(dy, dx);
  x[i] = xin - cos(angle) * segLength;
  y[i] = yin - sin(angle) * segLength;
  segment(x[i], y[i], angle);
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  ellipse(0, 0, segLength/2, segLength/2);
  //line(0, 0, segLength, 0);
  pop();
}

Vue.component('streaming-track', {
	template: `<div :class="['track', trending]">
			<h3>{{track.title}}</h3>
			<div><img :src="track.cover" alt=""></div>
			<small>{{track.artist}}</small>
	</div>`,
	props:['track'],
	computed: {
		trending: function () {
			const delta = this.track.rank - this.track.position.positionLastWeek;
			if(delta > 0) {
				return 'up'
			} else if (delta < 0) {
				return 'down'
			}
				else {
					return 'no-change'
				}
			
		}
	}
})
const vm = new Vue({
	el: "#musicApp",
	data: {
		tracks: []
	},
	mounted () {
		axios
			.get('./data/music-list.json')
			.then(response => {
			console.log('response', response);
			vm.tracks = response.data;
			console.log(vm.tracks);
		});
		
	}
})
