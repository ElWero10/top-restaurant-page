import heroImage from  "./assets/images/hero-image.jpg";

export default function createHomepage() {
    const content = document.querySelector("#content");

    //Background Image

    const background = document.createElement("img");
    background.src = heroImage;
    content.appendChild(background);

}

createHomepage()