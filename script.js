function toggleAccordion(id) {
    var content = document.getElementById(id);
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function showContactInfo() {
    var contactInfo = document.getElementById("contact-info");
    if (contactInfo.style.display === "none") {
        contactInfo.style.display = "block";
    } else {
        contactInfo.style.display = "none";
    }
}

