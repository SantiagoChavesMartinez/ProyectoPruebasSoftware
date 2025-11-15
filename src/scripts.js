// === FILTRO DE GALERÍA ===
const filterButtons = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".gallery-item");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const category = btn.dataset.filter;

        items.forEach(item => {
            if (category === "all" || item.classList.contains(category)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});

// === VALIDAR FORMULARIO ===
const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", (e) => {
        const email = document.querySelector("#email");
        const error = document.querySelector(".error");

        if (email.value.trim() === "") {
            e.preventDefault();
            error.textContent = "El correo es obligatorio.";
        }
    });
}
