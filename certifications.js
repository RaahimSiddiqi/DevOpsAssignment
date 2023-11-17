// Sample certification data, replace with your actual certifications
const certificationsData = [
    { name: "Certification 1", issuingAuthority: "Certification Authority 1", date: "January 2022" },
    { name: "Certification 2", issuingAuthority: "Certification Authority 2", date: "March 2023" },
    // Add more certifications as needed
];

// Function to display certifications
function displayCertifications() {
    const certificationsContainer = document.querySelector(".certificates");

    // Clear existing certifications
    certificationsContainer.innerHTML = "";

    // Display certifications
    certificationsData.forEach(certification => {
        const certificationItem = document.createElement("div");
        certificationItem.classList.add("certificate-item");
        certificationItem.textContent = `${certification.name} - ${certification.issuingAuthority} (${certification.date})`;
        certificationsContainer.appendChild(certificationItem);
    });
}

// Initial certifications display
displayCertifications();
