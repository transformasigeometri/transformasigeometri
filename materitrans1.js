function ftampil(){
	/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
	var dropdown = document.getElementsByClassName("dropdown-btn");
	var i;

	for (i = 0; i < dropdown.length; i++) {
		console.log(dropdown.length);
  		dropdown[i].addEventListener("click", function() {
  			this.classList.toggle("active2");
  			var dropdownContent = this.nextElementSibling;
  			if (dropdownContent.style.display === "block") {
  				dropdownContent.style.display = "none";
  			} else {
  				dropdownContent.style.display = "block";
  			}
  		});
	}
}

var x = document.getElementById("petunjuk");
var xx= document.querySelector('.petunjuk');

xx.addEventListener("click",function(){
  x.classList.toggle("hilang");
})

//Contoh Soal//
let klik1= document.getElementById("klik1");
let hilang1= document.getElementById("hilang1");
klik1.addEventListener("click",function(){
	hilang1.classList.toggle("hilang");
	})
let klik2= document.getElementById("klik2");
let hilang2= document.getElementById("hilang2");
klik2.addEventListener("click",function(){
	  hilang2.classList.toggle("hilang");
	})
let klik3= document.getElementById("klik3");
let hilang3= document.getElementById("hilang3");
klik3.addEventListener("click",function(){
	hilang3.classList.toggle("hilang");
	})
let klik4= document.getElementById("klik4");
let hilang4= document.getElementById("hilang4");
klik4.addEventListener("click",function(){
    hilang4.classList.toggle("hilang");
    })