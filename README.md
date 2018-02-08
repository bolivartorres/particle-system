# particle-system

Particle system challenge with two types of simulations: Snow falling and leaves tumbling.

## Description

For this challenge I decided to go with making a particle system API made in a Node.js/Angular 1 stack. For the 2D engine I am using PixiJS. I made each simulation wrapped around an Angular [directive](https://github.com/bolivartorres/particle-system/tree/master/directives) on its own and each one uses motion effect functions that I wrote that simulate the movement described in the name of the function see [motionEffects.js](https://github.com/bolivartorres/particle-system/blob/master/utils/motionEffects.js).

### Prerequisites

You need [npm](https://nodejs.org/) installed in your machine to run this app.


### Installing

Once you have npm in your machine, pull the code, navigate to the code's directory, then run:

`npm install`

After that, simply run:

`npm start`

Your browser should open up a window automatically and show you the app running.

### Mapping of Requirements
* #### The system should draw a pane that is at least 400×400.
  The simulation draws the pane to be as big as the browser's width and height.  
* #### You must allow the user to play and pause the simulation.
  There are two buttons at the bottom right corner of the page: one to toggle between snow/leaves and another one to play/pause.
* #### You must allow the user to toggle between two simulation modes (eg. snow vs rain).  
  Same as above.
* #### The solution must be extensible to adding more simulation types.  
  The project was structured in a way that if you needed to add a new simulation, you simply need to add a new directive and assign motion effects from the motionEffects.js file. You can also create new motion effects to satisfy the need of your simulation.  
* #### The simulation must be capable of running indefinitely.
  Every time that the ticker function that PixiJS provides you runs, the simulation adds a new sprite/image into the pane. As soon as the sprite passes a certain threshold (eg. a leaf "falls to the ground" AKA. the sprite passes a certain pixels limit) the sprite is removed. This way, the app can run indefinitely without worry of the browser running out of memory.  