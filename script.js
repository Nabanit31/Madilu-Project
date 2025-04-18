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


