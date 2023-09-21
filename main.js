// import JustValidate from '../node_modules/just-validate/dist/just-validate.production.min';

let usefullBtn1 = document.getElementById("usefull-btn-1 g circle");
let usefullBtn2 = document.getElementById("usefull-btn-2 g circle");


new Swiper('.offer-swiper',{

    navigation: {
        nextEl: '.offers-btn-2',
        prevEl: '.offers-btn-1',
      }
      
    });

    // addClientBtn.addEventListener("click", function () {
    //   createModalFormForAdd();
    // });

//     const validation = new window.JustValidate(document.querySelector('#contact-form'));
//     validation
// .addField(document.querySelector('#name'), [
//   {
//     rule: 'required',
//     errorMessage: 'Поле не заполнено',
//   },
//   {
//     rule: 'minLength',
//     value: 3,
//   },
// ])
// .addField(document.querySelector('#email'), [
//   {
//     rule: 'required',
//     errorMessage: 'Поле не заполнено',
//   },
//   {
//     rule: 'email',
//     errorMessage: 'Недопустимый формат',
//   },
// ])
// .addField(document.querySelector('#phone'), [
//   {
//     rule: 'required',
//     errorMessage: 'Поле не заполнено',
//   },
 
// ]);
// ====================

// const validator = new JustValidate("#contact-form");
const validation = new window.JustValidate('#contact');

validation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Поле не заполнено',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Введите полное имя',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Поле не заполнено',
    },
    {
      rule: 'email',
      errorMessage: 'Недопустимый формат',
    },
  ])
  .addField('#phone', [
    {
      rule: 'required',
      errorMessage: 'Поле не заполнено',
    },
      {
        rule: 'minLength',
        value: 7,
        errorMessage: 'Цифр маловато..',
      },
    
  ]);

  let catalogBtn = document.querySelectorAll(".categories-grid-item__link")
  for (const element of catalogBtn) {
  element.addEventListener('click', function(e){
    e.preventDefault();
    window.location.href = "./index-2.html";
  })
}
  

  let btnBuy = document.querySelectorAll(".btn-buy");
  console.log(btnBuy)
  for (const element of btnBuy) {
    element.addEventListener('click', function(e){
      e.preventDefault();
      window.location.href = "./index-3.html";
     })
  }

  let btnWatchMore = document.querySelector(".btn-center");
  btnWatchMore.addEventListener('click', function(e){
    e.preventDefault();
    window.location.href = "./index-2.html";
   })

  //  BURGER===============================================================
  
  let burger = document.querySelector(".menu-burger__header");
  let headerNav = document.getElementById("header-nav");
  let headerMin = document.querySelector(".header-min");
  burger.addEventListener('click', function(e){
    e.preventDefault();
    burger.classList.toggle("open-menu");
    headerNav.classList.toggle("block")
   headerMin.classList.toggle("height")
  })
  
  
  