'use strict';

const mobileMenu = document.querySelector('.mobile-menu');
const openBtn = document.querySelector('.btn-open');
const closeBtn = document.querySelector('.btn-close');


const closeOpen = function(){
    openBtn.classList.toggle('hidden');
    closeBtn.classList.toggle('hidden');
    mobileMenu.classList.toggle('active');
}
openBtn.addEventListener('click', closeOpen);
closeBtn.addEventListener('click', closeOpen);
