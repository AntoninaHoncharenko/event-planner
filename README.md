# Event Planner App - React Application

This is a Event Planner App created using React and Vite, a fast build tool for
modern web applications. The application allows users to view a list of
scheduled events, create new events, edit and delete it.

## Usage

To use the application, you can follow these steps:

1. Clone the repository to your local computer.
2. Install the required dependencies by running the command npm install.
3. Start the development server using the command npm run dev.
4. Open the application in your browser at http://localhost:5173.

## Available Scripts

In the project directory, you can run:

### "npm run dev"

Runs the app in development mode. Open http://localhost:5173 to view it in the
browser.

### "npm run build"

Builds the app for production to the build folder.

### "npm run lint"

Lints the src directory using ESLint. It reports unused-disable-directives and
enforces a maximum number of warnings of 0.

### "npm run preview"

Builds the app and previews the production build locally.

## Technologies

The Event Planner App is built using the React and additional libraries.

1. For data storage and CRUD operations is used mokAPI tool. In addition to
   this, FireBase Storage is used for storing and retrieving image links.
2. To manage the application state is used Redux Toolkit and React-redux.
3. For styling is used Styled Components.
4. Additional libraries: antd, axios, date-fns, nanoid, react-datepicker,
   react-use, react-loader-spinner, yup.

## Functionality

1. List of scheduled events.
2. Filter events by category, name, date, priority.
3. Search events by keywords.
4. Detailed informations about event.
5. Creating new event.
6. Editing any event.
7. Deleting event.
