# Student Information System

This project is a simple web-based Student Information System that allows users to input and view student details. It includes a login page for admin access, a form for entering student information, and an admin page for displaying the student details.

## Features

- **Login Page**: Secure login for admin access.
- **Student Information Form**: Form to input student details including Name, Roll No, Registration No, Course, Semester, Phone, and Email.
- **Admin Page**: Displays the list of students with their details in a table format.

## Project Structure
```
your-project/ 
├── public/ 
│ ├── form.html 
│ ├── login.html 
│ ├── admin.html 
│ ├── style.css 
│ ├── script.js 
│ ├── login_script.js 
│ ├── admin_script.js 
│ └── data.json 
└── server.js
```
## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Saravanakumar-Kalyan/student-info.git
   ```
   ```sh
   cd student-information-system

2. **Install Dependencies:**
   ```sh
   npm init -y
   ```
    ```sh
    npm install express

4. **Run the server:**
    ```sh
    node server.js

5. Open your browser and navigate to http://localhost:8000/ to access the page.


## Usage
1. **Login:** Use the login page to access the admin page. For demonstration purposes, the username is admin and the password is password.

2. **Add Student Information:** Navigate to http://localhost:8000/form.html to input student details.

3. **View Student Information:** After logging in, navigate to http://localhost:8000/admin.html to view the list of students.



## Files

* **form.html:** HTML form for entering student details.

* **login.html:** HTML login page for admin access.

* **admin.html:** HTML page for displaying student details.

* **style.css:** CSS file for styling the pages.

* **script.js:** JavaScript file for handling form submission.

* **login_script.js:** JavaScript file for handling login.

* **admin_script.js:** JavaScript file for displaying student details.

* **data.json:** JSON file for storing student details.

* **server.js:** Node.js server file for handling requests and serving static files.

---
