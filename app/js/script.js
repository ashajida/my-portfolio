// Handle responsive menu
const responsiveMenu = () => {
    const navBtn = document.querySelector('.nav-menu-btn');
    const navList = document.querySelector('.top-nav ul');
    const header = document.querySelector('header');

    const handleBtnClick = (e) => {
        navList.classList.toggle('active');
        header.classList.toggle('active');
        navBtn.classList.toggle('active');
    };

    navBtn.addEventListener('click', handleBtnClick);
}

responsiveMenu();

// Smooth scroll
const smoothScroll = () => {
    const scrollLinks = document.querySelectorAll('.top-nav ul li a');

    const handleScroll = (e) => {
        e.preventDefault();
        const targetElementId = e.target.getAttribute('href').split("#")[1];
        const goToPosition = document.getElementById(targetElementId).offsetTop;
        const currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
        const distance = goToPosition - currentPosition;
    
        const totalStep = 40;
        let currentStep = 0;
        const intervalTime = 10;
    
        const scrollby = distance / totalStep;
    
        const isScrollElementBody = document.scrollingElement && document.scrollingElement.tagName == "BODY";
    
        const interval = setInterval(() => {
          if (currentStep < totalStep) {
            isScrollElementBody ? (document.body.scrollTop += scrollby) : (document.documentElement.scrollTop += scrollby);
            currentStep++;
          } else {
            clearInterval(interval);
          }
        }, intervalTime);
    }

    for (let i = 0; i < scrollLinks.length; i++) {
        scrollLinks[i].addEventListener("click", handleScroll);
    }
}

smoothScroll();

//Intersection Observer
const sliderObserver = function() {
  const sliders = document.querySelectorAll('.slide');
  const options = {
    rootMargin: '0px 0px -500px 0px',
    threshold: 0
  }
  
  let observer = new IntersectionObserver(function (entries, observer) {

    entries.forEach(function(entry) {
      if(!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('slide-in');
        // observe.unobserve(entry.target);
      }
    })
  }, options);

  sliders.forEach(function(slide) {
    console.log(slide);
    observer.observe(slide);
  })
  
}

sliderObserver();