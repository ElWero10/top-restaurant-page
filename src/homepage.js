import heroImage from  "./assets/images/hero-image.jpg";

export default function createHomepage() {
    const content = document.querySelector("#content");
    

    //Background Image

    const background = document.createElement("img");
    background.src = heroImage;
    background.style.position = "absolute";
    background.style.zIndex = -1;
    content.appendChild(background);

    //Hero Text

    const heroText = document.createElement("h1");
    heroText.textContent = "WABURGER";
    content.appendChild(heroText);
}

createHomepage()