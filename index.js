const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            this.previousElementSibling.style.textDecoration = "line-through"; // Exemplo: sublinhando o label
        } else {
            this.previousElementSibling.style.textDecoration = "none"; // Exemplo: removendo o sublinhado do label
        }
    });
});
