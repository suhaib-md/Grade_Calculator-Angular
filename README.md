# MEAN Application

This is a simple MEAN (MongoDB, Express.js, AngularJS, Node.js) application for calculating grades based on student marks.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Usage](#usage)

## Features

- Input student marks for multiple subjects.
- Calculate grades based on the average of the provided marks.
- Store marks and grades in a MongoDB database.
- Frontend built with AngularJS, backend with Node.js and Express.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed.
- MongoDB installed and running.

## Getting Started

### Backend

1. Navigate to the `backend` directory.

    ```bash
    cd backend
    ```

2. Install dependencies.

    ```bash
    npm install
    ```

3. Start the Node.js/Express server.

    ```bash
    node index.js
    ```

   The server will run on `http://localhost:3000` by default.

### Frontend

1. Install dependencies.

    ```bash
    npm install -g http-server
    ```

2. Start the HTTP server for the Angular app.

    ```bash
    http-server
    ```

   The Angular app will be served at the specified address (e.g., `http://127.0.0.1:8080`).

## Usage

1. Open your web browser and navigate to the frontend URL (e.g., `http://127.0.0.1:8080`).
2. Enter student marks in the provided form and click "Calculate Grade" to see the calculated grade.

