const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/word-length', (req, res) => {
    const sentence = req.body.sentence;

    // In case any word in the sentence has a length greater than ten, send an error message
    if (maxTenLetters(sentence) === false) {
        res.send("Error: You cannot choose words that have letters which are greater than ten.")
        return;
    }

    const returnObj = resultObject(sentence);
    console.log(returnObj);

    res.send(returnObj);
});

app.listen(80, () => console.log(`Server is listening on port ${port}.`));

function resultObject(sentence) {

    let splitArr = sentence.split(" ");
    let map = new Map();

    splitArr.forEach(element => {
        map.set(element.length, map.get(element.length) + 1 || 1);
    });

    const sortedMap = new Map([...map].sort());
    const obj = Object.fromEntries(sortedMap);

    return obj;
}

function maxTenLetters(sentence) {
    const splitArr = sentence.split(" ");
    let toReturn = true;

    splitArr.forEach(element => {
        if (element.length > 10) {
           // There is a word that exceeds ten letters.
           toReturn = false;
       }
    });

    return toReturn;
}