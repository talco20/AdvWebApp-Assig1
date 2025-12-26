# Advanced Web Applications - Assignment 1

## Team Members
- Tal Cohen
- Shahar Miller

## Project Overview
This is a RESTful API built with Node.js, Express, and MongoDB for Advanced Web Applications course.

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- MongoDB
- npm

### Installation
1. Clone the repository:
```bash
git clone git@github.com-personal:talco20/AdvWebApp-Assig1.git
cd AdvWebApp-Assig1
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Update the `.env` file with your MongoDB connection string and JWT secret.

5. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Documentation
API documentation will be available via Swagger UI at `/api-docs` when the server is running.

## Testing
Run tests with coverage:
```bash
npm test
```

## Project Structure
```
├── controllers/     # Request handlers
├── models/         # Database models
├── routes/         # API routes
├── utils/          # Utility functions
├── index.js        # Application entry point
└── package.json    # Dependencies and scripts
```

## Branch Strategy
- `main`: Production-ready code
- `feature/*`: Feature branches for new functionality
- Work in branches and create PRs for review before merging to main
