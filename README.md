# React Application with TypeScript

This project is a React application built with TypeScript and Vite. The application fetches data from an API and displays it in a responsive interface. Users can interact with the data cards to view more details in a modal. The application also tracks user interactions and provides an analytics page to view the number of times each card has been clicked.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technical Overview](#technical-overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Packages Used](#packages-used)

## Introduction

This project demonstrates a comprehensive approach to building a React application with TypeScript. It focuses on state management, routing, and responsiveness, ensuring a scalable and maintainable codebase. The use of Redux Toolkit, React Query, and React Router ensures efficient and organized development practices.

## Features

- **Data Fetching:** Fetches data from an API and displays it in a card-based layout..
- **Responsive Design:** Adjusts seamlessly to different screen sizes for an optimal user experience on both desktop and mobile devices.
- **Interactive Cards:** Displays data in interactive cards that users can click to view more details.
- **Click Tracking:** Tracks the number of times each card is clicked and displays this data on an analytics page.
- **Analytics Page:** Provides a detailed view of card interactions, showing the card ID, card title, and the number of clicks.
- **State Management:** Utilizes Redux Toolkit for efficient state management.
- **Error Handling:** Custom error pages for handling unknown URLs and unavailable cards.
- **Routing:** Implements React Router DOM for seamless navigation between views.
- **Data Caching::**  Uses React Query for efficient data fetching and caching.

## Technical Overview

The project follows a modular and organized structure to facilitate development and maintenance. Key directories include:

- **Components:** Reusable UI components.
- **Pages:** Container components representing different views.
- **Helpers:** Utility functions and helpers.
- **Hooks:** Custom hooks for common functionalities.
- **Service:** Functions for fetching data from the API.
- **state:** Redux store configuration and slice definitions.


### State Management
Redux Toolkit is used for state management, providing a centralized store for managing application state. Slices are used to partition the store into smaller sections, making it easier to manage and update state.

### Routing
Routing is handled using React Router DOM, enabling navigation between different views in the application. Route components are defined in the App.tsx file, with nested routes for different pages.

### Data Fetching
Data fetching is managed using React Query, a powerful library for fetching, caching, and updating asynchronous data. The useQuery hook is used to fetch data from the API and cache it for subsequent requests.

### Responsiveness
The application is designed with responsiveness in mind, ensuring a seamless user experience across various devices and screen sizes. Media queries and flexible layouts are used to adapt the UI to different viewport sizes.

### Interactivity
The application features interactive elements such as modals, hover states, and clickable cards to enhance user engagement. User interactions are tracked and displayed on the analytics page to provide insights into user behavior.

## Prerequisites


Before you begin using the application, make sure you have the following:

- **Node.js:** You will need Node.js to run the app. [Download Node.js](https://nodejs.org/)

- **yarn:** This project uses yarn to manage dependencies. You can install it by running: `yarn install`.

- **Git:** You'll need Git to clone the repository. Install it from [Git's official website](https://git-scm.com/).

## Installation

To get the application up and running on your local machine, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Ameenaminah/BnkleFrontendInternshipTest.git

2. Change to the project directory:

     ```bash
    cd BnkleFrontendInternshipTest

3.  Install the required dependencies using Yarn:

     ```bash
    yarn install

## Packages Used
- **react:** A JavaScript library for building user interfaces.
- **typescript :** A typed superset of JavaScript that compiles to plain JavaScript.
- **vite:** Next-generation frontend tooling for fast development.
- **redux-toolkit:** A toolset for efficient Redux development.
- **react-redux:** Official React bindings for Redux.
- **react-router-dom:** A collection of navigational components for React.
- **react-query:** Hooks for fetching, caching, and updating asynchronous data.
