const checkbox = document.getElementById("checkbox");
const bookPages = document.getElementById("book-pages");
const page = document.querySelectorAll(".page");
const chapter1 = document.getElementById("chapter1");
checkbox.addEventListener("change", () => {
  bookPages.classList.toggle("dark-book-pages");
  page.forEach((page) => {
    page.classList.toggle("dark-page");
  });
  chapter1.classList.toggle("dark-page-p");
});

const feature1 = document.getElementById("feature1");
const feature2 = document.getElementById("feature2");
const feature3 = document.getElementById("feature3");
const featureImage1 = document.getElementById("feature-image1");
const featureImage2 = document.getElementById("feature-image2");
const featureImage3 = document.getElementById("feature-image3");

feature1.addEventListener("mouseover", () => {
  feature1.classList.add("feature1-toggle");
  featureImage1.style.filter = "grayscale(0%)";
});
feature1.addEventListener("mouseout", () => {
  feature1.classList.remove("feature1-toggle");
  featureImage1.style.filter = "grayscale(100%)";
});

feature2.addEventListener("mouseover", () => {
  feature2.classList.add("feature2-toggle");
  featureImage2.style.filter = "grayscale(0%)";
});
feature2.addEventListener("mouseout", () => {
  feature2.classList.remove("feature2-toggle");
  featureImage2.style.filter = "grayscale(100%)";
});

feature3.addEventListener("mouseover", () => {
  feature3.classList.add("feature3-toggle");
  featureImage3.style.filter = "grayscale(0%)";
});
feature3.addEventListener("mouseout", () => {
  feature3.classList.remove("feature3-toggle");
  featureImage3.style.filter = "grayscale(100%)";
});

function sendEmail() {
  var userName = document.getElementById("userName").value;
  var shippingAddress = document.getElementById("shippingAddress").value;

  var encodedName = encodeURIComponent(userName);
  var encodedAddress = encodeURIComponent(shippingAddress);

  var subject = "Order Request";
  var body =
    "Name: " + encodedName + "%0A%0AShipping Address: " + encodedAddress;

  var mailtoLink =
    "mailto:jsmhmd184@gmail.com" +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    body;

  window.location.href = mailtoLink;
}
