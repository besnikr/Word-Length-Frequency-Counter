const axios = require('axios');

axios.post('https://labthreebesnik.herokuapp.com/word-length', {
    sentence: 'lorem ipsum dolor si amet consectetur adipiscing elit sed do'

}).then(function (response) {

    // Index represents the word length, value represents its frequency.
    console.table(response.data);
});