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

    // Check if sentence contains max 10 words
    const wordCount = sentence.split(' ').length;
    if (wordCount > 10) {
        console.log("ERROR. Max 10 words allowed!");
        res.send("ERROR. Max 10 words allowed!");
        return;
    }

    const returnObj = resultObject(sentence);
    console.log(returnObj);

    res.send(returnObj);
});

app.listen(port, () => console.log(`Server is listening on port ${port}.`));

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
