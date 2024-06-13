async function showTab(event, tabName) {
  // Prevent default anchor behavior
  event.preventDefault();

  // Hide all tab content
  var tabContents = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].classList.remove("active");
  }

  // Remove active class from all tab links
  var tabLinks = document.querySelectorAll("nav a");
  tabLinks.forEach((link) => link.classList.remove("active"));

  // Show the current tab content
  document.getElementById(tabName).classList.add("active");

  // Add active class to the clicked tab link
  event.currentTarget.classList.add("active");

  // //   TODO: When a user lands on the contact us tab, it fetches and renders all the comments from the server
  // if (tabName === "contactUs") {
  //   const res = await fetch("http://localhost:3000/comments");
  //   const comments = await res.json();

  //   for (const comment of comments) {
  //     renderComment(comment);
  //   }
  // }
}

// Show the first tab by default
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("nav a").click();
});

// Hamburger Menu media query
document
  .getElementById("hamburger")
  .addEventListener("click", async function () {
    document.getElementById("navMenu").classList.toggle("active");
  });

// document
//   .getElementById("comment-form")
//   .addEventListener("submit", async function (event) {
//     event.preventDefault();

//     var name = document.getElementById("name").value;
//     var comment = document.getElementById("comment").value;

//     // TODO: Using fetch api - making a post request to the server, to get data to the server
//     await fetch("http://localhost:3000/comment", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ name, comment }),
//     });

//     // TODO: Render new comment to the UI
//     renderComment({ comment, name });
//   });

// function renderComment(comment) {
//   var commentContainer = document.getElementById("comments");

//   // Get the current date and time
//   var currentDate = new Date();
//   var dateString = currentDate.toLocaleString(); // Formats the date and time as a string
//   var newComment = document.createElement("div");

//   newComment.classList.add("comment");
//   newComment.innerHTML =
//     "<strong>" +
//     comment.name +
//     "</strong>" +
//     "<p>" +
//     comment.comment +
//     "</p>" +
//     '<span class="date">' +
//     dateString +
//     "</span>";

//   commentContainer.appendChild(newComment);
//   document.getElementById("comment-form").reset();
// }

// Mouse Smoke Effect
let smokeEffectActive = true;

function createSmoke(x, y) {
  const smoke = document.createElement("div");
  smoke.className = "smoke";
  smoke.style.left = `${x}px`;
  smoke.style.top = `${y}px`;
  document.body.appendChild(smoke);

  setTimeout(() => {
    smoke.remove();
  }, 2000); // Match the duration of the smokeAnimation
}

// Event listener for mouse movement
document.addEventListener("mousemove", function (event) {
  if (smokeEffectActive) {
    const x = event.clientX + window.scrollX;
    const y = event.clientY + window.scrollY;
    createSmoke(x, y);
  }
});

// Get references to the buttons
const smokeOnButton = document.getElementById("smokeOn");
const smokeOffButton = document.getElementById("smokeOff");

// Add click event listener for the "ON" button
smokeOnButton.addEventListener("click", function () {
  smokeEffectActive = true;
});

// Add click event listener for the "OFF" button
smokeOffButton.addEventListener("click", function () {
  smokeEffectActive = false;
});

// DARKMODE
document.getElementById("darkmode").addEventListener("click", function () {
  document.body.classList.remove("light-mode");
  setActive(this);
});

document.getElementById("lightmode").addEventListener("click", function () {
  document.body.classList.add("light-mode");
  setActive(this);
});

function setActive(element) {
  // Remove 'active' class from all buttons
  document.querySelectorAll(".button").forEach(function (button) {
    button.classList.remove("active");
  });

  // Add 'active' class to the clicked button
  element.classList.add("active");
}

// TURN STARRY EFFECT ON/OFF
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the elements
  const stars = document.querySelector(".bg-animation");
  const starryOnButton = document.getElementById("starryOn");
  const starryOffButton = document.getElementById("starryOff");

  // Add click event listener for the "ON" button
  starryOnButton.addEventListener("click", function () {
    stars.classList.remove("hidden");
  });

  // Add click event listener for the "OFF" button
  starryOffButton.addEventListener("click", function () {
    stars.classList.add("hidden");
  });
});

// Gallery Infinite Scroll

const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller_inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);

      duplicatedItem.setAttribute("aria-hidden", "true");
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
