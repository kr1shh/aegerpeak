import servicesData from "../data/serviceData.js";


function generateServices() {
  const servicesContainer = document.getElementById("services-container");
  const modalContainer = document.getElementById("modal-container");

  servicesData.forEach((service) => {
    const serviceSection = document.createElement("div");
    serviceSection.className = "service-section";
    serviceSection.innerHTML = `
            <div class="service-header">
                <div class="heading-container">
                  <h2>${service.title} - <a href="../peic.html" class="decoration-underline">PEIC</a></h2>
                  <button onclick="openDetailsModal('${service.id}')">?</button>
                </div>
                <div class="taglines">
                  ${
                    service.taglines
                      ? service.taglines
                          .map((tagline) => `<span>${tagline}</span>`)
                          .join("")
                      : ""
                  }
                </div>
            </div>
            
            <div class="benefits-overview">
                <h3>Benefits of ${service.title}</h3>
                <div class="benefits-list">
                    ${service.benefits
                      .map(
                        (benefit) => `
                        <div class="benefit-item">
                            <i>✓</i>
                            <div>${benefit}</div>
                        </div>
                    `
                      )
                      .join("")}
                </div>
            </div>
            
            <div class="cards-container" id="${service.id}-cards">
                ${service.packages
                  .map(
                    (pkg) => `
                    <div class="card level-${pkg.level}">
                        <div class="card-header">
                            <h3>${pkg.name}</h3>
                            <div class="subtitle">
                              <span>${pkg.subtitle}</span>
                            </div>
                        </div>
                        <div class="card-body">
                            <span class="ideal-for">${pkg.target}</span>
                            <p>${pkg.description ? pkg.description : "" }</p>
                            <div class="price">${pkg.price} <span class="before-price">${pkg.beforePrice ? pkg.beforePrice : "" }</span> + GST</div>
                            <p class="discount-tag">
                              ${ pkg?.discount ? `<span>${pkg.discount}</span>` : "" }
                            </p>
                            <div class="card-buttons">
                                <button class="btn btn-details" onclick="openModal('${service.id}-${pkg.level}')">See Details</button>
                                <button class="btn btn-contact" onclick="contactUs()">Contact Now</button>
                            </div>
                        </div>
                    </div>
                `
                  )
                  .join("")}
            </div>
        `;

    servicesContainer.appendChild(serviceSection);


    service.packages.forEach((pkg) => {
      const modal = document.createElement("div");
      modal.id = `${service.id}-${pkg.level}-modal`;
      modal.className = "modal";
      modal.innerHTML = `
                <div class="modal-content">
                    <div class="modal-header">
                        <h2>${pkg.name} Package Details</h2>
                        <span class="close" onclick="closeModal('${
                          service.id
                        }-${pkg.level}')">&times;</span>
                    </div>
                    <div class="modal-body">
                        <h3>${pkg.subtitle} ${pkg.target}</h3>
                        ${
                          pkg.level !== "basic"
                            ? "<p>Includes everything in the lower packages, plus:</p>"
                            : ""
                        }
                        <ul>
                            ${pkg.features
                              .map((feature) => `<li>${feature}</li>`)
                              .join("")}
                        </ul>
                        <p class="price">${pkg.price} <span class="before-price">${pkg.beforePrice ? pkg.beforePrice : "" }</span> + GST</p>
                        <p class="discount-tag" style="margin-bottom: 1rem;">
                          ${ pkg?.discount ? `<span>${pkg.discount}</span>` : "" }
                        </p>
                        <div class="taglines">
                          ${
                            pkg.taglines
                              ? pkg.taglines
                                  .map((tagline) => `<span>${tagline}</span>`)
                                  .join("")
                              : ""
                          }
                        </div>
                    </div>
                    <div class="modal-footer">
                      <a href="../contact.html">
                        <button class="btn btn-details">Connect with us</button>
                      </a>
                        <button class="btn btn-contact" onclick="contactUs()">Contact Now</button>
                    </div>
                </div>
            `;

      modalContainer.appendChild(modal);
    });
  });

  servicesData.forEach((service) => {
    const detailsModal = document.createElement("div");
    detailsModal.id = `${service.id}-details-modal`;
    detailsModal.className = "details-modal-container";
    detailsModal.innerHTML = `
              <div class="details-modal">
                  <button class="details-modal-close" onclick="closeDetailsModal('${service.id}')">&times;</button>
                  <div class="details-modal-header">
                      <h1>${service.title}</h1>
                      <span>${service.question ? service.question : "" }</span>
                  </div>
                  <div class="details-modal-content">
                      ${service.details}
                  </div>
              </div>
              `;
    modalContainer.appendChild(detailsModal);
  });
}

function openModal(id) {
  document.getElementById(id + "-modal").style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  document.getElementById(id + "-modal").style.display = "none";
  document.body.style.overflow = "auto";
}

function openDetailsModal(id) {
  document.getElementById(id + "-details-modal").style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeDetailsModal(id) {
  document.getElementById(id + "-details-modal").style.display = "none";
  document.body.style.overflow = "auto";
}

function contactUs() {
    const phoneNumber = "+919605933000";
    const aTag = document.createElement("a");
    aTag.href = `tel:${phoneNumber}`;
    aTag.click();
}

window.onclick = function (event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
    document.body.style.overflow = "auto";
  }

};

document.addEventListener("DOMContentLoaded", generateServices());

window.openModal = openModal;
window.closeModal = closeModal;
window.contactUs = contactUs;
window.openDetailsModal = openDetailsModal;
window.closeDetailsModal = closeDetailsModal;
