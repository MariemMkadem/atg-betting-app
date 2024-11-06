# ATG Betting App

This project is a Horse Betting App that allows users to select bet types and view the latest results of horse races, including details about each race and the horses participating.

Viewing Race Details
In this application, each race entry in the list is clickable. To view more details about a specific race, simply click on the row.

When a row is clicked, it will expand to show additional information related to that race, such as the race number, horse names, driver names, and other relevant details. Click the row again to collapse the details.

This feature allows you to easily browse and focus on specific

## Project Structure

The project has the following main structure:

- `src/constants`: Holds constant values used across the application.
- `src/features`: Contains features like `bet-type`, `horse`, and `race`.
- `src/helpers`: Utility functions, e.g., for formatting dates.
- `src/pages/home`: The main page of the app, displaying the home screen.
- `src/services`: API calls to retrieve data from backend services.
- `src/types`: Type definitions for data models like `bet-type`, `game`, and `product`.

## Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or above)
- [npm](https://www.npmjs.com/) (v6 or above) or [yarn](https://yarnpkg.com/) (v1.22 or above)

## Getting Started

To get a local copy of the project up and running, follow these steps.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/MariemMkadem/atg-betting-app
   cd atg-betting-app

   ```

2. **Install Dependencies:**

   ```bash
       npm install
       or
       yarn install

   ```

3. **Run the Application:**
   ```bash
      npm start
      or
      yarn start
   ```

### Code Linting

This project uses ESLint to ensure code quality and consistency. Linting helps catch errors and enforce coding standards across the project.

1. **Running the Linter:**

   ```bash
      npm run lint

   ```

2. **Fixing Linting Issues:**

   ```bash
       npm run lint:fix
   ```

## Running Tests

To run the tests for this application, use the following command:

```bash
npm test
```
