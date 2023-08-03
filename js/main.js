let rateBtnsBox = document.querySelector(".rateBtnsBox");
let rateBtn = document.querySelectorAll(".rateBtn");
let submitBtn = document.getElementById("submitBtn");
let firstCard = document.getElementById("firstCard");
let secCard = document.getElementById("secCard");

rateBtnsBox.addEventListener("click", function (e) {
  if (e.target !== rateBtnsBox) {
    for (let i = 0; i < rateBtn.length; i++) {
      rateBtn[i].classList.remove("selectedNum");
      rateBtn[i].style.backgroundColor = "hsl(215, 18%, 19%)";
    }
    e.target.classList.add("selectedNum");
    e.target.style.backgroundColor = "hsl(217, 12%, 63%)";
    e.target.style.color = "white";
    submitBtn.classList.remove("disabled")
  }

});

function displayRate() {
  let container = "";
  for (let i = 0; i < rateBtn.length; i++) {
    if (rateBtn[i].classList.contains("selectedNum")) {
      container += `<span>You selected ${rateBtn[i].innerHTML} out of 5</span>`;
    }
  }
  document.getElementById("rate-title").innerHTML = container;
}
submitBtn.addEventListener("click", function () {
  secCard.classList.remove("d-none");
  displayRate();
});
