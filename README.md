# Technical-Assesment
Technical Assessment for pre-interview

- This is a simple Node js application that has two end points.

- use below commands to run the application and the associated Junit 
  node app.js
  npm test

- use below commands to create and run docker file (the application is configured on 9009 port)
   docker build -t tech-assesment:1.0 .
   docker run -d -p 9050:9009 tech-assesment:1.0
   
- Travis CI has been used for continuos build which is triggered for any commit to GITHUB branch.  
