{
    const welcome = () => {
        console.log("Cześć deweloperzy! ten kod jest juz w repozytorium git");
    }
    welcome();
    
    const przycisk = document.querySelector(".button");
    const zdjecieContainer = document.querySelector(".section__image-container");

    const createImage = () => {
        let noweZdjecie = document.createElement("img");
        noweZdjecie.src = "https://i.ibb.co/wghrb1R/obraz.png";
        noweZdjecie.alt = "Audi RS8";
        noweZdjecie.classList.add("section__image");
        return noweZdjecie;
    };

    const toggleImage = () => {
        let zdjecie = zdjecieContainer.querySelector(".section__image");
        if (zdjecie) {
            zdjecie.remove();
            przycisk.textContent = "Pokaż audi";
        } else {
            zdjecieContainer.appendChild(createImage());
            przycisk.textContent = "Ukryj audi";
        }
    };

    przycisk.addEventListener("click", toggleImage);
}