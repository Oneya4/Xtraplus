function toggle(){
	const toggler = document.querySelector('.toggle');
	const navigation = document.querySelector('.navigation');
	toggler.classList.toggle('active');
	navigation.classList.toggle('active');
}

// image slider
var counter = 1;
	setInterval(function(){
	    document.getElementById('radio' + counter).checked = true;
	      counter++;
	      if(counter > 4){
	        counter = 1;
	     }
}, 4000);