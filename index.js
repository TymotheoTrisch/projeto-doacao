const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            this.previousElementSibling.style.textDecoration = "line-through";
        } else {
            this.previousElementSibling.style.textDecoration = "none";
        }
    });
});
