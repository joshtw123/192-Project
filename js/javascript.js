const PROGRAMS = [
	{
		id: "program-1",
		program_title: "France",
		program_subtitle: "Exchange program to France",
		program_description: 'Description about exchange program to France<p> <span id="dots1"></span><span id="more1">Lots of info about the program-Lots of info about the program-Lots of info about the program-</span></p> <button onclick="myFunction(1)" id="myBtn1">Read more</button>',
		image: "images/france.jpg",
		image_title: "Paris"
	},	
	{
		id: "program-2",
		program_title: "Spain",
		program_subtitle: "Exchange program to Spain",
		program_description: 'Description about exchange program to Spain<p> <span id="dots2"></span><span id="more2">More info here</span></p> <button onclick="myFunction(2)" id="myBtn2">Read more</button>',
		image: "images/spain.jpg",
		image_title: "Barcelona"
	},
	{
		id: "program-3",
		program_title: "Germany",
		program_subtitle: "Exchange program to Germany",
		program_description: 'Description about exchange program to Germany<p> <span id="dots3"></span><span id="more3">More info here</span></p> <button onclick="myFunction(3)" id="myBtn3">Read more</button>',
		image: "images/germany.jpg",
		image_title: "Berlin"
	},
	{
		id: "program-4",
		program_title: "Russia",
		program_subtitle: "Exchange program to Russia",
		program_description: 'Description about exchange program to Russia<p> <span id="dots4"></span><span id="more4">More info here</span></p> <button onclick="myFunction(4)" id="myBtn4">Read more</button>',
		image: "images/russia.jpg",
		image_title: "Moscow"
	},
	{
		id: "program-5",		
		program_title: "USA",
		program_subtitle: "Exchange program to USA",
		program_description: 'Description about exchange program to USA<p> <span id="dots5"></span><span id="more5">More info here</span></p> <button onclick="myFunction(5)" id="myBtn5">Read more</button>',
		image: "images/usa.jpg",
		image_title: "New York"
	},
	
	
	{
		id: "program-6",		
		program_title: "Canada",
		program_subtitle: "Exchange program to Canada",
		program_description: 'Description about exchange program to Canada<p> <span id="dots6"></span><span id="more6">More info here</span></p> <button onclick="myFunction(6)" id="myBtn6">Read more</button>',
		image: "images/canada.jpg",
		image_title: "Vancouver"
	},

	{
		id: "program-7",		
		program_title: "Japan",
		program_subtitle: "Exchange program to Japan",
		program_description: 'Description about exchange program to Japan<p> <span id="dots7"></span><span id="more7">More info here</span></p> <button onclick="myFunction(7)" id="myBtn7">Read more</button>',
		image: "images/japan.jpg",
		image_title: "Akihabara"
	},
 ];



 
function createProgramHTML(program) {
	let programHTML = $("<article>");

  let programImages = $("<figure>");
  programImages.append('<img src="' + program.image + '"' + 'alt="' + program.image_title + '"/>')
  programImages.append("<figcaption>" + program.image_title + "</figcaption>")
  programImages.append("</figure>")

  let programTitle = $("<h2>");
  programTitle.append(program.program_title)
  programTitle.append("</h2>")
  
  let programSubtitle = $("<h3>");
  programSubtitle.append(program.program_subtitle)
  programSubtitle.append("</h3>")

  let description = $("<p>");
  description.append(program.program_description)
  description.append("</p>")

  
  programHTML.append(programImages);
  programHTML.append(programTitle);
  programHTML.append(programSubtitle);
  programHTML.append(description);
  programHTML.append("</article>");

	return programHTML;
}




function displayPrograms(programs) {
	let programList = $("#programList");

	programList.empty();
	for(let program of programs) {
		let programHTML = createProgramHTML(program);
		programList.append(programHTML);
	}
}


$(document).ready(function(){
	let mainPrograms = [PROGRAMS[0], PROGRAMS[1], PROGRAMS[2], PROGRAMS[3], PROGRAMS[4]];
	displayPrograms(mainPrograms);
});


function search() {
		let query = $("#searchText").val();
		query = query.toLowerCase().trim();

		let matches = [];
		for (let program of PROGRAMS) {
			if ((program.program_title.toLowerCase()).includes(query)) {
				matches.push(program)
			}
		}
		displayPrograms(matches);
}



function myFunction(number) {
  var dots = document.getElementById("dots" + number);
  var moreText = document.getElementById("more" + number);
  var btnText = document.getElementById("myBtn" + number);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}




mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}