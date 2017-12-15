var num1;
var num2;
var num3;
var num4;
var num5;
var num6;
var slider = document.getElementById('slider');

noUiSlider.create(slider, {
start: [ 0 ],
step: 1,
range: {
	'min': [ 0 ],
	'max': [ 10 ]
}
});


var sliders = document.getElementById('sliders');

noUiSlider.create(sliders, {
start: [ 0 ],
step: 1,
range: {
	'min': [ 0 ],
	'max': [ 10 ]
}
});

var sliderss = document.getElementById('sliderss');

noUiSlider.create(sliderss, {
start: [ 0 ],
step: 1,
range: {
	'min': [ 0 ],
	'max': [ 10 ]
}
});

function myfunction(){
 num1 = slider.noUiSlider.get();
  console.log(num1);
 num2 = sliders.noUiSlider.get();
   console.log(num2);
 num3 = sliderss.noUiSlider.get();
	 console.log(num3);
 num4 = parseInt(num1)+parseInt(num2)+parseInt(num3);
	 console.log(num4);
	num5 = 3;
	num6 = (num4 / num5);
	console.log(num6);
	if(num6<=4){
	var imgg = document.getElementById('imgg');
	imgg.innerHTML='<div class="col-md-5"><img src="assets/img/imoji1.jpg" alt="Smiley face"></div><div class="col-md-3"><h4>It seems your mood is not so good today.</h4></div><div class="col-md-4"><h4>Always remember, you are much more bigger than your problems.</h4></div>'
  }
  if(num6>4 && num6<=6)
	{
		var imggg = document.getElementById('imggg');
		imggg.innerHTML='<div class="col-md-5"><img src="assets/img/imoji2.jpg" alt="Smiley face"></div><div class="col-md-3"><h4>It seems your mood is good today.</h4></div><div class="col-md-4"><h4>Positive thinking will let you do everything better than negative thinking will.</h4></div>'
	}
	if(num6>6)
	{
		var imgggg = document.getElementById('imgggg');
		imgggg.innerHTML='<div class="col-md-5"><img src="assets/img/imoji3.jpg" alt="Smiley face"></div><div class="col-md-3"><h4>It seems your mood is wonderful today.</h4></div><div class="col-md-4"><h4>Chu lo aasmaan, zameen ki talash na karo, Jee lo zindagi, khushi ki talaash naa karo, Takdeer badal jayegi apne aap hi dosto, Muskurana sikh lo wajah ki talash naa karo</h4></div>'
	}
}
