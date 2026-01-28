"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const printBtn = document.getElementById("printBtn");
  
  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }

const helpForm = document.getElementById("helpForm");

if (helpForm) {
  helpForm.addEventListener("submit", (e) => {
    alert("Thank you so much for trusting us, you are the reason we do what we do!");
  });
}
});
