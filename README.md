FileDrive
FileDrive is a lightweight, local storage-based image uploader and viewer built with React. It allows users to register/sign in, upload image files, view them in a paginated gallery, and switch between light and dark themes—all without a backend!

 Features
🔐 Local Authentication: Sign in or register using just your email and password (stored in localStorage).

📤 Image Upload: Upload image files using the file input. Images are saved as Base64 strings in localStorage.

🖼️ Image Gallery: View uploaded images in a responsive grid layout.

🔢 Pagination: Navigate through images in batches (50 per page).

🌗 Theme Switcher: Toggle between light and dark modes.

🚪 Sign Out: Log out and return to the sign-in screen.

 Tech Stack
React (with functional components & hooks)

React Router DOM for routing

CSS for styling (including custom themes and switches)

LocalStorage for persistent data (users and images)

No backend — everything runs client-side

 Project Structure
arduino
Copy
Edit
FileDrive/
├── components/
│   ├── ImageCard.jsx
│   ├── Navbar.jsx
│   └── Pagination.jsx
├── pages/
│   ├── Home.jsx
│   ├── SignIn.jsx
│   └── Upload.jsx
├── styles/
│   ├── home.css
│   ├── imageCard.css
│   ├── navbar.css
│   ├── pagination.css
│   ├── signIn.css
│   └── upload.css
├── App.jsx
├── main.jsx
├── routes.jsx
├── index.css
└── README.md

 Getting Started
Prerequisites
Node.js (v14 or later)

npm or yarn



✅ Usage
Open the app and sign in with your email and password.

If the email isn't found, a new account will be created automatically.

Use the Upload tab to add images (stored in your browser).

View your images in the Home tab.

Toggle the theme using the animated switch in the navbar.

Sign out when you're done.

📦 Data Storage
All data (user credentials and images) is stored locally in the browser using localStorage. No data is sent to any server. This makes the app secure for personal use but not intended for production without a backend.



Let me know if you'd like a version with badges, or want to deploy it to GitHub Pages or Vercel!
