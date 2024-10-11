# Task Management API

This is a Node.js-based API for managing tasks, built with Express and MongoDB.

## Features

- User authentication with JWT
- Task management: create, update, delete tasks
- Input validation using Joi
- Error handling with express-async-handler

## Requirements

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/task-management-api.git
   cd task-management-api

2. Install dependencies
   npm install
   
4. run the server
   npm start

5. Setup environment variable .env
   
   PORT=port
   MONGO_URI=your-mongodb-connection-string
   JWT_SECRET=your-jwt-secret
