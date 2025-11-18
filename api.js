const express = require("express");
const router = express.Router();
const EmailModel = require("./models/email-model");
const nodemailer = require("nodemailer");
const LeadModel = require("./models/lead-model")

router.get("/", (req, res) => {
  res.send("working");
});


router.post("/emails", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: "Email is required" });

    
    const newEmail = await EmailModel.create({ email });

    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,       // your Gmail
        pass: process.env.MY_APP_PASSWORD // app password (not your actual Gmail password)
      }
    });

    // ✉️ Compose email
    const mailOptions = {
      from: process.env.MY_EMAIL,
      to: process.env.RECIEVER_EMAIL, 
      subject: "📥 New Contact Request",
      text: `You received a new contact request:\n\nEmail: ${email}`,
    };

    // Send mail
    await transporter.sendMail(mailOptions);
    console.log("📧 Email sent to your inbox");

    res.status(201).json({ message: "Email saved and sent successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});


// 🧩 POST /api/leads
router.post("/leads", async (req, res) => {
  try {
    const { name, email, phone, service, note } = req.body;

    // 🔍 Validation
    if (!name || !email || !phone || !service) {
      return res.status(400).json({ error: "All required fields must be filled" });
    }

    // 💾 Save to MongoDB
    const newLead = await LeadModel.create({
      name,
      email,
      phone,
      service,
      note,
    });

    // 📧 Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
       host: "smtp.gmail.com",
       port: 465,
       secure: true, // MUST be true for port 465
       auth: {
       user: process.env.EMAIL_USER,
       pass: process.env.EMAIL_PASS,
      },
      });
    // ✉️ Compose email message
    const mailOptions = {
      from: process.env.MY_EMAIL,
      to: process.env.RECIEVER_EMAIL , // You can define another inbox
      subject: `📩 New Lead - ${service}`,
      html: `
        <h2>New Lead Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Note:</strong> ${note || "No additional note provided."}</p>
        <hr>
        <p style="font-size: 12px; color: gray;">Generated automatically by your Noctura website.</p>
      `,
    };

    // 🚀 Send email
    await transporter.sendMail(mailOptions);
    console.log("✅ New lead email sent!");

    // ✅ Success response
    res.status(201).json({
      message: "Lead saved and email notification sent successfully!",
      data: newLead,
    });
  } catch (err) {
    console.error("❌ Error handling lead submission:", err);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
});




module.exports = router;