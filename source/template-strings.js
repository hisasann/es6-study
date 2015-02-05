// http://updates.html5rocks.com/2015/01/ES6-Template-Strings

// Simple string substitution
var name = "Brendan";
console.log(`Yo, ${name}!`);

var a = 10;
var b = 10;
console.log(`JavaScript first appeared ${a+b} years ago. Crazy!`);

// Multiline Strings
var greeting = "Yo \
World";

// http://kimizuka.hatenablog.com/entry/2014/09/12/095957
// 改行した文字列から改行コードを除去するコード
var txt = (function(param) {return param[0].replace(/\n|\r/g, '');})`
ふるいけや。
かわずとびこむ。
みずのおと。`;
console.log(txt);
