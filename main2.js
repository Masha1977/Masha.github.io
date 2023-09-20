// ===================SWIPER=======================

new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-btn-2",
    prevEl: ".swiper-btn-1",
  },
});

// ================rangeSlider=========================
const rangeSlider = document.querySelector(".wrapper__slider");
const fieldNumberFirst = document.querySelector(".range-wrapper__field_first");
const fieldNumberSecond = document.querySelector(
  ".range-wrapper__field_second"
);
const allFields = [fieldNumberFirst, fieldNumberSecond];

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [2000, 150000],
    connect: true,
    step: 1,
    range: {
      min: 0,
      max: 150000,
    },
  });

  rangeSlider.noUiSlider.on("update", (values, handle) => {
    allFields[handle].value = Math.round(values[handle]);
  });

  const setRangeSlider = (i, value) => {
    let array = [null, null];
    array[i] = value;
    rangeSlider.noUiSlider.set(array);
  };

  allFields.forEach((el, index) => {
    el.addEventListener("change", (e) => {
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}
//====================
window.onload = function () {
  let btn1 = document.getElementById("btn-1");
  let btn2 = document.getElementById("btn-2");

  if (btn1 && btn2) {
    btn2.addEventListener("click", function () {
      btn1.classList.remove("active-btn");
      btn2.classList.add("active-btn");
    });
    btn1.addEventListener("click", function () {
      btn2.classList.remove("active-btn");
      btn1.classList.add("active-btn");
    });
  }
};


let btnBuy2 = document.querySelectorAll(".btn-buy");
for (const element of btnBuy2) {
  element.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "./index-3.html";
  });
}