document.addEventListener("DOMContentLoaded", function () {
  var detailsButton = document.getElementById("details-button");
  var routeDetails = document.getElementById("route-details");

  if (!detailsButton || !routeDetails) {
    return;
  }

  detailsButton.addEventListener("click", function () {
    if (routeDetails.classList.contains("is-hidden")) {
      routeDetails.classList.remove("is-hidden");
      detailsButton.textContent = "Nascondi i dettagli del percorso";
      detailsButton.setAttribute("aria-expanded", "true");
    } else {
      routeDetails.classList.add("is-hidden");
      detailsButton.textContent = "Mostra i dettagli del percorso";
      detailsButton.setAttribute("aria-expanded", "false");
    }
  });
});
