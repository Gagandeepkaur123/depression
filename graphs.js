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

	$.ajax({
		type: 'POST',
		url: 'http://localhost:3000/api/moood',
		data: num6,
		success: function(data) {
			console.log(data);
		},
		error: function(){
			alert('error saving mood');
		}
	});

}
