**Quick launch**  
yarn add all (or npm install) : Install all the dependancies from package.json  
yarn dev (or npm run dev): launch the project on port 3000.  

**Building**  
yarn build (or npm run build) : building the project (output -> dist).  

**Infos**  
You can use Bootstrap directly after installing dependancies.    
You can put your images, fonts and other media stuff into public/assets.  
You must add a .env file (example : .env.dev).  

--React--  
Full functionnal components with React hooks is possible.  
Layouts are smart, with state, using store and router (represents a page), Components are dumb, just getting props.  
You can add a level between them like "Containers" that would be smart Component. As you want.  
React Router support : Use the router component and declare your routes. (In App.jsx or index.jsx)

--Redux--  
axiosActions for Axios requests.  
dataActions for front actions.  
(Don't forget to Provide your store in the top level component.)  

--Webpack--   
You have .babelrc and webpack.config.js.  
You can use Sass, ES6, HTML5 history path, dotenv and many loaders.  

--Sass--  
Reset CSS file and explicite architecture.  
Don't forget to add your scss file into index.scss .  
_file.scss with an underscore are modules and does'nt generate a css file.  

