# Game of Thrones - Mini Wiki
This page was an idea that I had recently because of the premiere of House of The Dragon. I was a big fan of Game of Thrones when it first aired, and seeing a prequel of my favorite show just made me remember those good old times (before last season at least) watching GOT at night while drinking "submarinos" (our local take on hot cocoa, a classic) at my old house, and sharing my thoughts about the show with my friends. So this is where the inspiration came from!

# Web Link:
http://cs50.ygmasoft.com/

# Description:

Hello! My name is Alejandra and Im from Argentina, Buenos Aires and this is my CS50 final project :)!. This project is comprised of a React App which pulls data from a node.js and an Express mini-API (I tried using some APIs that I found online but none had all the data that I needed for this project, so I ended up creating my own). This API fetches data from a MongoDB Atlas database. This in-house API serves three different endpoints: 

-`GET /houses`: Fetches information for all the houses.

-`GET /houses/{houseId}`: Fetches information for a specific house by id.

-`GET /characters`: Fetches information for all the characters.

# Frontend - React.js
### `src/App.js`
This file is the entry point to the React application, it contains just a `NavBar` and a `Router` for the other pages. 

### `src/assets/*`
This folder only contains assets such as images, videos or fonts.

### `src/components/CharacterList`
This folder contains a component which lists all the characters in a little menu with its respective image. It gets this information from another component (`src/pages/Characters/index.js`).

### `src/components/NavBar`
A simple navbar using Bootstrap, which has links to `/home`, `/characters` and `/houses`.

### `src/pages/Characters`
This page includes the previously mentioned `CharacterList` component, and also shows further information about whichever character is selected from the `CharacterList`. 

It gets its information from the API by querying the `GET http://localhost:5000/characters`.

### `src/pages/Home`
This is just a landing page intended to entice the user to check out the page.

### `src/pages/Houses`
This page introduces the user to the different Game of Thrones houses. It gets its information from the API by querying the `GET http://localhost:5000/houses`.

### `src/pages/HouseDetail`
This page presents more information about the selected house. It knows which house to fetch based on the path param in the url.
It gets its information from the API by querying the `GET http://localhost:5000/houses/{houseId}`.

### `src/services/apiClient.js`
A simple client to fetch data from the API.

# Backend - Node.js and Express
### `backend/index.js`
This is the entry point to the API. Three routes are defined here, which will be used in the Frontend. It uses express to create a tiny server to listen to an HTTP request, and it also uses the Mongoose library to connect to the MongoDB database and fetch the data. 

### `backend/.env`
This is a placeholder file for the environment variables. In this case I have just one, which is the database connection url, which for security reasons is not commited.

# Implementation 
For this website I encountered a few different challenges, starting off with the design. I had a lot of ideas in mind, but in reality, when I tried to implement them, I would usually run into issues down the line because I tend to overdesign. 

This caused a bigger problem when it came down to responsiveness. I started adding different features over and over and then when I had to actually try them out in various resolutions it wouldn't look good at all and made me waste a lot of time and made me have to rethink my design approach. 

This experience taught me to plan ahead before jumping right into the implementation. I will definitely go for a mobile-first approach for my next projects. I also gained a lot of insight into how web applications communicate and transfer data, and some basic security features.

I hope you liked it! :D.

