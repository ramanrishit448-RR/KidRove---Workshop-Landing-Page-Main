# Kids Lab Workshop Landing Page - GEMA Assessment

A modern, responsive landing page for the AI & Robotics Summer Workshop, built as an assessment project for **GEMA Education Technology Private Limited**.

## 🎯 Project Purpose

This project showcases a full-stack web application designed to promote and manage registrations for the Kids Lab AI & Robotics Summer Workshop. It demonstrates end-to-end development capabilities including:

- **Frontend Engineering**: Building an engaging, responsive user interface with modern React patterns
- **Backend Development**: Creating a robust API with proper validation and error handling
- **Database Integration**: Managing enquiry data with MongoDB and fallback persistence
- **Deployment Ready**: Configured for Vercel deployment with environment-based configuration

## 📁 Repository Structure

- `/frontend` - React SPA (Vite, TypeScript, Tailwind CSS v4, Framer Motion, React Hook Form, Zod, Lucide Icons).
- `/backend` - Express Server (Node.js, TypeScript, Mongoose/MongoDB, express-validator).

## ✨ Key Features

- **Beautiful Landing Page**: Multi-section layout with Hero, Details, Outcomes, Testimonials, and FAQ sections
- **Smart Registration Form**: Client-side (Zod) and server-side (express-validator) validation
- **Database Resilience**: MongoDB integration with automatic JSON fallback if database is unavailable
- **Responsive Design**: Mobile-first approach with Tailwind CSS v4
- **Smooth Animations**: Framer Motion for engaging UI transitions
- **Type-Safe**: Full TypeScript implementation for both frontend and backend
- **API Health Monitoring**: Built-in health check endpoint for backend status

---

## 🚀 How to Run the Project

### Prerequisites

- Node.js (v20+ recommended)
- MongoDB (optional but automatically used if running locally on default port `27017`)

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

    - The backend will start on `http://localhost:5000`.
    - It will automatically attempt to connect to MongoDB at `mongodb://127.0.0.1:27017/kidslab-workshop`.
    - **Fallback Mechanism**: If MongoDB is not running, the backend logs the connection error but remains running. Submissions will fall back to appending to `backend/data/registrations.json` so the form remains fully functional!

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

    - The frontend will start on `http://localhost:5173`.

---

## 🏗️ Technical Architecture

### Backend

- **Express.js** server with TypeScript for type safety
- **MongoDB** via Mongoose for persistent data storage
- **CORS** middleware for secure frontend-backend communication
- **Validation** middleware using express-validator
- **Logging** middleware for request tracking
- **Fallback System**: Automatic JSON file storage when MongoDB is unavailable

### Frontend

- **React 19** with modern hooks and lazy component loading
- **Tailwind CSS v4** for styling and responsive design
- **Framer Motion** for smooth animations and transitions
- **React Hook Form** with Zod validation for form handling
- **Vite** for fast bundling and development server
- **Component-based Architecture**: Modular, reusable components

### Data Model

```typescript
Enquiry {
  name: string (2-50 chars)
  email: string (valid email)
  phone: string (10-15 digits)
  workshop: string (default: "AI & Robotics Summer Workshop")
  createdAt: Date
}
```

---

## 📊 API Endpoints

### POST /api/enquiry

Submit a new workshop enquiry.

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "workshop": "AI & Robotics Summer Workshop"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Enquiry submitted successfully",
  "savedToMongo": true,
  "savedToBackup": true
}
```

### GET /health

Check backend and database status.

**Response:**

```json
{
  "status": "UP",
  "database": "CONNECTED"
}
```

---

## 🔧 Environment Configuration

Create `.env` files in both backend and frontend directories as needed:

**Backend (.env):**

```
MONGODB_URI=mongodb://127.0.0.1:27017/kidslab-workshop
FRONTEND_URL=http://localhost:5173
```

**Frontend (.env):**

```
VITE_API_BASE_URL=http://localhost:5000
```

---

## 📦 Build & Deployment

### Build for Production

**Backend:**

```bash
cd backend
npm run build
npm start
```

**Frontend:**

```bash
cd frontend
npm run build
npm run preview
```

### Vercel Deployment

The project includes `vercel.json` configuration for seamless Vercel deployment. Both frontend and backend can be deployed as separate functions or applications.

---

## 🧪 Validation Rules

### Name

- Length: 2-50 characters
- Required

### Email

- Must be a valid email format
- Required
- Normalized to lowercase

### Phone

- Format: 10-15 digits with optional +, -, spaces, parentheses
- Required
- Examples: `9876543210`, `+91 9876543210`, `(987) 654-3210`

---

## 💾 Data Persistence

The backend implements a **dual-storage strategy**:

1. **MongoDB (Primary)**: If available, all enquiries are saved to MongoDB
2. **JSON Backup (Fallback)**: Regardless of MongoDB status, enquiries are also saved to `backend/data/registrations.json`

This ensures:

- No data loss even if database is temporarily unavailable
- Offline-first capability for demo/assessment purposes
- Easy debugging with human-readable JSON file

---

## 🛠️ Technology Stack Summary

| Layer      | Technology                                                 |
| ---------- | ---------------------------------------------------------- |
| Frontend   | React 19, TypeScript, Tailwind CSS v4, Vite, Framer Motion |
| Backend    | Node.js, Express.js, TypeScript                            |
| Database   | MongoDB, Mongoose                                          |
| Validation | Zod (Frontend), express-validator (Backend)                |
| Forms      | React Hook Form                                            |
| Deployment | Vercel                                                     |

---

## 📝 Assessment Details

**Project:** Kids Lab Workshop Landing Page
**Organization:** GEMA Education Technology Private Limited
**Assessment Focus:**

- Full-stack development capabilities
- API design and implementation
- Frontend user experience and responsiveness
- Error handling and data validation
- Code organization and TypeScript best practices

---

## 📋 Approach & Methodology

**My Approach (100-150 words):**

This project was developed using a modular, component-driven architecture. I separated concerns into distinct frontend and backend services, ensuring scalability and maintainability. The frontend prioritizes user experience with smooth animations, lazy-loaded components, and comprehensive form validation using Zod. The backend implements a robust REST API with express-validator for server-side validation, ensuring data integrity. A critical design decision was implementing a dual-storage strategy: MongoDB for production use with JSON file fallback for resilience. This approach ensures the application functions in any environment. TypeScript throughout provides type safety, reducing runtime errors. The project follows industry best practices including CORS configuration, health check endpoints, and proper error handling at each layer.

---

## 🚀 Future Improvements (100-150 words)

If given more time, I would implement: (1) **Authentication & Authorization**: User login system with JWT tokens and role-based access control for admin dashboard. (2) **Admin Dashboard**: Backend UI to view, filter, and export enquiries with analytics. (3) **Email Notifications**: Automated confirmation emails to users and notification emails to admins. (4) **Rate Limiting**: Prevent spam submissions with rate limiting middleware. (5) **Comprehensive Testing**: Unit tests for validators, integration tests for API endpoints, and E2E tests using Cypress. (6) **Caching Layer**: Redis implementation for frequently accessed data. (7) **API Documentation**: Swagger/OpenAPI specifications for better developer experience. (8) **Enhanced Monitoring**: Application performance monitoring and error tracking with services like Sentry. (9) **Database Indexing**: Optimized MongoDB indexes for faster queries. (10) **CI/CD Pipeline**: GitHub Actions for automated testing and deployment.
```    *   Open`http://localhost:5173/` in your browser. \* Test filling out the form at the bottom. The frontend will communicate directly with the local server to record registrations.

---


