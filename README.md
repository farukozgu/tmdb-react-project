# React MovieFlix - A Modern Movie Database App

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

A sleek and responsive single-page application built with React.js that allows users to discover popular movies, search for their favorites, and view detailed information. This project was built to practice and demonstrate core React concepts including state management, API data fetching, and client-side routing.

## 🚀 Live Demo

Check out the live version of the application deployed on Vercel:

**[➡️ View Live Demo]([your-vercel-link-here])**

## 📸 Preview

![Project Preview]([your-preview-image-link-here])

*A screenshot of the main page showcasing the movie grid and the search functionality.*

## ✨ Features

- **Discover Popular Movies:** Fetches and displays a grid of the most popular movies from The Movie Database (TMDb) API.
- **Dynamic Search:** A real-time search bar that updates results as the user types. Implemented with a `debounce` mechanism to optimize API calls.
- **Detailed Movie Page:** A dedicated, dynamic route for each movie (`/movie/:id`) that shows detailed information such as overview, rating, release date, and backdrop image.
- **Client-Side Routing:** Utilizes `React Router DOM` for a seamless, single-page application experience without page reloads.
- **Pagination:** Users can navigate through pages of popular movies or search results.
- **Responsive Design:** A clean and modern UI that is functional on various screen sizes.
- **Loading & Error States:** Provides feedback to the user while fetching data or if no results are found.

## 🛠️ Technologies Used

- **React.js:** A JavaScript library for building user interfaces.
- **React Hooks:** Used functional components with `useState` for state management and `useEffect` for handling side effects (API calls).
- **Vite:** A modern frontend build tool for a fast development experience.
- **React Router DOM:** For handling client-side routing and navigation.
- **Fetch API:** Used `async/await` for making asynchronous requests to the TMDb API.
- **CSS3:** For custom styling, layout (Grid), and creating a responsive, dark-themed interface.
- **Environment Variables:** To securely store and use the API key.
- **Intl.DateTimeFormat:** A built-in JavaScript API for formatting dates in a user-friendly way.

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.
- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd your-repo-name
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```
4.  **Set up your environment variables:**
    - Create a `.env` file in the root of your project.
    - Add your TMDb API key to the file as shown below:
      ```
      VITE_API_KEY="YOUR_TMDB_API_KEY_HERE"
      ```
5.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## 🙏 Acknowledgements

This project would not be possible without the fantastic and free data provided by **[The Movie Database (TMDb) API](https://www.themoviedb.org/)**.

## 📄 License

This project is licensed under the MIT License - see the `LICENSE` file for details.
