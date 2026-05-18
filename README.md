# Java + React Fullstack Application

A modern fullstack application with Java Spring Boot backend and React frontend.

## Project Structure

```
java-react-app/
├── backend/          # Spring Boot REST API
├── frontend/         # React Application
└── README.md
```

## Prerequisites

- Java 17+
- Node.js 16+
- Maven
- npm or yarn

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Run the Spring Boot application:
```bash
./mvnw spring-boot:run
```

The backend will start on `http://localhost:8080`

Available endpoints:
- `GET /api/hello` - Returns greeting message
- `GET /api/status` - Returns API status
- `GET /api/version` - Returns API version

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will start on `http://localhost:3000`

## Features

- **Backend**: Spring Boot 3.2 with REST API
- **Frontend**: React 18 with Axios for API calls
- **Database**: H2 embedded database (configurable)
- **Build Tool**: Maven for backend, npm for frontend
- **CORS**: Enabled for frontend-backend communication

## Development

Both services need to run simultaneously:

**Terminal 1 (Backend):**
```bash
cd backend
./mvnw spring-boot:run
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm start
```

## Building for Production

### Backend
```bash
cd backend
./mvnw clean package
```

### Frontend
```bash
cd frontend
npm run build
```

## Project Details

### Backend
- Spring Boot 3.2.0
- Java 17
- H2 Database
- Spring Data JPA
- Spring Web MVC

### Frontend
- React 18.2.0
- React DOM 18.2.0
- Axios for HTTP requests
- CSS3 with modern styling

## License

MIT