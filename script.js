"use strict";

const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

// console.log(btnOpenModal);

// const nodeList = document.querySelectorAll("btn");

//querySelectorAll() return nodelist object that is list of extracted nodes from a document.
//btnOpenModel same as a nodeList

// =====================================================================
/* 
btnCloseModal.addEventListener("click", function () {
  modal.style.visibility = "hidden";
  overlay.style.visibility = "hidden";
});

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", function () {
    modal.style.visibility = "visible";
    overlay.style.visibility = "visible";
  });
}

overlay.addEventListener("click", function () {
  modal.style.visibility = "hidden";
  overlay.style.visibility = "hidden";
});
 */

// ====================================================
//above code not follow DRY Principle
//The classList is a read-only property of an element that returns a live collection of CSS classes:
//This below code is best way of adding and removing properties on web page

// =========================================

const openModal = function () {
  // console.log("Open");
  modal.classList.remove("hidden"); //classList me collection he nodes ke. or yaha pr hidden class ko remove kr do jab openModal call ho tab
  // console.log(modal.classList);

  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
