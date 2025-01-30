Midterm25


📜 Notes App - README




📂 Table of Contents
* 📜 Introduction
* 🚀 Features
* ⚙️ Tech Stack
* 📦 Installation
* 🏃‍♂️ Running the Project
* 📡 API Endpoints
* 💡 Future Improvements
* 📞 Contact





📜 Introduction
The Notes App is a full-stack application that allows users to:
* Register & log in securely
* Create, edit, and delete notes
* Organize notes with tags
* Access notes anytime with a simple UI
Built with React (frontend) and Node.js + MongoDB (backend).



🚀 Features
✔ User Authentication (JWT-based) 
✔ Create, Edit, Delete Notes 
✔ Tagging System for Organization
✔ Secure API with Authentication Middleware
✔ React Router for Navigation
✔ Toast Notifications for User Actions



⚙️ Tech Stack
Technology	Purpose
React.js	Frontend UI framework
TailwindCSS	Styling & responsiveness
Node.js	Backend server
Express.js	API & middleware handling
MongoDB	Database for notes & users
JWT	Authentication (Secure API)
Axios	HTTP requests (Frontend)
Vite	Frontend build tool




📌 1. Set Up a MongoDB Database

✅ Option 1: Use MongoDB Atlas (Recommended)
1. Go to MongoDB Atlas and sign in.
2. Create a new cluster (Shared Cluster is free).
3. Click "Database" > "Connect" > "Drivers"
4. Copy the Connection String, which looks like this:  mongodb+srv://your-username:your-password@cluster0.mongodb.net/your-database-name

   
✅ Option 2: Use a Local MongoDB Server
If you prefer to run MongoDB locally:
     Install MongoDB   brew install mongodb-community@8.0  # Mac                                                                            sudo apt install mongodb                         # Ubuntu                                                      choco install mongodb                              # Windows  2. Start MongoDB:  mongod --dbpath ./data/db.               
       
      database will be available at  mongodb://localhost:27017/your-database-name  



📦 Installation




1️⃣ Clone the Repository

git clone https://github.com/MeaghanDeG/Midterm25.git
cd notes-app



2️⃣ Install Frontend Dependencies

cd frontend
rm -rf node_modules package-lock.json  
npm install



3️⃣ Install Backend Dependencies


cd ../backend
rm -rf node_modules package-lock.json  
npm install





4️⃣ Set Up Environment Variables
Create a .env file inside the backend folder:

ACCESS_TOKEN_SECRET=your-secret-key
MONGO_URI=mongodb+srv://your-db-url
PORT=8000






🏃‍♂️ Running the Project


Start the Backend

cd backend
npm start

✔ Server should start on http://localhost:8000


Start the Frontend

cd frontend
npm run dev

✔ Frontend should start on http://localhost:5173







📡 API Endpoints

🔑 Authentication

Method	Endpoint	Description	Auth Required

POST	/create-account	Register a new user	❌ No
POST	/login	Login and get token	❌ No
GET	/get-user	Fetch user details	✅ Yes

📝 Notes

Method	Endpoint	Description	Auth Required
GET	/get-all-notes	Fetch all user notes	✅ Yes
POST	/add-note	Add a new note	✅ Yes
PUT	/edit-note/:id	Edit an existing note	✅ Yes
DELETE	/delete-note/:id	Delete a note	✅ Yes



💡 Future Improvements
🔹 Dark Mode Support 🔹 Search & Filter for Notes 🔹 Rich Text Editor for Notes 🔹 Drag & Drop for Note Organization

📞 Contact

📧 Email: meaghandegroot@gmail.com
