// JavaScript for mobile menu 

const openMenu = document.querySelector('.openMenu');
const mobileWrap = document.querySelector('.mobile_wrap')
const closeMenu = document.querySelector('.closeMenu');
const moblieMenu = document.querySelector('.mobile_menu');

function resize() { 
    if (window.innerWidth > 1024) {
        mobileWrap.classList.remove('visible');
    }
}

openMenu.addEventListener('click', () => {
    mobileWrap.classList.add('visible');
});

closeMenu.addEventListener('click', () => {
    mobileWrap.classList.remove('visible');
});

window.addEventListener('resize', resize);
resize();


const header = document.querySelector('header');
const titleElement = document.querySelector('.title_text');
const textElement = document.querySelector('.details_text');

const contentArray = [
    {
        mobileImage: '../images/mobile-image-hero-1.jpg',
        desktopImage: '../images/desktop-image-hero-1.jpg',
        title: 'Discover innovative ways to decorate',
        text: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
    },
    {
        mobileImage: '../images/mobile-image-hero-2.jpg',
        desktopImage: '../images/desktop-image-hero-2.jpg',
        title: 'We are available all across the globe',
        text: 'with stores all over the world, it\'s easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don\'t hesitate to contact us today.'
    },
    {
        mobileImage: '../images/mobile-image-hero-3.jpg',
        desktopImage: '../images/desktop-image-hero-3.jpg',
        title: 'Manufactured with the best materials',
        text: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
    }
];

let currentIndex = 0;

function updateHeaderBackground(currentIndex) {
    const isDesktop = window.innerWidth >= 768;
    const imageUrl = isDesktop ? contentArray[currentIndex].desktopImage : contentArray[currentIndex].mobileImage;
    header.style.backgroundImage = `url(${imageUrl})`;
    titleElement.textContent = contentArray[currentIndex].title;
    textElement.textContent = contentArray[currentIndex].text;
}

updateHeaderBackground(currentIndex);

window.addEventListener('resize', () => updateHeaderBackground(currentIndex));

function changeContent(index) {
    currentIndex = index;
    updateHeaderBackground(currentIndex);
}

const angleRight = document.querySelector('.angle-right');
const angleLeft = document.querySelector('.angle-left');

angleRight.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % contentArray.length;
    changeContent(currentIndex);
});

angleLeft.addEventListener('click', () => { 
    currentIndex = (currentIndex - 1 + contentArray.length) % contentArray.length;
    changeContent(currentIndex);
});  