# Doggy Display

This project was created as a practice exercise to dip my feet in the Angular environment. I was also able to practice with Typescript and Material. This project is a port from a similar React project I worked on, with some further improvements applied.

## Musings / Lessons Learned

Angular Concepts: Templates (interpolation, statements, pipes, and bindings) and Directives (using them, didn't dive into building my own), Routing, HTTPClient, Services for API fetching/data store, @Input/@Output for component parent child communication, Observing/Subscribing

I like the structure and constraints with Angular and the fact that much functionality is already built in. While there is flexibility abound in React, sometimes it can be overwhelming with just how many ways something can be done and it's hard to feel confident I'm doing something the right way.  

The flip side of this is that it does tend to feel like a lot of boilerplate with Angular. Having 4 files for every component gave me pause when I thought of breaking a component down further. There was no hesitation in React in the same situation.

Observe/subscribe will take some more time to get comfortable with - kind of feels like pointer logic from the old days, or like its an envelope to put stuff in and ship it off. I like the different types of options, like BehaviorSubject and being able to emit and subscribe to values in different ways.

I found it pleasant to jump in with Material. I appreciate the consistent design philosophy and array of components and options. I did not have much need to step outside the bounds of the library for this project, so I cannot speak to the challenges of customizing to fit very specific needs.

I found Typescript slightly frustrating at first, but that comes from working so long in JS without types and then jumping head first into some kind of strict mode with Typescript, so I had to be much more vigilant and thoughtful when thinking about my data and my functions. This is a net gain.  

I found working with errors easier and more straightforward in Angular. I am unsure if this has to do with Angular specifically or if it is due to how much attention I've put into researching proper error handling lately.

## Things to improve upon

Mobile responsiveness is pretty good, but there is some jankyness in portrait mode. Mobile is still an area of growth for me so I'm not certain how much of this is due to inefficient design on my part and how much is simply "that's the way it is" with different mobile devices & browsers.

I still lack a solid grasp of the component lifecycle and update process in Angular vs. React so I need to dive into that some more to understand the differences, especially when it comes to optimizing performance.

Testing is another area of growth for me, and I absolutely see the value in it and am eager to expand and learn in this direction. It is like learning an entirely new ecosystem and paradigm and is something I will have to sit down intentionally and really dive into so that I can understand it fully.

Continued immersion in the ecosystem will give me a better feel for best practices. I made an effort to follow all best practices/style guidelines I could find, but it is possible I am still trying to solve some problems in a React way instead of the Angular way.

## Closing thoughts

Overall, it was pretty smooth getting into Angular from React. There are quite a few differences and it will take some time to learn all the little nuances, but I am confident that whatever framework I dive into and settle in for a period of time will quickly become second nature. The core methodology of breaking the page into components and managing the location and interaction of state data between them is similar enough to ease the transition. I enjoyed diving into this new ecosystem and getting some real exposure to it. I understand why it is so attractice, especially in the context of a larger team that all need to stay on the same page with consistent structure and coding patterns.
