# 🎟️ EventHub — Event Booking Platform

A full-stack event booking web application that lets users browse real events powered by the Ticketmaster API, book seats, and manage their bookings.

---

## 🚀 Features

- 🔐 User authentication (Register / Login with JWT)
- 🎭 Browse real events from Ticketmaster API
- 🔍 Search by keyword, city, and category
- 📅 Book seats for events
- ❌ Cancel bookings
- 👤 My Bookings page (Upcoming / Past / Cancelled)
- 🛡️ Admin dashboard to manage events and view bookings
- ⚡ MongoDB caching — Ticketmaster data cached for 1 hour

---

## 🧰 Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | React + Vite + React Router |
| Styling | Tailwind CSS |
| State | Context API + useState |
| HTTP | Axios |
| Backend | Node.js + Express |
| Database | MongoDB + Mongoose |
| Auth | JWT + bcryptjs |
| Events | Ticketmaster Discovery API |
| Toasts | react-hot-toast |
| Deploy | Vercel (Frontend) + Render (Backend) |

---

## 📁 Project Structure

```
event-booking/
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── eventController.js
│   │   └── bookingController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Event.js
│   │   └── Booking.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── eventRoutes.js
│   │   └── bookingRoutes.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── adminMiddleware.js
│   ├── .env
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── context/
│   │   └── api/
│   └── index.html
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)
- Ticketmaster API key — [Get one here](https://developer.ticketmaster.com)

---

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/event-booking.git
cd event-booking
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
TICKETMASTER_API_KEY=your_ticketmaster_api_key
```

Start the backend:

```bash
npm run dev
```

### 3. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🔌 API Endpoints

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and get JWT token |

### Events
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/events` | Get all events (with cache) |
| GET | `/api/events/:id` | Get single event detail |

### Bookings
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/bookings` | Book an event |
| GET | `/api/bookings/my-bookings` | Get logged in user's bookings |
| PATCH | `/api/bookings/:id/cancel` | Cancel a booking |

### Admin
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/admin/events` | All events with booking counts |
| PATCH | `/api/admin/events/:id` | Edit an event |
| DELETE | `/api/admin/events/:id` | Delete an event |

---

## 🗄️ Database Models

### User
```
name, email, password (hashed), role (user/admin)
```

### Event
```
ticketmasterId, title, date, city, category, image,
totalSeats, bookedSeats, cachedAt
```

### Booking
```
userId (ref: User), eventId (ref: Event), status (confirmed/cancelled)
```

---

## 🌐 Deployment

| Service | Platform |
|---------|----------|
| Frontend | [Vercel](https://vercel.com) |
| Backend | [Render](https://render.com) |
| Database | [MongoDB Atlas](https://www.mongodb.com/atlas) |

---

## 👨‍💻 Author

Built as a portfolio project — a full-stack event booking platform with real API integration.