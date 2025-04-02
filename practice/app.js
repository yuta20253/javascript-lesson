//alert('Hello World!');
//console.log('Hello World!');

let text = 'JavaScriptの練習';
console.log(text);

text = 'JavaScriptをマスターした';
console.log(text);

let longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
console.log(longText);
console.log(longText);
console.log(longText);

console.log(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  );
  console.log(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  );
  console.log(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  );

  let name = 'ジョニー';
  let greet = '私は' + name + 'です。';
  console.log(greet);

  let template = 'テンプレートリテラル';
  let longTemplate = `これが${template}
  ${template}は改行もできます。`;

  console.log(longTemplate);

  let num = 10;
  let strNum = '10';
  console.log(num, strNum);
  console.log(typeof(strNum));

let minus = -10;
let decimal = 1.1;
console.log(minus, decimal);
console.log(typeof(decimal));


let names = ['John', 'Bob', 'Michael', 'Emma'];
console.log(names);

console.log('names[0] =>', names[0]);
console.log(names.length);

// let John = {
//   name: 'John',
//   age: 26,
//   bloodType: 'A',
//   favorite: 'card'
// };

// console.log(John);
// console.log(John.bloodType);
// console.log(John['bloodType']);

function doFunk(callback) {
  console.log('doFuncが呼び出されました');
  callback();
}

doFunk(function(){
  console.log('コールバック関数が呼び出されました')
});

function output(){
  console.log('コールバック関数が呼び出されました');
}

doFunk(output);

let John = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
  sing: function(){
    console.log('LA~LA~LA~~~♪');  
  }
};

John.sing();

let userAge = 0;

function myAge() {
  userAge = 27;
  console.log(userAge);
}

myAge();
console.log(userAge);

let val = 26;
console.log(val >= 20);
console.log(val === '26');
console.log(val == '26');
console.log('hello' === 'world');

let signal = 'red';
if (signal === 'red') {
  console.log('赤信号です。止まりましょう');
} else if (signal === 'yellow') {
  console.log('黄色信号です。空気を読みましょう');
} else {
  console.log('青信号です。進みましょう');
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
console.log(sum);
for (let index = 0; index < nums.length; index++) {
  sum += nums[index];
}

console.log(sum);