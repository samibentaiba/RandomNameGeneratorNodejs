document.addEventListener("DOMContentLoaded", () => {
  const generatedNameElement = document.getElementById("generated-name");
  const generateButton = document.getElementById("generate-btn");
  const refreshButton = document.getElementById("refresh-btn");

  // Function to fetch a random name from the server
  async function getRandomName() {
    try {
      const response = await fetch("/api/names");
      const data = await response.json();
      generatedNameElement.textContent = data.name;

      // Add animation effect
      generatedNameElement.style.opacity = "0";
      setTimeout(() => {
        generatedNameElement.style.opacity = "1";
      }, 150);
    } catch (error) {
      console.error("Error fetching name:", error);
      generatedNameElement.textContent = "Error generating name";
    }
  }

  // Generate name button click handler
  generateButton.addEventListener("click", getRandomName);

  // Refresh page button click handler
  refreshButton.addEventListener("click", () => {
    window.location.reload();
  });

  // Generate a name when the page loads
  getRandomName();
});
