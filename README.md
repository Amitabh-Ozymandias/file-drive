#File-Drive

##FileDrive
A simple, local image storage web app built with React. FileDrive lets users register/login (no backend — all data is stored in localStorage), upload images, and view them in a paginated gallery with light/dark mode support.

## Features
🔐 Register / Sign In (client-side only, via localStorage)

🖼️ Upload Images (stored in base64 format per user)

🗂️ Gallery View with pagination

🌗 Dark/Light Mode Toggle

🔓 Sign Out support

💾 All user data is persisted in the browser using localStorage

## Tech Stack
React

React Router

HTML/CSS (custom styles)

JavaScript

localStorage (no backend required)


##Usage
Open the app and sign in with your email and password.

If the email isn't found, a new account will be created automatically.

Use the Upload tab to add images (stored in your browser).

View your images in the Home tab.

Toggle the theme using the animated switch in the navbar.

Sign out when you're done.

##Data Storage
All data (user credentials and images) is stored locally in the browser using localStorage. No data is sent to any server. This makes the app secure for personal use but not intended for production without a backend.

