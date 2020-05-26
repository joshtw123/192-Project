const PROGRAMS = [
	{
		id: "program-1",
		program_title: "Program-1",
		program_subtitle: "Subtitle",
		program_description: "Description",
		image: "images/image-1.png",
		image_title: "Image 1"
	},	
	{
		id: "program-2",
		program_title: "Program-2",
		program_subtitle: "Subtitle",
		program_description: "Description",
		image: "images/image-2.jpg",
		image_title: "Image 2"
	},
	{
		id: "program-3",
		program_title: "Program-3",
		program_subtitle: "Subtitle",
		program_description: "Description",
		image: "images/image-3.jpg",
		image_title: "Image 3"
	},
	{
		id: "program-4",
		program_title: "Program-4",
		program_subtitle: "Subtitle",
		program_description: "Description",
		image: "images/image-4.jpg",
		image_title: "Image 4"
	},
	{
		id: "program-5",		
		program_title: "Program-5",
		program_subtitle: "Subtitle",
		program_description: "Description",
		image: "images/image-5.jpg",
		image_title: "Image 5"
	},
	
	
	{
		id: "program-6",		
		program_title: "Program-6",
		program_subtitle: "Subtitle",
		program_description: "Description",
		image: "images/image-6.jpg",
		image_title: "Image 6"
	},

	{
		id: "program-7",		
		program_title: "Program-7",
		program_subtitle: "Subtitle",
		program_description: "Description",
		image: "images/image-7.jpg",
		image_title: "Image 7"
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

