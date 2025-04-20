# The Digital Diner 🍽️

A modern restaurant ordering system built using the MERN stack with PostgreSQL integration. This project allows users to browse the menu, manage a shopping cart, and place orders seamlessly. The application is fully responsive, interactive, and designed to enhance the customer experience.

## Live Demo 🚀  
Frontend: [Netlify Deployment](https://digital-diner1.netlify.app/)  
Backend: [Render Deployment](https://digital-diner-backend-rnjo.onrender.com/)

---

## Features ✨

- **Menu Display:** Categorized menu items (Appetizers, Main Courses, Desserts, Drinks).
- **Shopping Cart:** Add, view, update, or remove items from the cart. Displays total price dynamically.
- **Order Placement:** Submit orders with basic contact information.
- **Order Confirmation/History:** View order confirmation and past orders associated with a phone number.
- **Interactive UI:** Fully responsive, with modern and user-friendly design.

---

## Tech Stack 🛠️

- **Frontend:** React.js, Redux Toolkit, React Router, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Databases:** MongoDB 
- **Deployment:** Netlify (Frontend), Render (Backend)

---
## 🧠 Why MongoDB over PostgreSQL?

-**✅ Flexibility for Menu Data**
Menu items often contain semi-structured or optional fields such as:

imageUrl, tags, description, customizations, etc.
MongoDB allows schema-less flexibility, making it ideal for dynamic and evolving menu structures without enforcing rigid rules.

-**✅ Developer Speed & Simplicity**
MongoDB enables rapid development, especially in early-stage projects or prototypes. With Mongoose, validation and modeling become easier without setting up extensive schemas or dealing with complex joins.

-**✅ Natural Fit for Orders**
Order objects contain arrays of items, total amount, and customer contact info. This structure is perfectly suited for MongoDB’s nested document model, which makes retrieval and storage more efficient without needing relational mapping.

-**✅ Future-Ready for Scalability**
MongoDB scales horizontally and is a great fit for modern, high-speed web applications where read-heavy workloads (like fetching menus/orders) are common.

---

## Installation & Setup 🛠️

### Backend Setup

1. Clone the repository:
   ```sh
   https://github.com/Vashu-Nayak/digital-diner.git

2. Navigate to Project Folder:
   ```sh
   cd digital-diner/backend

3. Install dependencies:
   ```sh
   npm install

4. Set up the environment variables in a .env file:
    ```sh
    PORT=5000
    MONGO_URI=mongodb+srv://nvashu1:newpassword@cluster0.ta5mg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    ```

5. Start the Server
    ```sh
    npm start
    ```

6. Backend will run on http://localhost:5000.

### Frontend Setup

1. Navigate to the frontend folder:
    ```sh
    cd digital-diner/frontend
    ```

2. Install dependencies:
   ```sh
   npm install

3. Start the development server:
   ```sh
   npm run dev

4. Frontend will run on http://localhost:5173.

### Author :

### Vashu

Internship Assessment Submission for Eatoes




   
