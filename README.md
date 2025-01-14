# React Dictionary Application

This project is a refactored version of a basic application initially built with vanilla JavaScript. The refactor involves creating a React application using Vite as the build tool.

## Description

The application is a dictionary that allows users to:

- Add terms with descriptions.
- Delete existing terms.
- View terms displayed as cards, arranged in alphabetical order based on their titles.

## Goals

The primary objectives of this project are:

1. To learn the fundamentals of React.
2. To understand the structure of a React application created with Vite.
3. To explore the use of `useState` for state management.
4. To practice passing props between components in React.

## Features

- **Add Terms:** Users can add new terms along with their descriptions.
- **Delete Terms:** Users can delete unwanted terms from the dictionary.
- **Alphabetical Order:** Terms are automatically sorted alphabetically by their titles.

## Technologies Used

- **React:** For building the user interface.
- **Vite:** For fast and optimized development.
- **CSS:** For styling the components.

## Getting Started

### Prerequisites

- Node.js and npm installed.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the project directory:
   ```bash
   cd <project_directory>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the development server:

```bash
npm run dev
```

Open the application in your browser at `http://localhost:5173/`.

## Folder Structure

```
src/
├── App.jsx          // Main application component
├── TermCard.jsx     // Component for rendering individual term cards
├── TermForm.jsx     // Component for adding new terms
├── TermList.jsx     // Component for displaying the list of terms
├── styles/          // CSS files for styling components
└── main.jsx         // Application entry point
```

## License

This project is open-source and available under the [MIT License](LICENSE).
