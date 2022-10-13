"use strict";

// JavaScript toogle menu

let navLinks = document.getElementById("navLinks");

const showMenu = () => (navLinks.style.right = "0px");

const hideMenu = () => (navLinks.style.right = "-200px");

// Cancel Button

const closeModal = document.querySelector(".close-window");

closeModal.addEventListener("click", function () {
  window.history.back();
});

