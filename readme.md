# 🚀 **Noctura Backend**
<div align="center">

Backend service for **Noctura** — built using  
🔥 **Node.js + Express + MongoDB**  
📨 Email notifications powered by **Nodemailer**

<br>

![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Nodemailer](https://img.shields.io/badge/Nodemailer-35A?style=for-the-badge)

</div>

---

## 🌟 **Overview**

This backend handles:

- 📧 **Contact form emails**  
- 📝 **Lead submissions for service bookings**  
- 📩 Sends all details directly to the admin email using Nodemailer  
- 🗄️ Stores leads in MongoDB (optional)

Designed to be fast, simple, and production-ready.

---

## ✨ **Features**

### 📧 Contact Email API  
- **Endpoint:** `POST /emails`  
- Triggered when a user clicks **"Contact Me"**  
- Accepts the user’s email  
- Instantly forwards it to the admin inbox

---

### 📝 Lead Submission API  
- **Endpoint:** `POST /leads`  
- Triggered when a user fills the **Book a Service** form  
- Collects:
  - Name  
  - Email  
  - Phone  
  - Service Type (`Portfolio Website`, `E-commerce Website`, `Custom Website`)  
  - Optional note  
- Sends everything to the admin email  
- Can also save to MongoDB

---

## 🗂️ **Project Structure**

```
Backend-of-Noctura/
│── models/              # Mongoose models
│── node_modules/        # Dependencies
│── api.js               # API routes
│── app.js               # Main server entry
│── package.json
│── package-lock.json
│── README.md
│── .env                 # Environment variables (not committed)

```

---

## 🔐 **Environment Variables**

Create a `.env` file:

```
MY_EMAIL = your_gmail_address
RECIEVER_EMAIL = reciever_gmail_address
MY_APP_PASSWORD =your_email_app_password
MONGODB_URI = your_mongo_connection_string
```

---

## ⚡ **Installation & Setup**

```bash
# Clone repo
git clone <repo-url>

# Move into folder
cd noctura-backend

# Install dependencies
npm install

# Run server
npm start
```

Server runs on:

```
http://localhost:5000
```

(or the Render-assigned port)

---

## 🌐 **API Endpoints**

| Method | Endpoint     | Description                     |
|--------|--------------|---------------------------------|
| POST   | `/emails`    | Send contact form email         |
| POST   | `/leads`     | Send lead data to admin email   |

---

## 🚀 **Deployment (Render)**

### Build Command
```
npm install
```

### Start Command
```
npm start
```

### Add Environment Variables
- `MY_EMAIL`
- `RECIEVER_EMAIL`
- `MY_APP_PASSWORD`
- `MONGODB_URI `

---

## 🛠️ **Tech Used**

- **Node.js**
- **Express.js**
- **MongoDB (Mongoose)**
- **Nodemailer**
- **Render (deployment)**

---

## 📌 **Future Enhancements**

- Admin dashboard to view leads  
- Input validation & security improvements  
- Rate limiting  
- JWT authentication for admin  
- Email templates with HTML  
