# Task_Crud

I developed fully functional Backend with JWT Authentication and Authorizations using hashing passwords. Below is brief explanation about this project..

# Required NPM Packages
The project uses several packages that need to be installed:

1. **express**  
   - A web framework for Node.js that simplifies building web applications and APIs.  
   - Install: `npm install express`

2. **mongoose**  
   - MongoDB object modeling for Node.js. Mongoose provides a straightforward way to interact with MongoDB databases by using schemas and models.  
   - Install: `npm install mongoose`

3. **jsonwebtoken**  
   - A library for generating and verifying JSON Web Tokens (JWT). It is used for securely transmitting information between parties as a JSON object, often used for user authentication.  
   - Install: `npm install jsonwebtoken`

4. **bcryptjs**  
   - A library for hashing passwords. It provides functions to hash and verify passwords, ensuring that stored passwords are secure.  
   - Install: `npm install bcryptjs`

5. **nodemailer**  
   - A module for sending emails from your Node.js applications. It is used to send welcome emails, password reset links, and other notifications.  
   - Install: `npm install nodemailer`

6. **joi**  
   - A validation library for input data. Joi allows you to define validation rules for incoming request data (such as user inputs) and ensures that the data conforms to expected formats.  
   - Install: `npm install joi`

7. **cookie-parser**  
   - Middleware for parsing cookies in incoming requests. It helps you read and manipulate cookies sent with HTTP requests.  
   - Install: `npm install cookie-parser`

8. **helmet**  
   - A security middleware for Express.js apps that helps set various HTTP headers to secure the app against common web vulnerabilities, such as Cross-Site Scripting (XSS) and Clickjacking.  
   - Install: `npm install helmet`

9. **cors**  
   - Middleware for enabling Cross-Origin Resource Sharing (CORS). It allows your server to respond to requests from different domains or ports.  
   - Install: `npm install cors`
   
## Installation

To install the project dependencies, run the following command:

```bash
npm install

# Steps to setup
Step 1: Clone the Repository (if applicable)
Step 2: Install Node.js and NPM
Step 3: Install MongoDB (or use MongoDB Atlas)
Step 4: Set Up Environment Variables
Step 5: Install Project Dependencies
Step 6: Set Up Database (Optional)
Step 7: Set Up Email Service
Step 8: Run the Project Locally
Step 9: Testing the Application
Step 10: Additional Development Setup (Optional)

# Controllers
The authController.js handles user authentication-related operations such as signup, signin, signout, sending and verifying email codes for verification and password reset, and changing passwords. It uses various utility functions for hashing, validation, and email sending.

The tasksController.js handles CRUD operations for tasks, including fetching tasks with pagination, single task details, creating new tasks, updating tasks, and deleting tasks. It uses validation for incoming requests and checks if the user has authorization to modify or delete a task.

# Middlewares
The identification.js middleware is responsible for extracting and verifying the user's JWT token. It checks if the token is valid and then attaches the user data to the req.user object, which can be used in subsequent requests.

The sendMail.js middleware sets up email sending through the Gmail service using the nodemailer package. It allows sending verification and password reset codes.

# Validators
The validator.js defines schemas using Joi to validate incoming requests. These schemas ensure that data such as email, password, and task details are correctly formatted and meet certain criteria, helping to prevent invalid input.

# Models
The usersModel.js defines the schema for user accounts, with fields for email, password, and verification-related information. It ensures users can register, log in, and reset passwords securely.

The tasksModel.js defines the schema for tasks, including title, description, status, and a reference to the user who created the task. It allows managing task data with associated user IDs.

# Routers
The authRouter.js routes authentication-related requests to the appropriate controller methods. It uses the identifier middleware to protect routes that require authentication (e.g., signout, change password).

The tasksRouter.js routes task-related requests to the relevant controller methods and ensures the user is authenticated before modifying or deleting tasks.

# Utils
The hashing.js utility file provides functions for hashing passwords (doHash), validating hashed passwords (doHashValidation), and processing HMACs for verification and password reset codes (hmacProcess).

Finally, this application can be started with the help of below command:

npm run dev
