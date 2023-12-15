# Project Routes Documentation

## Overview

This document provides an overview of the routes available in the project and their functionalities.

---

## Tech Stack

### Frontend:
- HTML
- CSS
- JavaScript

### Backend:
- Node.js
- Express.js

### Database:
- MongoDB

---

## Deployed Links

### Frontend:
- **URL**: [Frontend Deployment Link](https://your-frontend-deployment-url.com)
- **Description**: This link directs to the deployed frontend of the transaction dashboard.

### Backend:
- **URL**: https://lazy-red-ladybug-hem.cyclic.app/
- **Description**: This is the URL for the deployed backend of the transaction dashboard, hosting the API routes.

---

## Route: /transcation

### Method: GET
#### Description:
Retrieves data based on provided query parameters for pagination and filtering by month.

#### Parameters:
- `search`: String - Search term.
- `page`: Number - Pagination for data retrieval.
- `month`: String - Filter data by month.

---

## Route: /transcation/statistics

### Method: GET
#### Description:
Fetches statistics based on the selected month.

#### Parameters:
- `month`: String - Filter data by month.

---

## Route: /transcation/bar_chart

### Method: GET
#### Description:
Generates data for a bar chart based on price ranges within the selected month.

#### Parameters:
- `month`: String - Filter data by month.

---

## Route: /transcation/pie_chart

### Method: GET
#### Description:
Generates data for a pie chart based on item categories within the selected month.

#### Parameters:
- `month`: String - Filter data by month.

---

### Note:
- All routes expect a valid `month` parameter in the format "YYYY-MM" to filter the data.
- Errors are handled with appropriate status codes and error messages.

# Frontend Structure and Technologies Used

## Overview

This document provides an overview of the frontend structure and technologies used in the project.

---

## Frontend Structure

### HTML Structure:

The HTML file (`index.html`) consists of various sections representing different components of the transaction dashboard.

- **Main Section**:
  - **Title**: Contains the header "Transaction Dashboard".
  - **Search Bar**: Allows searching for transactions and selecting months.
  - **Table Section**: Displays transaction data in a table format with columns for ID, Title, Description, Price, Category, Sold status, and Image.
  - **Pagination**: Shows current page number, navigation for next and previous pages, and displays the number of items per page.
  - **Statistics**: Displays statistics for the selected month, including Total Sale, Total Sold Items, and Total Unsold Items.
  - **Charts**: Includes a Pie Chart and a Bar Chart container.

### CSS:
- External stylesheet (`index.css`) linked to the HTML file.
- Provides styles for various components, classes, and IDs used in the dashboard for layout, colors, and formatting.

### JavaScript:
- External script file (`index.js`) linked to the HTML file.
- Utilizes Chart.js library (`https://cdn.jsdelivr.net/npm/chart.js`) for rendering charts dynamically based on backend data.
- Defines functionality for fetching and displaying data, handling pagination, and updating statistics and charts based on user-selected month.

---

## Tech Stack Used

### Frontend:
- **HTML**: Markup language for structuring the dashboard components.
- **CSS**: Stylesheet language for defining the visual presentation of the dashboard.
- **JavaScript**: Programming language for adding interactivity and dynamic functionality to the dashboard.

### Libraries/Frameworks:
- **Chart.js**: JavaScript library for creating charts such as Pie Charts and Bar Charts in the dashboard.

---

## Note:
- The HTML file (`index.html`) contains the structure of the transaction dashboard with sections for data display, input fields, statistics, and charts.
- CSS (`index.css`) provides styling to the HTML elements to enhance the visual appearance.
- JavaScript (`index.js`) adds functionality to the dashboard, including fetching data from the backend, updating UI elements, and rendering charts using Chart.js.
- Ensure that the JavaScript file (`index.js`) includes functions to handle data retrieval, pagination, and chart rendering based on backend responses.
