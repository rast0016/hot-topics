const container = document.getElementById("main-content");
const links = document.querySelectorAll("nav a");
let url = "partials/home.html"; // Default page

const loadContent = (urlFeed) => {
  fetch(urlFeed)
    .then((res) => res.text())
    .then((data) => {
      container.innerHTML = data;
    })
    .catch((err) => {
      container.innerHTML = "<p>Error loading content.</p>";
      console.error(err);
    });
};

const selectContent = (e) => {
  e.preventDefault();
  const href = e.target.getAttribute("href");
  loadContent(href);
};

links.forEach((link) => {
  link.addEventListener("click", selectContent);
});

// Initial load
loadContent(url);
