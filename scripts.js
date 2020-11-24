function toggle(){
	const toggler = document.querySelector('.toggle');
	const navigation = document.querySelector('.navigation');
	toggler.classList.toggle('active');
	navigation.classList.toggle('active');
}

//accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
//end of accordion


// image slider
var counter = 1;
	setInterval(function(){
	    document.getElementById('radio' + counter).checked = true;
	      counter++;
	      if(counter > 4){
	        counter = 1;
	     }
}, 4000);