{
    const welcome = () => {
        console.log("Cześć deweloperzy! ten kod jest juz w repozytorium git");
    }
    welcome();
    
    const button = document.querySelector(".button");
    const imageContainer = document.querySelector(".section__image-container");

    const createImage = () => {
        let newImage = document.createElement("img");
        newImage.src = "https://i.ibb.co/wghrb1R/obraz.png";
        newImage.alt = "Audi RS8";
        newImage.classList.add("section__image");
        return newImage;
    };

    const toggleImage = () => {
        let image = imageContainer.querySelector(".section__image");
        if (image) {
            image.remove();
            button.textContent = "Show audi";
        } else {
            imageContainer.appendChild(createImage());
            button.textContent = "Hide audi";
        }
    };

    button.addEventListener("click", toggleImage);
}