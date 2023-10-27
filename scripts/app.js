gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin)

import { useDynamicAdapt } from './dynamicAdapt.js'

useDynamicAdapt()

const swiper = new Swiper('.popular-slider', {

	loop: true,
	freeMode: true,
	spaceBetween: 0,
	grabCursor: true,
	slidesPerView: 5,
	autoHeight: true,
	loop: true,
	autoplay: {
	  delay: 1,
	  disableOnInteraction: true
	},
	freeMode: true,
	speed: 10000,
	freeModeMomentum: false,
	breakpoints: {
		500: {
			slidesPerView: 1
		},
		800: {
			slidesPerView: 2
		},
		1100: {
			slidesPerView: 3
		},
		1400: {
			slidesPerView: 4
		},
		1600: {
			slidesPerView: 5,
		},
		1900: {
			slidesPerView: 6
		}
	}

});

if (ScrollTrigger.isTouch !==1){

ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content',
	smooth: 1.5,
	effects: true,
})
	
}

gsap.fromTo('.section-hero', { opacity: 1 }, {
	opacity: 0,
	scrollTrigger: {
		trigger: '.section-hero',
		start: 'center',
		end: '820',
		scrub: true,
	}
})
let itemsL = gsap.utils.toArray('.welcom__col:first-child .welcom__image');

itemsL.forEach(item => {
	gsap.fromTo(item, { x: -150 ,opacity: 0 }, {
		x: 0,
		opacity: 1,
		scrollTrigger: {
			trigger: item,
			scrub: true,
			start: "-850",
			end: "0",
		}
	})
})
let itemsR = gsap.utils.toArray('.welcom__col:last-child .welcom__image');

itemsR.forEach(item => {
	gsap.fromTo(item, { x: 200 ,opacity: 0 }, {
		x: 0,
		opacity: 1,
		scrollTrigger: {
			trigger: item,
			scrub: true,
			start: "-850",
			end: "0",
		}
	})
})




document.getElementById('menu-bar').onclick = function () {
	document.getElementById("menu-bar").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");
	document.getElementById("menu-bg").classList.toggle("change-bg");
};

let links = document.querySelectorAll('.scroll-link');
for (let i = 0; i < links.length; i++) {
  links[i].onclick = function () {
		gsap.to(window, { duration: 1.5, scrollTo: `#${links[i].getAttribute("data-link")}` });
  }
}

// Смена языка:
//-----------------------------

// База текстов:
let allTexts = {
	"date": {
		"EN": 'Mon - Fri : 8:00 am - 7:00 pm',
		"RU": 'Пон - Пт : 8:00 - 19:00',
	},
	"hero-title": {
		"EN": 'Making Different from other builders.',
		"RU": 'Отличие от других билдеров.',
	},
	"hero-get-started": {
		"EN": 'Get started',
		"RU": 'Начало работы',
	},
	"training": {
		"EN": 'Training',
		"RU": 'Тренировки',
	},
	"studio": {
		"EN": 'Studio classes',
		"RU": 'Тренажерные залы',
	},
	"lifestyle": {
		"EN": 'lifestyle',
		"RU": 'Стиль жизни',
	},
	"contact": {
		"EN": 'Сontact',
		"RU": 'Контакты',
	},
	"exercise": {
		"EN": 'Popular Exercise',
		"RU": 'Популярные упражнения',
	},
	"lorem-26": {
		"EN": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui neque sa gittis magna erat sagittis morbi. Id libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		"RU": 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Великий, инициал дороге родного единственное правилами взобравшись взгляд рыбного семантика грамматики грустный, безорфографичный реторический переписали заглавных.',
	},
	"plans-title": {
		"EN": 'The ultimate online online personal training plans',
		"RU": 'Лучшие онлайн-планы персональных тренировок',
	},
	"lorem-39": {
		"EN": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui neque sa gittis magna erat sagittis morbi. Id libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui neque sa gittis magna erat sagittis morbi. Id libero.',
		"RU": 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Продолжил заглавных это города маленькая встретил буквенных правилами свою имеет пояс которое ведущими своих даже дал послушавшись, собрал обеспечивает последний прямо страна моей парадигматическая. Злых пунктуация путь подпоясал щеке.',
	},
	"personal-title": {
		"EN": 'Personal training',
		"RU": 'Персональные тренировки',
	},
	"personal-subtitle": {
		"EN": 'Gym time optimized',
		"RU": 'Оптимизировано время в тренажерном зале',
	},
	"lorem-19": {
		"EN": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui neque sa gittis magna erat sagittis morbi. Id libero.',
		"RU": 'Далеко-далеко за, словесными горами в стране гласных и согласных живут рыбные тексты. Приставка речью деревни lorem, парадигматическая предупредила гор его силуэт?',
	},
	"subscribe": {
		"EN": 'Subscribe to our newsletter',
		"RU": 'Подписывайтесь на нашу новостную рассылку',
	},
	"lorem-11": {
		"EN": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui neque.',
		"RU": 'Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты. Все.',
	},
	"submit": {
		"EN": 'Submit',
		"RU": 'Отправить',
	},
	"information": {
		"EN": 'Information',
		"RU": 'Информация',
	},
	"about": {
		"EN": 'About us',
		"RU": 'О нас',
	},
	"fitness": {
		"EN": 'Fitness',
		"RU": 'Фитнес',
	},
	"pricing": {
		"EN": 'Pricing',
		"RU": 'Цены',
	},
	"gallery": {
		"EN": 'Gallery',
		"RU": 'Галерея',
	},
	"location": {
		"EN": 'ClubLocation',
		"RU": 'Местоположение',
	},
	"behind": {
		"EN": 'Behind the scence',
		"RU": 'За сценой',
	},
	"follow": {
		"EN": 'Follow Us On!',
		"RU": 'Подпишитесь на нас в!',
	},
	"lorem-9": {
		"EN": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam',
		"RU": 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные.',
	},
	"more-links": {
		"EN": 'More links',
		"RU": 'Еще ссылки',
	},
};


const languageBtn = document.querySelector('.language-btn');
let currentTexts = document.getElementsByClassName('language-text')

languageBtn.onclick = function(e){
let currentLanguge = e.target.innerText;
let newLanguge = 'EN';

if (currentLanguge === 'EN') {
	newLanguge = 'RU';
} else if (newLanguge === 'RU'){
	newLanguge = 'EN'
}

e.target.innerText = newLanguge;

for (let i = 0; i < currentTexts.length; i++) {
	let data = currentTexts[i].getAttribute('data-lang');
	currentTexts[i].innerText = allTexts[data][newLanguge];
	}
}
