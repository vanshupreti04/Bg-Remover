# 🖼️ RemoveBG AI – AI Background Remover

<p align="center">
  <img src="https://img.shields.io/badge/React-18-blue" />
  <img src="https://img.shields.io/badge/Vite-Fast-yellow" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-f7df1e" />
  <img src="https://img.shields.io/badge/Clerk-Auth-purple" />
  <img src="https://img.shields.io/badge/ClipDrop-AI-success" />
  <img src="https://img.shields.io/badge/Spring%20Boot-Backend-green" />
  <img src="https://img.shields.io/badge/MySQL-Database-blue" />
  <img src="https://img.shields.io/badge/Razorpay-Payments-0d6efd" />
</p>

---

## ✨ Overview

**RemoveBG AI** is a **full-stack AI-powered background remover application** that allows users to securely log in, upload images, remove backgrounds using AI.

> ⚡ Frontend built with **React + Vite**, backend powered by **Spring Boot**, AI processing via **ClipDrop API**, authentication using **Clerk**, and payments handled with **Razorpay**.

---

## 🧠 How It Works

1. User signs in using **Clerk Authentication**
2. Uploads an image from the frontend
3. Image is sent to **ClipDrop Background Removal API**
4. AI removes the background and returns the processed image
5. Payment is handled via **Razorpay** (for credits)
6. Backend validates requests and manages usage limits

✔ Secure authentication
✔ AI-powered image processing
✔ Payment-gated premium access

---

## 🛠️ Tech Stack

### Frontend

* ⚛️ **React**
* ⚡ **Vite**
* 🟨 **JavaScript**
* 🎨 **CSS**
* 🔐 **Clerk Authentication**
* * 🤖 **Google AI Studio**

### Backend

* 🌱 **Spring Boot**
* 🧠 **ClipDrop API**
* 🐬 **MySQL Database**
* 💳 **Razorpay Payment Gateway**

---

## ☁️ Deployment

| Layer        | Platform            |
| ------------ | ------------------- |
| 🌐 Frontend  | **Vercel**          |
| ⚙️ Backend   | **Railway**         |
| 🗄️ Database | **MySQL (Railway)** |

---

## 📦 Features

✅ AI-based background removal
✅ Secure login with Clerk
✅ Razorpay payment integration
✅ Backend validation & usage tracking
✅ Fast frontend with Vite
✅ Fully deployed (Frontend + Backend)

---

## 🚀 Getting Started

### 📥 Clone the Repositories

```bash
# Frontend
git clone https://github.com/vanshupreti04/Bg-Remover-Frontend.git

# Backend
git clone https://github.com/vanshupreti04/Bg-Remover-Backend.git
```

---

### 📦 Frontend Setup

```bash
cd removebg-ai-frontend
npm install
npm run dev
```

---

### ⚙️ Backend Setup

```bash
cd removebg-ai-backend
./mvnw spring-boot:run
```

---

## 🔐 Environment Variables

Frontend:

```
VITE_CLERK_PUBLISHABLE_KEY=
VITE_CLIPDROP_API_KEY=
VITE_BACKEND_URL=
```

Backend:

```
CLIPDROP_API_KEY=
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
SPRING_DATASOURCE_URL=
SPRING_DATASOURCE_USERNAME=
SPRING_DATASOURCE_PASSWORD=
```

---

## 🖼️ Application Preview

<table align="center">
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/ac334a0c-63be-4450-a977-90a902e258e6" width="420"/>
      <br/>
      <b>Home / Upload Screen</b>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/57722f66-126b-4e77-a774-71a2e52bc083" width="420"/>
      <br/>
      <b>Background Removed Resultw</b>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/15078064-fc5f-4072-8e70-65fb72bc53b1" width="420"/>
      <br/>
      <b>Payment Option</b>
    </td>
  </tr>
</table>


---

## 🔮 Future Enhancements

* Bulk image processing
* Admin dashboard
* Multiple AI models support

---

## 👨‍💻 Author

**Vansh Upreti**
🚀 Full Stack Developer | React | Spring Boot

---

⭐ If you like this project, don’t forget to **star the repository**!
