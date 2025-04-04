// const express = require("express");
// const nodemailer = require("nodemailer");
// const cors = require("cors");

// const app = express();
// const PORT = 5500; // Ensure this is 5500

// app.use(express.json()); // Allow JSON body
// app.use(cors()); // Allow frontend requests

// Handle POST request to /submit-form
// app.post("/submit-form", async (req, res) => {
//     console.log("Received form submission:", req.body);

//     const { name, email, phone, fromDate, toDate } = req.body;

//     if (!name || !email || !phone || !fromDate || !toDate) {
//         return res.status(400).json({ success: false, message: "All fields are required!" });
//     }

//     // Configure Gmail SMTP
//     const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//             user: "your-email@gmail.com", // Your Gmail
//             pass: "your-app-password" // Use App Password, NOT your actual password
//         }
//     });

//     const mailOptions = {
//         from: "your-email@gmail.com",
//         to: "madilfarmstay@gmail.com",
//         subject: "New Booking Request",
//         text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nFrom: ${fromDate}\nTo: ${toDate}`
//     };

//     try {
//         await transporter.sendMail(mailOptions);
//         console.log("Email sent successfully!");
//         res.json({ success: true, message: "Email sent successfully!" });
//     } catch (error) {
//         console.error("Error sending email:", error);
//         res.status(500).json({ success: false, message: "Email sending failed" });
//     }
// });

// Start server
// app.listen(PORT, () => {
//     console.log(`Server running on http://127.0.0.1:${PORT}`);
// });

  // This event triggers every time the page is shown, including when coming back from a submission.
  window.addEventListener("pageshow", function(event) {
    document.getElementById("bookingForm").reset();
  });
