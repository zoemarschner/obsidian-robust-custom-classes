import { Plugin } from 'obsidian';



// decide if a code block is defining a custom class
function isCC(block: HTMLElement) : boolean {
	let html_string = block.innerHTML;
	return html_string.startsWith("class:") || html_string.startsWith("cls:");
}

// get the class name that should be added 
// future feature?: optionally extract list of classes to add
function CCName(block: HTMLElement) : string {
	let html_string = block.innerHTML;
	return html_string.substring(html_string.indexOf(":")+1).trim();
}

// determine which element the class should be added to
function CCTarget(block: HTMLElement) : HTMLElement {
	return block.parentNode;
}

// if the element directly following the class block is a line break, remove it
function cleanLinebreaks(block: HTMLElement) {
	let next_elem = block.nextElementSibling;

	if (next_elem != null && next_elem.nodeName == "BR") {
		next_elem.style.display = "none";
	}

}

// receives elements when they are created (?) in reading mode
function rCCReadingModeCallback(element: HTMLElement, context: any) {

	let code_blocks = element.querySelectorAll("code");
	code_blocks.forEach((block) => {
		if (isCC(block)) {
			let class_name = CCName(block);
			let target = CCTarget(block);

			block.style.display = "none";
			target.classList.add(class_name);

			cleanLinebreaks(block);
		}
	});
}


export default class RobustCC extends Plugin {

	async onload() {
		console.log("Loading robust-custom-classes....");
		this.registerMarkdownPostProcessor(rCCReadingModeCallback);

	}
}

