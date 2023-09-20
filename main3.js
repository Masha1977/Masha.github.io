//=============modal2-sofa===========
window.onload = function () {
    const modalCloseBtn2 = document.getElementById("modal-close-btn2");
    const modalWindow2 = document.getElementById("modal2");
    const productLeft = document.getElementById("product-left");

      if (modalCloseBtn2 && modalWindow2 && productLeft) {
        modalCloseBtn2.addEventListener("click", function () {
            modalWindow2.classList.remove("modal-show");
            modalWindow2.classList.add("modal-none");
          });
      }
      productLeft.addEventListener('click', function(){
        modalWindow2.classList.remove("modal-none");
        modalWindow2.classList.add("modal-show");
      })

      //=============modal3-elefant===========

  const modalCloseBtn3 = document.getElementById("modal-close-btn3");
  const modalWindow3 = document.getElementById("modal3");
  const modalBtn = document.getElementById("modal-btn");

    if (modalCloseBtn3 && modalWindow3 && modalBtn) {
      modalCloseBtn3.addEventListener("click", function () {
         modalWindow3.classList.toggle("modal-none");
          
        });
    }
    modalBtn.addEventListener('click', function(){
      
      modalWindow.classList.toggle("modal-none");
      modalWindow3.classList.toggle("modal-none");
      // modalWindow3.classList.add("modal-show");
    })
      //================
//====================modal==========
    const modalCloseBtn = document.getElementById("modal-close-btn");
    const modalWindow = document.getElementById("modal");
    const buyOneClickBtn = document.getElementById("click-btn");
    if (modalCloseBtn && modalWindow && buyOneClickBtn) {
      modalCloseBtn.addEventListener("click", function () {
        modalWindow.classList.remove("modal-show");
        modalWindow.classList.add("modal-none");
      });
    }
    buyOneClickBtn.addEventListener("click", function () {
      modalWindow.classList.remove("modal-none");
      modalWindow.classList.add("modal-show");
    });
  };
  //======================