// document.addEventListener("DOMContentLoaded", function () {
//     const galleryScroller = document.querySelector(".gallery-scroller");
//     const leftArrow = document.querySelector(".gallery-chevron.left");
//     const rightArrow = document.querySelector(".gallery-chevron.right");

//     // Set the scroll amount (adjust as needed)
//     const scrollAmount = 300;

//     // Scroll left when left chevron is clicked
//     leftArrow.addEventListener("click", function () {
//         galleryScroller.scrollBy({ left: -scrollAmount, behavior: "smooth" });
//     });

//     // Scroll right when right chevron is clicked
//     rightArrow.addEventListener("click", function () {
//         galleryScroller.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     });
// });

// document.getElementById("bookingForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent default form submission

//     const formData = {
//         name: document.querySelector("input[name='name']").value,
//         email: document.querySelector("input[name='email']").value,
//         phone: document.querySelector("input[name='phone']").value,
//         fromDate: document.querySelector("input[name='fromDate']").value,
//         toDate: document.querySelector("input[name='toDate']").value
//     };

//     fetch("http://127.0.0.1:5500/submit-form", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(formData)
//     })
//     .then(response => response.json())
//     .then(data => {
//         alert(data.message);
//         document.getElementById("bookingForm").reset();
//     })
//     .catch(error => console.error("Error:", error));
// });
 // JavaScript for custom scrollbar functionality
// Fixed and improved version

document.getElementById('bookingForm').addEventListener('submit', function(e) {
    // --- Text‑field validations ---
    const nameVal  = document.getElementById('name').value.trim();
    const emailInput = document.getElementById('email'); // Assuming your email input has the id 'email'
    const emailVal = emailInput.value;
    const phoneVal = document.getElementById('phone').value.trim();
  
    const nameRegex  = /^[A-Za-z\s]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com)$/;
    const phoneRegex = /^\d{10}$/;
  
    if (!nameRegex.test(nameVal)) {
      e.preventDefault();
      alert('Full Name must contain only letters and spaces.');
      document.getElementById('name').focus();
      return;
    }
  
    if (!emailRegex.test(emailVal)) {
        // Prevent the default form submission
        e.preventDefault();

        // Show the error message
        alert('Please enter a valid email address from an approved domain (e.g., @gmail.com, @yahoo.com, @outlook.com).'); // Update the alert message

        // Focus the email input field
        emailInput.focus();

        // Stop further execution
        return;
    }
  
    if (!phoneRegex.test(phoneVal)) {
      e.preventDefault();
      alert('Phone number must be exactly 10 digits.');
      document.getElementById('phone').focus();
      return;
    }
  
    // --- Date validations ---
    const fromDate = new Date(document.getElementById('fromDate').value);
    const toDate   = new Date(document.getElementById('toDate').value);
    const today    = new Date();
    today.setHours(0,0,0,0);
  
    // 1) From Date cannot be in the past
    if (fromDate < today) {
      e.preventDefault();
      alert('From Date cannot be earlier than today');
      document.getElementById('fromDate').focus();
      return;
    }
  
    // 2) To Date cannot be before From Date
    if (toDate < fromDate) {
      e.preventDefault();
      alert('To Date cannot be earlier than From Date');
      document.getElementById('toDate').focus();
      return;
    }
  
    // 3) Must be at least a one‑day stay
    const oneDayMs = 24 * 60 * 60 * 1000;
    if (toDate - fromDate < oneDayMs) {
      e.preventDefault();
      alert('Booking must be for at least one full day');
      document.getElementById('toDate').focus();
      return;
    }
  
  });
// Add this HTML at the top of your body (after navbar)
document.body.insertAdjacentHTML('afterbegin', `
  <div class="scroll-progress-bar">
      <div class="scroll-progress"></div>
  </div>
`);

// Add this JavaScript
window.addEventListener('scroll', () => {
  const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (window.scrollY / windowHeight) * 100;
  document.querySelector('.scroll-progress').style.width = `${scrolled}%`;
});