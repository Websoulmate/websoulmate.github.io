const reviews = [
	{
	id: 1,
	img: "./images/html.png",
	title: "html",
	desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quis placeat aspernatur cum nam adipisci, sint corporis excepturi eos sapiente eius necessitatibus in obcaecati ipsam laborum nisi odio quas distinctio fuga. Expedita, magnam consectetur!",

	},

	{
	id: 2,
	img: "./images/css.png",
	title: "css",
	desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed . Expedita, magnam consectetur!",

	},

	{
	id: 3,
	img: "./images/js.png",
	title: "javascript",
	desc: "Lorem ivaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercatsnecessitatibus in obcaecati ipsam laborum nisi odio quas distinctio fuga. Expedita, magnam consectetur!",

	},

	{
	id: 4,
	img: "./images/tailwind-css.png",
	title: "tailwind",
	desc: "mbucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viralnecessitatibus in obcaecati ipsam laborum nisi odio quas distinctio fuga. Expedita, magnam consectetur!",

	},
	{
	id: 5,
	img: "./images/bootstrap.png",
	title: "bootstrap",
	desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,s necessitatibus in obcaecati ipsam laborum nisi odio quas distinctio fuga. Expedita, magnam consectetur!",

	},
];

// -------------responsive navbar---------------

const navbar = document.getElementById("navbar");
const openButton = document.getElementById("open-sidebar-button")

const media = window.matchMedia("(Width < 600px)");

media.addEventListener('change', (e) => updateNavbar(e))

function updateNavbar(e) {
const isMobile = e.matches;
if (isMobile) {
	navbar.setAttribute('inert', '')
} else {
	//desktop device
	navbar.removeAttribute('inert')
}
}

function openSidebar() {
	navbar.classList.add('show')
	openButton.setAttribute('aria-expanded', 'true')
	navbar.removeAttribute('inert')
}

function closeSidebar() {
	navbar.classList.remove('show')
	openButton.setAttribute('aria-expanded', 'false')
	navbar.setAttribute('inert', '')
}

const navLinks = document.querySelectorAll('nav a')

navLinks.forEach(link => {
	link.addEventListener('click', () => {
		navbar.classList.remove('show')
	})
})


updateNavbar(media)


// --------------skill--------------

const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

const img = document.querySelector(".lang");
const name = document.querySelector(".title");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', () => {
	const item = reviews[currentItem];
	img.src = item.img;
	name.textContent = item.title;
	info.textContent = item.desc;
});

// show skill based on item
function showSkill(skill) {
	const item = reviews[skill];
	img.src = item.img;
	name.textContent = item.title;
	info.textContent = item.desc;
}

// show next skill
nextBtn.addEventListener('click', () => {
	currentItem++;
	if (currentItem > reviews.length - 1) {
		currentItem = 0;
	}
	showSkill(currentItem);
})

// show prev skill
prevBtn.addEventListener('click', () => {
	currentItem--;
	if(currentItem < 0) {
		currentItem = reviews.length -1
	}
	showSkill(currentItem);
});

// show random skill
randomBtn.addEventListener('click', () => {
	currentItem = Math.floor(Math.random() * reviews.length);
	showSkill(currentItem);
})

// scroll top button
const scrollTop = document.querySelector(".scroll-top");
window.addEventListener('scroll', () => {
	let scrollHeight = window.pageYOffset;
	if(scrollHeight > 500) {
		scrollTop.classList.add("show-scroll-top");
	} else {
		scrollTop.classList.remove("show-scroll-top")
	}
})



