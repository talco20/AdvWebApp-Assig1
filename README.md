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

## API Testing

### REST Client Testing
Use the `rest.rest` file with VS Code REST Client extension to test all API endpoints.

The file includes:
- Post CRUD operations (Create, Read, Update)
- Comment CRUD operations (Create, Read, Update, Delete)
- Query filtering by sender and user
- Complete test workflow examples

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
