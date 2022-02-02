const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarNav')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false})

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const scrollUpBtn = document.querySelector('.scrollUpBtn');
const navbar = document.querySelector('.navbar');


/* navbar menu collapse when click on the link */
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})


/* start animations for sections */
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(
    function(
        entries,
        appearOnScroll,
        countNumbers
    ) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        })
    },
    appearOptions
);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slide => {
    appearOnScroll.observe(slide);
})

/* start scroll up btn */
const scrollToTop = () => {
    scrollUpBtn.classList.add('hidden');
    window.scrollTo(0,0);
  }

const init= (e)=> {
    scrollUpBtn.classList.add('hidden');
    console.log('start')
}

const scrollHandeler = ()=> {
if(window.scrollY >= 70) {
    navbar.classList.add('navbar-bg');
    scrollUpBtn.classList.remove('hidden');
}else{
    navbar.classList.remove('navbar-bg');
    scrollUpBtn.classList.add('hidden');

  }
}

window.addEventListener('load', init);   
window.addEventListener('scroll', ()=> {
    scrollHandeler();
  });

//--------------------
let counter = document.querySelector('.counter'),
    nums = document.querySelectorAll('.num'),
    started = false;

    // Function to animate counter section
let startCount = (el)=> {
    let goal = el.dataset.goal;
    let count = setInterval(()=> {
        el.textContent++;
        if(el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}
let countNumbers = ()=> {
if(!started) {
    nums.forEach(num => startCount(num));
}
started = true;
}
window.onscroll = ()=> {
    if(window.scrollY >= counter.offsetTop - 500) {
       countNumbers();
    
            }
}
