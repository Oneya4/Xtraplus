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
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
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