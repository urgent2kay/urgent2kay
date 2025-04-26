🚀 URGENT 2KAY Frontend

Project Overview

URGENT 2KAY is a fintech web application designed to streamline bill payments by bundling multiple bills and financial needs into a single request. Bill sponsors can approve payments directly to service providers like utilities, schools, and merchants. This platform aims to make bill payments seamless and transparent for both requesters and sponsors.

Table of Contents
Getting Started

Project Structure

Technologies & Libraries

Development Setup

Contributing

Getting Started
Prerequisites
Before starting, ensure you have the following tools installed on your local machine:

Node.js (v16 or above)

npm (comes with Node.js)

VSCode (or your preferred code editor)

Installation
Clone the repository to your local machine:

bash
git clone https://github.com/urgent2kay/urgent2kay.git
Navigate to the project folder:

bash
cd urgent2kay
Install dependencies:

bash
npm install
Start the development server:

bash
npm run dev
This will launch the app at http://localhost:3000.

Project Structure
The project is organized to ensure clarity and scalability:

plaintext
src/
├── assets/              # Static assets (images, logos, icons)
├── components/          # Reusable UI components (Buttons, Inputs, Navbar)
├── features/            # Redux slices & logic grouped by feature/domain
├── hooks/               # Custom React hooks
├── layouts/             # Layout components (Header, Sidebar)
├── pages/               # Page components (Home, Dashboard)
├── routes/              # React Router configuration
├── store/               # Redux store configuration
├── utils/               # Utility functions (e.g., formatters)
└── App.tsx              # Main App entry point
└── index.tsx            # Renders the App component
Technologies & Libraries
React: Library for building user interfaces

TypeScript: For static typing

Redux Toolkit: For state management

React Router: For navigation between pages

CSS: Standard CSS for styling

Development Setup
Running the App Locally
To run the app locally after cloning the repository:

bash
npm run dev
This will open the app in your browser at http://localhost:3000.

Contributing
We welcome contributions to the project! Here's how you can contribute:

Fork the repository on GitHub.

Clone your fork:

bash
git clone https://github.com/urgent2kay/urgent2kay.git
Create a new branch for your feature or fix:

bash
git checkout -b feature/your-feature-name
Make changes and commit:

bash
git commit -m "Your commit message"
Push your changes:

bash
git push origin feature/your-feature-name
Open a pull request to merge your changes into the dev branch.

