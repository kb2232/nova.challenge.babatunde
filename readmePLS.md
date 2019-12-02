# Check Out Flow diagram 
  1. click [here](https://s3.us-east-2.amazonaws.com/nova.challenge.files/novaChallenge.html)

  ### Install app

  ```sh
  # In root
  npm install
  ```
  ### Run app

  ```sh
  # Start frontend dev server (auto-reload)
  # this will start both servers
  npm run start
  ```
  ### Randomize data

  ```sh
  # Calls script that generates from randomuser.me
  npm run db:randomize
  ```

  ### To build 

  ```sh
  # Builds into a dist directory
  # cloud server should be built and change localhost to cloud domain
  npm run build
  ```