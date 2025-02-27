import { serviceIcons } from "../data/serviceData.js";

const serviceIconsRender = () => {
    const cardsContainer = document.querySelector(".service-cards");
    if (!cardsContainer) {
        console.error("No .service-cards container found in the DOM.");
        return;
    }

    serviceIcons.forEach((service) => {
        const card = document.createElement("div");
        card.className = "service-card-item";
        card.innerHTML = `
            <div class="card-img-container">
                <img src="${service.icon}" alt="${service.title}" />
            </div>
            <div class="service-card-footer">
                <h3>${service.title}</h3>
                <a href="./servies.html">
                    <button aria-label="See more about ${service.title}">
                        See more
                    </button>
                </a>
            </div>
        `;
        cardsContainer.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", serviceIconsRender);
