# 🗂️ Task Management Dashboard

This is a Kanban-style task management dashboard built using **React**, **Ant Design**, and **Redux Toolkit**. It allows users to view, create, and move tasks between different statuses: "To Do", "In Progress","Review" and "Completed".

## 🚀 Features

- 🧱 Kanban-style layout with 4 columns
- 📝 Add new tasks using a modal form
- 🔀 Drag and drop tasks between columns (using `react-beautiful-dnd`)
- 🔁 Global state management with `@reduxjs/toolkit`
- 📡 API interaction using `json-server`
- 🧰 Stylish and responsive UI with `Ant Design` and `SCSS`
- 🎨 Icon support with `lucide-react`

## 🧪 Tech Stack

- React
- Redux Toolkit
- Ant Design
- SCSS
- react-beautiful-dnd
- json-server (mock API)
- lucide-react

## 📦 Installation

1. Clone the repository:

   git clone https://github.com/vansh3476/Task-Management-Dashboard

   cd Task-Management-Dashboard

2. Install dependencies:
   npm install

3. Start the mock API server:
   npx json-server --watch projects.json --port 3001

4. Run the development server:
   npm run dev

The app will be running on http://localhost:3000.

Demo
You can view a screen recording of the working dashboard
