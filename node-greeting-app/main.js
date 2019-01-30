//require imports the methods
//from greeting.js
const greetings = require("./greeting.js");

// "Hello"
greetings.greetingEnglish();

// "Konichiwa"
greetings.greetingJapanese();

//"Hola"
greetings.greetingSpanish();

//"Halló"
greetings.greetingIcelandic();

const goodbye = require("./goodbye.js");

//"Goodbye"
goodbye.goodbyeEnglish();

//"Sayōnara"
goodbye.goodbyeJapanese();

//"Adios"
goodbye.goodbyeSpanish();

//"Bless"
goodbye.goodbyeIcelandic();
