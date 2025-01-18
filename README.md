# Task_Crud

I developed fully functional Backend with JWT Authentication and Authorizations using hashing passwords. Below is brief explanation about this project..

# Required NPM Packages
The project uses several packages that need to be installed:

express: Web framework for Node.js
mongoose: MongoDB object modeling for Node.js
jsonwebtoken: For generating and verifying JWT tokens
bcryptjs: For hashing passwords
nodemailer: For sending emails
joi: For input validation
cookie-parser: To parse cookies in the request
helmet: Helps secure your Express apps by setting various HTTP headers
cors: For enabling Cross-Origin Resource Sharing

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