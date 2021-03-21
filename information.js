let name = "Brandon";
let campus = "Lyon Campus";

const cowsay = require("cowsay");

console.log(cowsay.say({
	text : `Hello, I'm ${name} from ${campus}!`,
	e : "^^",
	T : "VV"
}));

module.exports = cowsay;