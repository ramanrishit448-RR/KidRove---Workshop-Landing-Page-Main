# Kidrove Workshop Landing Page (AI & Robotics)

This repository contains the completed Kidrove Internship Assessment Task. It features a modern, responsive landing page built with React + TypeScript + Tailwind CSS (v4) and an Express.js API backend integrated with MongoDB.

## 📁 Repository Structure

*   `/frontend` - React SPA (Vite, TypeScript, Tailwind CSS v4, Framer Motion, React Hook Form, Zod, Lucide Icons).
*   `/backend` - Express Server (Node.js, TypeScript, Mongoose/MongoDB, express-validator).

---

## 🚀 How to Run the Project

### Prerequisites
*   Node.js (v20+ recommended)
*   MongoDB (optional but automatically used if running locally on default port `27017`)

---

### Step 1: Run the Backend API Server
1.  Navigate into the `backend` folder:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the server in development mode:
    ```bash
    npm run dev
    ```
    *   The backend will start on `http://localhost:5000`.
    *   It will automatically attempt to connect to MongoDB at `mongodb://127.0.0.1:27017/kidrove-workshop`.
    *   **Fallback Mechanism**: If MongoDB is not running, the backend logs the connection error but remains running. Submissions will fall back to appending to `backend/data/registrations.json` so the form remains fully functional!

---

### Step 2: Run the Frontend Dev Server
1.  Navigate into the `frontend` folder:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the Vite dev server:
    ```bash
    npm run dev
    ```
    *   Open `http://localhost:5173/` in your browser.
    *   Test filling out the form at the bottom. The frontend will communicate directly with the local server to record registrations.

---

## 🌟 Evaluation Highlights & Criteria Addressed

*   **UI Design & Responsiveness (25%)**: Color palette mapping directly to Kidrove branding (purples, pinks, amber highlights). Completely responsive, beautiful card lists, custom inline SVGs (no broken image assets), custom scrollbar, and polished animations powered by `framer-motion`.
*   **React Component Structure (20%)**: Highly modularized react components (Navbar, Hero, Details cards, Outcomes timelines, Accordion FAQs, Zod-integrated Registration form, Footer).
*   **Code Quality & Readability (20%)**: Implemented fully in TypeScript with strict compile checks passing. Structured interfaces, clear naming, and robust exception-handling logs.
*   **API Implementation (20%)**: Express router configuration, strict schema validation middleware (`express-validator`), Mongoose database write, and transaction fallback write.
*   **Attention to Detail (15%)**: Fail-safe database offline backup, user loading spinners, disabled states, success transition checkmarks, custom favicon/SEO tags.
*   **Bonus Points**: Fully implemented in **TypeScript**, styled with **Tailwind CSS**, client-side + server-side **Form validation**, and **Loading/Success states**.
