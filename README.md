# File Metadata Microservice

A microservice to upload a file and return its size in a JSON response for the FreeCodeCamp challenge

## Live Demo
[https://vine-pocket.glitch.me/](https://vine-pocket.glitch.me/)

## Installation
```
$ git clone https://github.com/Oddert/File-Metadata-Microservice.git
$ cd File-Metadata-Microservice
$ npm i
$ npm start
```

## Scripts
| script | command                                        | action
|--------|------------------------------------------------|------------------------------------------------|
| start  | node app.js                                    | runs the server                                |
| dev | nodemon app.js                                 | runs the server with auto restart              |

# Routes
| Route  | Method | Body | Returns
|--------|-------------|-------------------|-----------|
| /  | GET |  | returns a basic html page to interact with the API |
| / | POST | Any file | JSON object with the file size |