const axios = require('axios');

axios.post('https://labthreebesnik.herokuapp.com/word-length', {
    sentence: "random text for the word length frequency counter"

}).then(function (res) {

    // Index represents the word length, value represents its frequency.
    console.table(res.data);
});
