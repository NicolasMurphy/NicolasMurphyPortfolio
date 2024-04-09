# Nicolas Murphy's Portfolio

## Introduction
Welcome to my personal portfolio! This portfolio showcases my projects and skills as a Full-Stack Developer. It's designed to provide a comprehensive overview of my technical abilities and project experiences.

## Technologies Used
- React
- Tailwind CSS
- DaisyUI
- react-slick for carousels
- Vercel for deployment and serverless functions
- Spotify API

## Features
- Interactive project carousels to showcase my work
- About Me section detailing my professional background
- Random Spotify Track feature integrating Spotify API
- Responsive design ensuring compatibility with various devices
- Dark and light mode for user preference
- [eSheep](https://adrianotiger.github.io/web-esheep/)

## Setup and Installation
To set up this portfolio locally:

1. Clone the repository:
    > git clone https://github.com/NicolasMurphy/NicolasMurphyPortfolio.git
2. Navigate to the project directory:
    > cd NicolasMurphyPortfolio
3. Install dependencies:
    > npm install
4. Run the application:
    > npm start

## Spotify API Integration
To use the Random Spotify Track feature, you need to set up Spotify API credentials:

1. Create a Spotify Developer account at [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/).
2. Create an app in the dashboard to obtain your Client ID and Client Secret.
3. Add your Client ID and Client Secret to the serverless function in the `/api` directory.
4. Deploy your application on Vercel, and set the environment variables for the Spotify credentials in your Vercel project settings.

Note: This project uses serverless functions provided by Vercel for handling Spotify API requests, but you can choose a different method if preferred.
