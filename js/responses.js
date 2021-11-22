function getBotResponse(input) {
 
    var a = "Sure";
    var b = "Whoa, chill out!";
    var c = "Calm down, I know what I'm doing!";
    var d = "Fine. Be that way!";
    var e = "Whatever.";


    if ((input.includes("?") == true) && (input.includes("!") == true)) {
        return c;
    } else if (input.includes("!") == true) {
        return b;
    } else if (input.includes("?") == true) {
        return a;
    } else if (input == "bob" || input == "Bob" || input == "bOb" || input == "boB" || input == "BOb" || input == "BoB" || input == "bOB" || input == "BOB") {
        return d;
    } else {
        return e;
    }
}
