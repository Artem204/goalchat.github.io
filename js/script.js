var anchors = document.querySelectorAll('.tv_icon a');
for (var i=0; i<anchors.length; i++){
	anchors[i].addEventListener('mouseover', function(e) {
	var img = this.querySelector('img');
	img.setAttribute('data-url', img.src);
	img.src = "css/images/play.jpg";
});

anchors[i].addEventListener('mouseout', function () {
	var img = this.querySelector('img');
	img.src= img.dataset.url;
})
}