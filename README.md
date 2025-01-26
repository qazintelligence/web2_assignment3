────୨ৎ──── # User Registration and Login System ────୨ৎ────

This is a simple user registration and login system built using **Node.js**, **Express**, and **MongoDB**. System allows users to create account and in case if login they want to use is taken, the will get corresponding warning.

## Features ૮₍ ˶ᵔ ᵕ ᵔ˶ ₎ა:
- **Registration**: New users can sign up by providing a username and password.
- **Login**: Registered users can log in with their username and password.
- **User Validation**: Prevents duplicate usernames during registration.
  
## Requirements:
- Node.js
- MongoDB (local or remote)

## Setup /ᐠ - ˕ -マ:

1. Clone this repository to your local machine.
2. Install dependencies:
   npm install
3. Start MongoDB (if not already running):
   mongod
4. Start the application:
   node index.js
5. Open your browser and navigate to `http://localhost:3000` to use the app.

## Folder Structure:
- `index.js`: The main server file.
- `db.js`: MongoDB connection and schema.
- `signup.html`: The user registration form.
- `login.html`: The user login form.

## Future Improvements:
- Implement password hashing for enhanced security.
- Add user authentication via JWT (JSON Web Tokens).
- Improve error handling and user feedback.

⋆｡˚୨That's it. Thanks for reading୧˚｡
