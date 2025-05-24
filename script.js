let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slideIndex++;

    if (slideIndex > slides.length) {slideIndex = 1}    

    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 5000); // Cambia cada 5 segundos
}

function showSection(sectionId) {
    const sections = document.querySelectorAll("main > section");

    sections.forEach(section => {
        section.classList.add("hidden");
        section.classList.remove("active");
    });

    document.getElementById(sectionId).classList.remove("hidden");
    document.getElementById(sectionId).classList.add("active");
}

// Simulación de estadísticas de equipo
function showTeamStats(team) {
    const statsDiv = document.getElementById("team-stats");

    // Aquí puedes agregar lógica para mostrar estadísticas del equipo seleccionado
    statsDiv.innerHTML = <h3>Estadísticas de ${team}</h3><p>Partidos jugados, ganados, perdidos...</p>;

    statsDiv.classList.remove("hidden");
}

// Iniciar el slideshow
showSlides();
