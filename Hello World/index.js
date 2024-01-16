// Get reference to the scale slider element
const scaleSlider = document.getElementById("scaleSlider");

// Function to handle slider change
function handleScaleChangeScale() {
	let lines = document.querySelectorAll(".maskLine");
	lines[0].setAttribute("d", `M 0 1.5 h ${scaleSlider.value - 1}`);
	lines[1].setAttribute("d", `M 0 5 h ${scaleSlider.value - 0.5}`);
	lines[2].setAttribute("d", `M 0 8.5 h ${scaleSlider.value - 1}`);
	document.querySelector("#scaleSliderVal").innerText = scaleSlider.value;
}
function setProgress(num) {
	scaleSlider.value = num;
	handleScaleChangeScale();
}
// Attach event listener to the slider
scaleSlider.addEventListener("input", handleScaleChangeScale);

// Find your root SVG element
const svg = document.querySelector("svg");

// Create an SVGPoint for future math
const pt = new DOMPoint();

// Get point in global SVG space
function cursorPoint(evt) {
	pt.x = evt.clientX;
	pt.y = evt.clientY;
	return pt.matrixTransform(svg.getScreenCTM().inverse());
}
svg.addEventListener(
	"click",
	(evt) => {
		let loc = cursorPoint(evt);
		setProgress(loc.x);
	},
	false
);
