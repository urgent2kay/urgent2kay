🏦 URGENT 2KAY Frontend

Project Overview

URGENT 2KAY is a fintech web application designed to simplify the bill payment process by allowing users to bundle multiple bills and financial needs into a single request. This request is sent to bill sponsors who can approve payments directly to service providers such as utilities, schools, and merchants. The platform includes features like request bundling, relationship management, direct provider payments, and transparency tools. URGENT 2KAY aims to make bill payments seamless, transparent, and less uncomfortable for both requesters and sponsors.

📋 Table of Contents
Getting Started

Project Structure

Technologies & Libraries Used

Folder Structure

Development Setup

Contributing

🚀 Getting Started
📍 Prerequisites
Before you begin, ensure that the following tools are installed on your local machine:

Node.js (v16 or above)

npm (comes bundled with Node.js)

A code editor like VSCode or any editor of your choice.

💻 Installation
To get the project up and running locally:

Clone the repository to your local machine:


git clone https://github.com/urgent2kay/urgent2kay.git
Navigate to the project folder:


cd urgent2kay
Install dependencies:


npm install
Start the development server:


npm run dev
This will launch the app at http://localhost:3000.

🏗️ Project Structure
This project is organized to ensure scalability, maintainability, and clarity. Below is an overview of the structure:

```plaintext
src/                      # All source code files
├── assets/                # Static assets (images, logos, icons)
├── components/            # Reusable UI components (e.g., Buttons, Inputs, Navbar)
├── features/              # Redux slices and logic grouped by feature/domain (e.g., Auth, Requests)
├── hooks/                 # Custom React hooks for shared functionality
├── layouts/               # Layout components (Sidebar, Header, etc.)
├── pages/                 # Views for different pages (Home, Dashboard, RequestDetails)
├── routes/                # React Router configuration for navigation
├── store/                 # Redux store configuration
├── types/                 # TypeScript types and interfaces
├── utils/                 # Utility functions (e.g., validation, formatting)
├── public/                # Static files (e.g., index.html, favicon)
├── package.json           # NPM package configuration
└── tsconfig.json          # TypeScript configuration
🔧 Technologies & Libraries Used
This project leverages modern web technologies and libraries to ensure a smooth user experience and maintainability:

React: A JavaScript library for building user interfaces

TypeScript: A statically typed superset of JavaScript

Redux Toolkit: Modern Redux library to manage app state

RTK Query: Efficient data fetching and caching tool for Redux

Normal CSS: CSS framework for styling

React Router: A routing library for single-page applications (SPA)

📂 Folder Structure
Here’s a breakdown of the project folder structure and its purpose:

```plaintext

src/
├── assets/                # Static assets (images, logos, icons)
│   ├── logo.svg
│   └── banner.jpg
├── components/            # Reusable UI components
│   ├── Button.tsx         # Button component
│   └── Navbar.tsx         # Navbar component
├── features/              # Redux slices and logic grouped by feature/domain
│   ├── auth/              # Auth state & logic
│   │   ├── authSlice.ts   # Redux slice for authentication
│   │   └── authApi.ts     # API calls for authentication
│   ├── requests/          # Bill request state & logic
│   │   ├── requestSlice.ts
│   │   └── requestApi.ts
│   ├── sponsors/          # Sponsor-related state & logic
│   └── payments/          # Payment-related state & logic
├── hooks/                 # Custom React hooks
│   └── useAuth.ts         # Hook for authentication logic
├── layouts/               # Layout components (Sidebar, Header, etc.)
│   └── Header.tsx
├── pages/                 # Views for different pages (Home, Dashboard, etc.)
│   ├── Home.tsx
│   ├── CreateRequest.tsx
│   └── SponsorDashboard.tsx
├── routes/                # React Router configuration
│   └── AppRoutes.tsx
├── store/                 # Redux store configuration
│   └── index.ts
├── types/                 # TypeScript types and interfaces
│   └── api.ts             # API response types
├── utils/                 # Utility functions (e.g., formatting)
│   └── formatters.ts
└── App.tsx                # Main app entry point
└── index.tsx              # Renders the App component into the DOM
⚙️ Development Setup
🚀 Running the App Locally
After cloning the repository and installing the dependencies, follow these steps to run the app locally:

Start the development server:


npm run dev
This will open the app in your browser at http://localhost:3000.

🧪 Running Tests
Although tests are not yet set up, we plan to integrate testing in the future. For now, you can use testing libraries like Jest and React Testing Library once we get started on the tests.

📦 Building for Production
To build the app for production, run:


npm run build
This will create an optimized build that you can deploy.

🛠️ Contributing
We welcome contributions to the project! To contribute:

Fork the repository on GitHub.

Clone your fork:


git clone https://github.com/your-username/urgent2kay.git
Create a new branch for your feature or bugfix:


git checkout -b feature/your-feature-name
Make your changes and commit them with a descriptive message:


git commit -m "Description of changes"
Push your changes:


git push origin feature/your-feature-name
Open a pull request to merge your changes into the dev branch of the main repository.

