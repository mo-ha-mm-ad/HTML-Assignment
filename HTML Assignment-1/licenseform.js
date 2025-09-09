document.getElementById("licenseForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let isValid = true;


  document.querySelectorAll(".error").forEach(err => err.textContent = "");

  let fullname = document.getElementById("fullname");
  if (fullname.value.trim().length < 3) {
    fullname.nextElementSibling.textContent = "Full Name must be at least 3 characters.";
    isValid = false;
  }

  let email = document.getElementById("email");
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email.value.trim())) {
    email.nextElementSibling.textContent = "Enter a valid email address.";
    isValid = false;
  }


  let phone = document.getElementById("phone");
  if (!/^[0-9]{10}$/.test(phone.value.trim())) {
    phone.nextElementSibling.textContent = "Phone number must be 10 digits.";
    isValid = false;
  }

  let licenseNumber = document.getElementById("licenseNumber");
  if (!/^[A-Z0-9-]{5,15}$/.test(licenseNumber.value.trim())) {
    licenseNumber.nextElementSibling.textContent = "License number must be 5-15 chars (A-Z, 0-9, -).";
    isValid = false;
  }

  let licenseType = document.getElementById("licenseType");
  if (licenseType.value === "") {
    licenseType.nextElementSibling.textContent = "Please select a license type.";
    isValid = false;
  }

  let issueDate = document.getElementById("issueDate").value;
  let expiryDate = document.getElementById("expiryDate").value;
  if (issueDate && expiryDate && new Date(issueDate) >= new Date(expiryDate)) {
    document.getElementById("expiryDate").nextElementSibling.textContent = "Expiry date must be after issue date.";
    isValid = false;
  }


  let address = document.getElementById("address");
  if (address.value.trim().length < 10) {
    address.nextElementSibling.textContent = "Address must be at least 10 characters.";
    isValid = false;
  }


  let file = document.getElementById("document").files[0];
  if (!file) {
    document.getElementById("document").nextElementSibling.textContent = "Please upload a document.";
    isValid = false;
  } else {
    let allowedTypes = ["application/pdf", "image/jpeg", "image/png"];
    if (!allowedTypes.includes(file.type)) {
      document.getElementById("document").nextElementSibling.textContent = "Only PDF, JPG, or PNG files allowed.";
      isValid = false;
    }
  }

  if (isValid) {
    alert("Form submitted successfully!");
    document.getElementById("licenseForm").reset();
  }
});
