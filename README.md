<img width="1618" height="873" alt="image" src="https://github.com/user-attachments/assets/4b807899-4b82-473a-aec6-7a79bb904300" />

# 👨‍⚕️ Doctorly: A Full-Stack Doctor Appointment Booking Platform

Doctorly is a comprehensive web application designed to streamline the process of booking and managing appointments between patients and medical professionals. Built with a modern technology stack, it features distinct user roles for patients, doctors, and system administrators, ensuring efficient service delivery and optimal schedule management.

## ✨ Key Features

* **Role-Based Authentication:** Dedicated interfaces and secure authentication for **Patients**, **Doctors**, and **Administrators**.
* **Doctor Management:** Admin panel functionality to add, edit, and manage the list of doctors, specialties, and qualifications.
* **Patient Dashboard:** Patients can view, book, reschedule, or cancel appointments based on doctor availability.
* **Appointment Management:** Real-time scheduling to prevent double-booking and allow doctors to efficiently manage their daily slots.
* **Cloud Media Storage:** Utilizes Cloudinary for secure storage and delivery of all doctor profile images and related media.

---

## 💻 Technology Stack

Doctorly is a full-stack application leveraging the power of modern JavaScript technologies:

### Backend & API
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB Atlas (NoSQL)
* **Media/Storage:** Cloudinary
* **Authentication:** JWT (JSON Web Tokens) for secure session management

### Frontend & UI
* **Framework:** React
* **Styling/Components:** Tailwind CSS, Shadcn/ui (likely, based on modern React standards)
* **Routing:** React Router DOM
* **State Management:** Redux Toolkit

---

## 🛠️ Getting Started (Local Development)

Follow these steps to get a copy of the project running on your local machine.

### Prerequisites

You must have the following installed on your system:

* Node.js (v18.x or higher)
* npm (or yarn)
* MongoDB Atlas Account (or local MongoDB instance)

### Installation

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/happylearning07/Doctorly-doctor_booking_app.git](https://github.com/happylearning07/Doctorly-doctor_booking_app.git)
    cd Doctorly-doctor_booking_app
    ```

2.  **Install Dependencies (Backend & Frontend):**
    ```bash
    # Install backend dependencies
    cd backend
    npm install
    
    # Install frontend/admin dependencies (from respective directories)
    cd ../frontend
    npm install
    cd ../admin
    npm install
    ```

3.  **Set Up Environment Variables:**
    Create a **`.env`** file inside the **`backend`** directory and add your secure keys:

    ```env
    # BACKEND/ADMIN ENVIRONMENT VARIABLES (Critical for Security)
    PORT=8000
    MONGO_URI="YOUR_NEW_MONGODB_ATLAS_URI"
    CLOUDINARY_CLOUD_NAME="YOUR_CLOUD_NAME"
    CLOUDINARY_API_KEY="YOUR_API_KEY"
    CLOUDINARY_SECRET_KEY="YOUR_SECRET_KEY"
    JWT_SECRET="YOUR_NEW_SECURE_RANDOM_SECRET" 
    ```
    *(Note: Your frontend and admin panels may use separate .env files for local VITE_BACKEND_URL.)*

4.  **Run the Applications:**
    Start the backend server:
    ```bash
    # In the backend directory
    npm run dev 
    ```
    Start the frontend and admin panels in separate terminal tabs:
    ```bash
    # In the frontend directory
    npm run dev 
    # In the admin directory
    npm run dev 
    ```
---
## Admin dashboard 
<img width="1882" height="866" alt="image" src="https://github.com/user-attachments/assets/86d4858c-c15a-4e37-910c-7b7651d565f7" />

## Doctor appointment booking page
<img width="1631" height="840" alt="image" src="https://github.com/user-attachments/assets/cb9b7464-b79d-4f16-9cfa-642748f97266" />

## User Profile Edit Section
<img width="1567" height="860" alt="image" src="https://github.com/user-attachments/assets/e18da945-8c6f-414f-81b8-642c266238f2" />

## Doctor Dashboard
<img width="1914" height="883" alt="image" src="https://github.com/user-attachments/assets/5a7dadd2-24b8-4f78-8192-9ebe075f42cb" />


