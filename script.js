// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Change background color on hover for project items
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('mouseover', function () {
        this.style.backgroundColor = '#2196F3'; // Change to blue on hover
    });

    project.addEventListener('mouseout', function () {
        this.style.backgroundColor = '#FFC107'; // Change back to yellow on mouseout
    });
});
