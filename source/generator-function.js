// require module https://github.com/facebook/regenerator/
// via http://jsdo.it/Biske/cMz6
// http://blog.h13i32maru.jp/entry/2015/01/02/225457

let gen = function*(resume){
  let wait1000ms = () => setTimeout(resume, 1000);
  yield wait1000ms();
  document.write("Hello<br>");
  yield wait1000ms();
  document.write("ES6<br>");
  yield wait1000ms();
  document.write("Generators<br>");
  yield wait1000ms();
  document.write("Click Somewhere<br>");
  yield document.addEventListener("click", resume);
  document.write("Well done<br>");
};

let it = gen(x => it.next(x).value);
it.next();