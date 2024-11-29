
document.addEventListener("DOMContentLoaded", () => {
    const width = window.innerWidth;
    const currentUrl = new URL(window.location.href);

    if (!currentUrl.searchParams.has("view")) {
        if (width < 1700) {
            window.location.href = "index.html?view=pagina1"; // URL de Página 1
        } else if (width >= 1700 && width <= 3000) {
            window.location.href = "1700-3000/index.html?view=pagina2"; // URL de Página 2
        } else if (width > 3000) {
            window.location.href = "mas3000/index.html?view=pagina3"; // URL de Página 3
        }
    }
});
