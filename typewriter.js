/*
const sentence = "hello there from lighthouse labs";
for (const char of sentence) {
  setTimeout(function() {
    process.stdout.write(char);
  },1000)

}
*/


let sentence = "hello there from lighthouse labs";
sentence = sentence + '\n';

let i = 0;
for (const char of sentence){
  setTimeout(function() {
    process.stdout.write(char);
  } , (1000 + i));
i += 50;
};
