## About This Project

[Check out the website](https://bit.ly/3uwN9sO)

### General Information

*Loop Machine* is a simple application that allows the user to select sounds and play them in a loop.  
At the begining of each loop cycle the music will change according to the selection of sounds by the user.  
The user can play and record the created sequences.

### Tech Stack

The project was created with **React.js** as a single page web application.

For the responsive grid and styles **Bootstrap** and **CSS** is used.

For hosting service **AWS** EC2 instance is used.

### Technical Details

* The main file is `App.js`, it contains all the logic of the application and renders two components `Pad` and `TransportButtons`.  
These components are mainly serve dynamic styling and 'onClick' events that fires functions they receive as props.

* The `loops` *state* is initialized as an array of sound objects imported from `sounds.js` and can easily be replaced for data from an API.  

* 'loop' and 'sound' arguments are both used in the code but refer to the same sound object.

* Whenever a user selects a sound, the `loops` *state* will update the `isActive` property of the specific sound.  

* Whenever a user clicks on the play button, all sounds/loops with the property `isActive = true` will play once.
when the loop ends, `startCycle` *state* will be triggered and the current active loops will be played.  
This will continue until the stop button is pressed and will cause the state `isPlaying = false`.

* `app.js` is a local server used to serve the static html file after build with reverse proxy from Nginx.

## Get Started

In the project directory, run:

### `npm install`

Installs all dependencies necessary for this project.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
