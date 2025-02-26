{
    const welcome = ()  => {
        console.log("Cześć deweloperzy! ten kod jest juz w repozytorium git");
    }
    welcome();
    
    // Pobranie przycisku i kontenera na zdjęcie
    const przycisk = document.querySelector(".button");
    const zdjecieContainer = document.querySelector(".section__image-container");
    
    przycisk.addEventListener("click", () => {
        let zdjecie = zdjecieContainer.querySelector(".section__image");
    
        if (zdjecie) {
            // Jeśli zdjęcie istnieje, usuń je
            zdjecie.remove();
            przycisk.textContent = "Pokaż audi";
        } else {
            // Jeśli zdjęcia nie ma, dodaj je ponownie
            let noweZdjecie = document.createElement("img");
            noweZdjecie.src = "https://i.ibb.co/wghrb1R/obraz.png";
            noweZdjecie.alt = "Audi RS8";
            noweZdjecie.classList.add("section__image"); // Dodanie klasy BEM
            zdjecieContainer.appendChild(noweZdjecie);
            przycisk.textContent = "Ukryj audi";
        }
    });
}