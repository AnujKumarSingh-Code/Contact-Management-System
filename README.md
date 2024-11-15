# Contact Management - Mini Feature of a CRM

## 🗒️ Overview

The **Contact Management** feature helps users organize and maintain essential customer/client contact information in one place. This feature is designed to allow users to add, view, update, and delete contacts quickly and efficiently. It is especially useful in business settings where managing relationships and customer data is key to growth and success. 

This contact management system provides a smooth experience for users to store, update, and retrieve contact details like name, email, phone number, company, and job title, ensuring seamless communication and relationship-building with clients and customers.

### Use Cases
- **Adding a New Contact**: Users can enter details such as name, email, phone number, company, and job title to create a new contact.
- **Viewing Contacts**: Contacts are displayed in an easy-to-read table with sorting and pagination to handle large lists.
- **Editing Contact Information**: Users can update contact details (e.g., new phone number or company) to keep their records accurate and up-to-date.
- **Deleting a Contact**: Outdated or incorrect entries can be removed to maintain a clean contact list.

---

## ❗ Important Note

This assignment will be followed by a live coding session, where you will be asked to extend or modify the features in a real-time setting. Please ensure to complete the work independently. We value originality and personal effort. Automated tools or external help will be easily detected during our review and may negatively impact the evaluation.

---

## 🥇 Evaluation Criteria

- **Functionality**: Successful completion of all CRUD operations (Create, Read, Update, Delete) and their correct implementation.
- **UI Consistency**: Clean, intuitive interface with proper use of MUI components.
- **Code Quality**: Well-structured, modular code with clear and readable logic.
- **Problem-Solving Approach**: Independent approach to tackling challenges and designing the solution.

---

## 🗒️ Specifications / Requirements

Below are the detailed requirements for this assignment. Please ensure each aspect is carefully addressed.

### Frontend (ReactJS with MUI Components)
1. **Create a Contact Form**: 
   - The form should capture the following details:
     - First Name
     - Last Name
     - Email
     - Phone Number
     - Company
     - Job Title
   - Use **Material UI (MUI)** components for the form elements, layout, and buttons.

2. **Contacts Table**:
   - Display all contacts in a table format using the **MUI Table component**.
   - Columns should include the following attributes:
     - First Name
     - Last Name
     - Email
     - Phone Number
     - Company
     - Job Title
   - Include **action buttons** for editing and deleting each contact.
   - Add **pagination and sorting** for better usability.

### Backend (NodeJS)
1. **API Endpoints**:
   - `POST /contacts`: Accepts a new contact entry from the frontend and stores it in the database.
   - `GET /contacts`: Retrieves all contact entries to populate the table on the frontend.
   - `PUT /contacts/:id`: Updates a specific contact’s information.
   - `DELETE /contacts/:id`: Deletes a contact from the database.

2. **Error Handling**:
   - Validation for required fields (e.g., name, email).
   - Handle and return appropriate error messages for duplicate entries or invalid data submissions.

### Database (Choice of Database)
1. **Database Setup**:
   - Use any database of your choice (e.g., PostgreSQL, MySQL, MongoDB).
   - Ensure CRUD operations are handled properly in the database.

2. **Documentation**:
   - Briefly describe the database you used and why it is suitable for this project.

---

## 🚀 Project Submission

- **Code Repository**: Provide a GitHub (or similar) repository link with the full project code.
- **ReadMe File**:
  - Setup instructions to run the project, including database schema script.
  - A brief description of the project and major technical decisions made.
  - How each part of the app works (Frontend, Backend, Database).
  
- **Challenges and Solutions**:
  - A short write-up about the challenges you faced during the assignment and how you solved them.

---

## ✨ Features Implemented

- **Frontend (ReactJS)**:
  - Contact form with MUI components for smooth input handling.
  - Table view of contacts with sorting, pagination, and CRUD operations.
  - Dynamic handling of the edit and delete actions for each contact.

- **Backend (NodeJS)**:
  - REST API with endpoints to add, update, retrieve, and delete contacts.
  - Error handling and validation for the API to ensure smooth user experience.
  - Use of MongoDB for storing contact data.

- **Database**:
  - MongoDB was chosen due to its flexibility in handling dynamic schemas and ease of use for small-scale applications like this CRM feature.

---

## 💡 Challenges and Solutions

### Challenge 1: Dynamic Form Handling
- The form had to dynamically capture and handle various contact details. I used controlled components in React to manage the state of form inputs and ensure that data is correctly captured and submitted.

### Challenge 2: Integrating the Backend API with the Frontend
- Initially, there was some difficulty in making seamless requests from the frontend to the backend. This was resolved by setting up **Axios** for API requests and ensuring proper error handling for API failures.

### Challenge 3: Managing State Between Components
- Managing the state across multiple components (form, table, etc.) was tricky at first. This was solved by passing functions like `fetchContacts` and states like `contacts` between components as props.

---

## 📦 Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/AnujKumarSingh-Code/Contact-Management-System.git
   cd Contact-Management-System
   ```

2. **Install Dependencies**:
   - For **Frontend**:
     ```bash
     cd frontend
     npm install
     ```
   - For **Backend**:
     ```bash
     cd backend
     npm install
     ```

3. **Set up the Database**:
   - Set up your MongoDB instance (local or cloud-based).
   - Update the database connection string in the `backend/config/database.js` file.

4. **Run the Project**:
   - In the **Backend** folder, start the server:
     ```bash
     npm start
     ```
   - In the **Frontend** folder, start the React app:
     ```bash
     npm start
     ```

5. Open the app in your browser at `http://localhost:3000` to see the contact management system in action.

---

## 🤖 Future Enhancements

- **Authentication**: Add user authentication for secure contact management.
- **Advanced Search**: Implement a search functionality to filter contacts by name, email, etc.
- **Email Notifications**: Implement a feature to send email notifications when contacts are added or updated.

--- 

This README covers the overview, features, challenges, setup instructions, and evaluation criteria for the Contact Management feature as part of the SDE internship assignment. The project is designed to be both functional and user-friendly, utilizing modern technologies to create an efficient contact management system.
