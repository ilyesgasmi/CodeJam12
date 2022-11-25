# Food Wizard
A recipe book powered by AI & Computer Vision offers dozens of top-rated recipes to anybody who uploads a live or saved image of their food. Submission for CodeJam 12 

# Inspiration
We all love to eat food! We also all have experienced sudden cravings while scrolling through reels on social media. However, oftentimes it's difficult to pinpoint a name to what we see or to even know how to prepare it. Imagine having all these answers in less than 3 seconds with just one picture. We created Food Wizard for this exact reason.

# What it does
Food Wizard is a mobile web application that uses AI and Computer Vision that generates dozens of recipes based on an image of a meal you provide it.

# How we built it
We built this application by first testing Google's Cloud Vision API and the Edamam API using Postman. Once we understood how to use these API's and their respective endpoints, we integrated them to our application using JavaScript. Finally, we used Vue.js framework to tie everything together.

# Challenges we ran into
The main challenge we ran into was finding the best combination of outputs from the Google Cloud Vision API that would be mapped into the Edamam's API in order to get the most accurate results. We overcame this challenge by formatting and processing the output of the Google's Cloud Vision API into inputs that were suitable to be used with Edamam API.

# Accomplishments that we're proud of
We are really proud of the fact that we followed through with our initial project idea, that we were able to complete it, and that we have a presentable prototype for this hackathon. We applied our learnings from previous hackathons to make this possible.

# What we learned
We learned to implement and apply external API's, manipulate the data they return, and use them effectively in our web application.

# What's next for Food Wizard
We want to implement a way for users to be able to create accounts, where they will be able to save their preferred settings. This will enable us to personalize the recipe search results according to their favorite foods, diet restrictions and overall preferences.

Built With
axios
bootstrap
css
html
javascript
postman
tailwind
vue.js

Try it out!
https://foodwizard.netlify.app
