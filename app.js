const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show_a');
        } else {
            entry.target.classList.remove('show_a');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden_a');
hiddenElements.forEach((el) => observer.observe(el));
