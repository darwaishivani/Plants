const loader = document.querySelector(".p-loader");
const container = document.querySelector(".container");

setTimeout(function () {
	loader.style.display = "none";
	container.style.display = "initial";
}, 2000);

// 
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
	header.classList.toggle("sticky", window.scrollY > 0);
});

let navbar = document.querySelector(".navbar");

// review section

let arrowIcon = document.getElementsByClassName("arrow-icon");
const slide = document.getElementById("slide");

arrowIcon[0].onclick = () => {
	slide.style.transform = "translateX(0)";
};
arrowIcon[1].onclick = () => {
	slide.style.transform = "translateX(-800px)";
};
arrowIcon[2].onclick = () => {
	slide.style.transform = "translateX(-1600px)";
};
arrowIcon[3].onclick = () => {
	slide.style.transform = "translateX(-2400px)";
};

// media queries

function myFunction(x) {
	let arrowIcon = document.getElementsByClassName("arrow-icon");
	const slide = document.getElementById("slide");
	if (x.matches) {
		// If media query matches
		arrowIcon[0].onclick = () => {
			slide.style.transform = "translateX(0)";
		};
		arrowIcon[1].onclick = () => {
			slide.style.transform = "translateX(-380px)";
		};
		arrowIcon[2].onclick = () => {
			slide.style.transform = "translateX(-760px)";
		};
		arrowIcon[3].onclick = () => {
			slide.style.transform = "translateX(-1000px)";
		};
	}
}

var x = window.matchMedia("(max-width: 576px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

// animation

var tl = gsap.timeline();

tl.from(
	".banner-content h1",
	{
		y: -25,
		duration: 1,
		opacity: 0,
		delay:2.5,
	},
	"same"
);

tl.from(
	".banner-stats",
	{
		x: -25,
		duration: 1,
		opacity: 0,
		delay: 2.5,
	},
	"same"
);
tl.to(
	".banner-img img",
	{
		rotate: "-360deg",
		scale: 1.1,
		// stagger: 0.1,
		ease: Power1,
		stagger: 0.5,
		delay: 2.5,
	},
	"same"
);
