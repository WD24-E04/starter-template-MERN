# Starter Template for MERN Applications

This template provides a foundational structure to help you quickly kickstart your MERN stack projects.

## 🌟 What's Included?

### 1. **Backend**

Located in the `/server` directory, the backend is built using **Node.js** and **Express.js**. It includes:

- **Basic Server Setup**: Pre-configured `server.js` to get you started.
- **Routing Structure**: Modular routes in the `routes` folder.
- **Controllers**: Centralized logic for handling requests in the `controllers` folder.
- **Models**: Example Mongoose models for MongoDB integration.
- **Middleware**: Common middleware utilities to enhance your app.
- **Seeding**: A `seed` folder for populating your database with initial data (example included).

```
server/
├── controllers/    # Business logic for routes
├── libs/           # Reusable utilities
├── middleware/     # Custom middleware functions
├── models/         # Mongoose schemas/models
├── routes/         # Express routes
├── seed/           # Database seeding logic
├── server.js       # Main entry point
├── package.json    # Backend dependencies
├── .env            # Environment variables
```

### 2. **Frontend**

Located in the `/client` directory, the frontend is configured with **React** and **Vite**. It includes:

- **Main Application Structure**:
  - **`App.jsx`**: The root React component.
  - **`main.jsx`**: Entry point for rendering the React app.
- **API Management**: The `api` folder for managing API requests or services.
- **Reusable Components**: Organized under the `components` folder.
- **Global State Management**:
  - `contexts` folder for Context API setups.
  - `reducers` folder for managing state reducers.
- **Styling**: Custom styles in the `styles` folder.
- **Utilities**: Reusable helper functions in the `utils` folder.
- **Static Assets**: Managed in the `assets` folder.
- **Configuration Files**:
  - `vite.config.js`: Configuration for the development server and build.
  - `eslint.config.js`: Linting rules for cleaner code.
- **Index HTML**:
  - `index.html`: Entry HTML file to load the React application.

```
client/
├── public/         # Static files
├── src/            # React components and app logic
│   ├── App.jsx         # Main React application component
│   ├── main.jsx        # Entry point for rendering the React app
│   ├── api/            # API request management
│   ├── assets/         # Static assets (images, fonts, etc.)
│   ├── components/     # Reusable React components
│   ├── contexts/       # Context API files for global state
│   ├── reducers/       # Reducers for state management
│   ├── styles/         # CSS or styling-related files
│   ├── utils/          # Utility functions for reusable logic
├── package.json    # Frontend dependencies
├── vite.config.js  # Vite configuration
├── eslint.config.js# Linting rules
├── index.html      # Main HTML file to load the app
```

### 3. **Environment Configuration**

The `/server/.env` file includes placeholders for environment variables:

```env
PORT =
DB_URI =
```

> > You will need to update these values based on your application's requirements.

### 4. **Dependencies**

The required dependencies for both the backend and frontend are specified in their respective `package.json` files. You can install them by running the appropriate commands.

---

## 🛠️ Setting Up the Project

### 1. Clone the Repository

```bash
git clone git@github.com:WD24-E04/starter-template-MERN.git
cd starter-template
```

> > You might want to rename the cloned directory before proceeding.

### 2. Install Dependencies and run the servers

#### Backend:

```bash
cd server
npm install
npm start
```

#### Frontend:

```bash
cd client
npm install
np run dev
```

## 🌱 Extending the Template

As we learn further, we will:

1. **Expand Resources**: Create additional models and routes tailored to your application's requirements.
2. **Implement Authentication**: Integrate user authentication using libraries such as JWT.

<br/>

If you have any questions or run into issues, don't hesitate to reach out. 🌈

## 🎉 Happy Coding!
