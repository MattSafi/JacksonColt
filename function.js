function showTab(event, tabName) {

    // Prevent default anchor behavior
    event.preventDefault();

    // Hide all tab content
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    // Remove active class from all tab links
    var tabLinks = document.querySelectorAll("nav a");
    tabLinks.forEach(link => link.classList.remove("active"));

    // Show the current tab content
    document.getElementById(tabName).classList.add("active");

    // Add active class to the clicked tab link
    event.currentTarget.classList.add("active");
}

// Show the first tab by default
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("nav a").click();
});

// Hamburger Menu media query

document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('navMenu').classList.toggle('active');
});


document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var comment = document.getElementById('comment').value;
    var commentContainer = document.getElementById('comments');
    
    // Get the current date and time
    var currentDate = new Date();
    var dateString = currentDate.toLocaleString(); // Formats the date and time as a string

    var newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.innerHTML = '<strong>' + name + '</strong>' + 
                           '<p>' + comment + '</p>' +
                           '<span class="date">' + dateString + '</span>';

    commentContainer.appendChild(newComment);
    document.getElementById('comment-form').reset();
    
});

// Mouse Smoke Effect
document.addEventListener('mousemove', function(event) {
    createSmoke(event.clientX, event.clientY);
});

function createSmoke(x, y) {
    const smoke = document.createElement('div');
    smoke.className = 'smoke';
    smoke.style.left = `${x}px`;
    smoke.style.top = `${y}px`;
    document.body.appendChild(smoke);

    setTimeout(() => {
        smoke.remove();
    }, 2000); // Match the duration of the smokeAnimation
}


