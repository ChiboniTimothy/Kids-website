"use strict";

// Cancel Button

const closeModal = document.querySelector(".close-window");


closeModal.addEventListener("click", function () {
  console.log("Button clicked");
  window.history.back();
});

const form = document.getElementById("payForm");
form.addEventListener("submit", payNow);
let curr= "";
function payNow(e) {
  // Prevent normal submittion
  e.preventDefault();

    
  

  // Set configuration
  FlutterwaveCheckout({
    public_key: "FLWPUBK_TEST-45235b0a1576cb129423399a9a94f229-X",
    tx_ref: "chiboni_" + Math.floor(Math.random() * 1000000000 + 1),
    amount: 90,
    currency: "ZMW",
    customer: {
      email: document.getElementById("email").value,
      phonenumber: document.getElementById("phoneNumber").value,
      name: document.getElementById("fullName").value,
    },
    callback: function (data) {
      console.log(data);
      const reference = data.tx_ref;
      alert("Payment was successfully completed!" + reference);
    },
    customizations: {
      title: "Chiboni",
      description: "Testing frontend",
    },
  });
}


//₦