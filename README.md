# Development

### Link to Deployed Website
https://stinkytortoise420.github.io/Development/

### Goal and Value of the Application
This is a Pokemon team creator. When making a competitive team, it's useful to be able to see different options and compare between them. I decided to include sorting based on highest attack stat and filtering based on type and nature. The aggregator counts the "total" field for each pokemon, which measures the sum of all of their stats.

### Usability Principles Considered
I decided to put the current party (or pokemon "aggregator") on the top of the screen. When I put it on the bottom, all of the buttons and menus would shift up and down depending on the number of pokemon on screen. I thought that this was inconvenient and harmed usability. Also, I tried to make sure all of the elements contrasted visually. I decreased the saturation of the background and used orange for the color of the menus. Lastly, I made more important text larger while things like the data fields for each Pokemon were relatively small. This helped to establish an information hierarchy.

### Organization of Components
I just have 2 components for this project, App and Pokemon. App is generally responsible for loading the page and updating all the proper state variables. Pokemon is a component that takes in data and returns a material ui card that formats all of it nicely.

### How Data is Passed Down Through Components
I have one master copy of all the pokemon data located inside of App.js. For each pokemon, I pass in the object inside this list that contains info about its name, type, nature, attack, and total stats. 

### How the User Triggers State Changes
Trigger state changes by pressing any of the buttons (Add To / Remove From / Clear Party) or setting the filtering and sorting options through the dropdown menus.

