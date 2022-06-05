# Word Length Counter
## _Lab 3, Software Development for the Cloud_
URL: https://labthreebesnik.herokuapp.com/word-length

This is a word length frequency counter that has been implemented using Node.js and Javascript. By using axios, the client can perform HTTP Post requests to the rest api server. A sentence is initialized and then sent to the rest api, after which the response is printed in a table that shows the frequency of each word length in the sentence.

On the server side, by using express a route to “/word-length”, the server begins by receiving the request and checking if the sentence contains a word in which the length exceeds ten letters. If it passes the condition, an object is created from splitting the sentence and mapping every frequency to the word length. Finally the map is sorted chronologically and then converted into an object which is sent back to the client, where it gets printed in a table.

The server is hosted in the cloud with Heroku as the provider.


## Installation

```sh
npm install all
```
