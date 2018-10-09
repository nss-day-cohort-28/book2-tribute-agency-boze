var quoteArray = [
    "I feel like I'm too busy writing history to read it.", 
    "I can analyze people's intentions. Immediately. That's just a warning. To everyone.", 
    "I have decided in 2020 to run for president.", 
    "I don't even listen to rap. My apartment is too nice to listen to rap in.", 
    "Nobody can tell me where I can and can't go.", 
    "I am not a fan of books. I don't like books.", 
    "I don't use blue. I don't like it. It bugs me out. I hate it.", 
    "I no longer have a manager. I can't be managed.",
    "Fashion breaks my heart.",
    "I really appreciate the moments that I was able to win rap album of the year or whatever."
];

var quote = quoteArray[Math.floor(Math.random() * quoteArray.length)];

console.log(quote);

alert("I'mma let you finish, but..." + quote);