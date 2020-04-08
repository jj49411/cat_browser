# Cat Browser


![Demo Gif](https://)

## To install and run the code

- Clone the repo
- Run `$ npm install`
- Run `$ npm run client-install`
- Run `$ touch .env` and copy your API key 
- Run `$ echo "API_KEY=YOUR_KEY” >> .env` replace YOUR_KEY
- Run `$ npm run dev` to start both servers


## To run the test

- Run `$ npm test` for the Express endpoint tests
- Run `$ cd client && npm test` for the React tests

## Features

## Technologies used


### External Cat API
- Get your API Key from - https://thecatapi.com/

### Tools
- Body parser
- Nodemon
- Bootstrap
- React Router

## How to design the solution


## User stories
```
As a user
So I can browse cat pictures
I want to see the cat pictures on the page

As a user
So I can see a cat clearly 
I want to be able to click on a cat

As a user
So I can what picture I like
I want to be able to store a cat to my favourites

As a user
So I can come back to my favourites list
I want to be able to see all my favourites on a page

As a user
So I can change my mind about a picture
I want to be able to delete a picture 
```


## Progress Report

Jest 
- Preset with MongoDB: MongoDB memory server allows to store your data in memory only

To fix dependency issue
1. Delete package-lock.json
2. Delete node-modules
3. Add the right dependencies version or delete the dependency in package.json
4. Run `$ npm install`

To solve MongoDB connection error
- Type: MongoTimeoutError
- Issue: It gives out new IPs everytime (DHCP) when I reconnect to the network, but Mongo Atlas only white lists the previously specified IP address
- Solution: Check if the IP address specified correctly in the Network Access tab
- Security -> Network Access -> IP Whitelist 

CSS Flexbox
- A useful layout model that allows elements to align and distribute space within a container
- Learn more: https://www.youtube.com/watch?v=JJSoEo8JSnc

