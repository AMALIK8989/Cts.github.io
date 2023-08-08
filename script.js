var revealButton = document.getElementById("revealButton");
var detailsList = document.getElementById("detailsList");
var websiteDescription = document.getElementById("websiteDescription");
var uniqueFeatures = document.getElementById("uniqueFeatures");
var featuresList = document.getElementById("featuresList");
var isFeaturesVisible = false;

revealButton.addEventListener("click", function() {
  if (isFeaturesVisible) {
    detailsList.style.display = "none";
    websiteDescription.style.display = "none";
    uniqueFeatures.style.display = "none";
    featuresList.style.display = "none";
    isFeaturesVisible = false;
  } else {
    detailsList.style.display = "block";
    websiteDescription.style.display = "block";
    uniqueFeatures.style.display = "block";
    featuresList.style.display = "block";
    isFeaturesVisible = true;
    // Scroll to the bottom of the revealed content
    window.scrollTo(0, document.body.scrollHeight);
  }
});
