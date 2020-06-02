const PROGRAMS = [
	{
		id: "program-1",
		program_title: "France",
		program_subtitle: "Exchange program to Paris",
		program_description: 'This is an exchange trip that takes a student to Paris for a 3-6 month internship.<p> <span id="dots1"></span><span id="more1">Features: <br> -Become integrated into a work environment in Paris, working in a field of your choosing including fashion and design <br> -Become immersed in the lifestyle and culture in France <br> -Learn French <br> -Explore Paris and other cities in France</span></p> <button onclick="myFunction(1)" id="myBtn1">Read more</button>',
		image: "images/france.jpg",
		image_title: "Paris"
	},	
	{
		id: "program-2",
		program_title: "Spain",
		program_subtitle: "Exchange program to Barcelona",
		program_description: 'This is an exchange trip that takes a student to Barcelona for a 3-6 month internship.<p> <span id="dots2"></span><span id="more2">Features: <br> -Become integrated into a work environment in Barcelona, working in a field of your choosing including in the food industry <br> -Become immersed in the lifestyle and culture in Spain <br> -Learn Spanish <br> -Explore Barcelona and other cities in Spain</span></p> <button onclick="myFunction(2)" id="myBtn2">Read more</button>',
		image: "images/spain.jpg",
		image_title: "Barcelona"
	},
	{
		id: "program-3",
		program_title: "Germany",
		program_subtitle: "Exchange program to Berlin",
		program_description: 'This is an exchange trip that takes a student to Berlin for a 3-6 month internship.<p> <span id="dots3"></span><span id="more3">Features: <br> -Become integrated into a work environment in Berlin, working in a field of your choosing including in the automotive industry <br> -Become immersed in the lifestyle and culture in Germany <br> -Learn German <br> -Explore Berlin and other cities in Germany</span></p> <button onclick="myFunction(3)" id="myBtn3">Read more</button>',
		image: "images/germany.jpg",
		image_title: "Berlin"
	},
	{
		id: "program-4",
		program_title: "Russia",
		program_subtitle: "Exchange program to Moscow",
		program_description: 'This is an exchange trip that takes a student to Moscow for a 3-6 month internship.<p> <span id="dots4"></span><span id="more4">Features: <br> -Become integrated into a work environment in Moscow, working in a field of your choosing including in the sports industry <br> -Become immersed in the lifestyle and culture in Russia <br> -Learn Russian <br> -Explore Moscow and other cities in Russia</span></p> <button onclick="myFunction(4)" id="myBtn4">Read more</button>',
		image: "images/russia.jpg",
		image_title: "Moscow"
	},
	{
		id: "program-5",		
		program_title: "USA",
		program_subtitle: "Exchange program to New York",
		program_description: 'This is an exchange trip that takes a student to New York for a 3-6 month internship.<p> <span id="dots5"></span><span id="more5">Features: <br> -Become integrated into a work environment in New York, working in a field of your choosing including technology <br> -Become immersed in the lifestyle of America <br> -Explore New York and other cities in America</span></p> <button onclick="myFunction(5)" id="myBtn5">Read more</button>',
		image: "images/usa.jpg",
		image_title: "New York"
	},
	
	
	{
		id: "program-6",		
		program_title: "Canada",
		program_subtitle: "Exchange program to Vancouver",
		program_description: 'This is an exchange trip that takes a student to Vancouver for a 3-6 month internship.<p> <span id="dots6"></span><span id="more6">Features: <br> -Become integrated into a work environment in Vancouver, working in a field of your choosing including sports and technology <br> -Become immersed in the lifestyle of Canada <br> -Explore Vancouver and other cities in Canada</span></p> <button onclick="myFunction(6)" id="myBtn6">Read more</button>',
		image: "images/canada.jpg",
		image_title: "Vancouver"
	},

	{
		id: "program-7",		
		program_title: "Japan",
		program_subtitle: "Exchange program to Tokyo",
		program_description: 'This is an exchange trip that takes a student to Tokyo for a 3-6 month internship.<p> <span id="dots7"></span><span id="more7">Features: <br> -Become integrated into a work environment in Tokyo, working in a field of your choosing including technology <br> -Become immersed in the lifestyle and culture in Japan <br> -Learn Japanese <br> -Explore Tokyo and other cities in Japan</span></p> <button onclick="myFunction(7)" id="myBtn7">Read more</button>',
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



document.getElementById("searchText")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("mySearchBtn").click();
    }
});






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