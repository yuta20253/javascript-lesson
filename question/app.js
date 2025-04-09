// 基本編
// Q1
let nickName = '安本';
let age = 30;
let message = '私のニックネームは' + nickName + 'です。年齢は' + age + '歳です。';

console.log(message);

// Q2
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let secondMessage =  `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`;

console.log(secondMessage);


// Q3
let user = {
    name: 'John',
    age: 26,
    bloodType: 'A',
    favorite: 'card',
};

console.log(user.age);

// Q4
let playerList = [
    {
        name: 'John',
        age: 26,
        favorites: ['Card Game', 'Basket Ball', 'Programming'], 
    },
    {
        name: 'Bob',
        age: 33,
        favorites: ['Tinder', 'The Legend of Zelda'],
    },
    {
        name: 'Michael',
        age: 22,
        favorites: ['Football', 'Smash Bros.'],
    }
];

console.log(playerList[1].favorites[1]);

// Q5
let totalAge = 0;
for (let index = 0; index < playerList.length; index++) {
    totalAge += playerList[index].age
}

let ageAve = totalAge / playerList.length;

console.log(`平均は${ageAve}歳`);

// Q6
function sayHello(str) {
    console.log(str);
}

sayHello('Hello');

let sayGreeting = sayHello('Hello');
console.log(sayGreeting);

let sayWorld = function(msg) {
    let sayWorld = msg;
    return sayWorld;
};

let world = sayWorld('World');
console.log(world);

// Q7
user.birthday = '2000-09-27';

console.log(user.birthday);

user.sayhello = function(msg) {
    console.log(msg);
};


user.sayhello('Hello！');

// Q8
let calc = {};

console.log(calc);

calc.add = function(x, y) {
    const sum = x + y;
    return sum;
};

console.log(calc.add(3, 4));

calc.subtract = function(x, y) {
    const num = x - y;
   return num
};

console.log(calc.subtract(18,8));

calc.multiply = function(x, y) {
    const num = x * y;
    return num;
};

console.log(calc.multiply(7, 7));

calc.divide = function(x, y) {
    const num = x / y;
    return num;
};
console.log(calc.divide(15,3));


//追加課題
// 123 + 28 * 39 - 1100 + 2を計算

console.log(calc.add(123, (calc.multiply(28,39)) + calc.add(-1100, 2)));

// Q9
function remainder (x, y) {
    const num = x % y;
    return num;
}

let remainderNum = remainder(5,3);
let questionMessageOf9 = '5 を 3 で割った余りは' + remainderNum  + 'です。';
console.log(questionMessageOf9);

// Q10
// スコープとは定義した変数を参照できる範囲のことで
// グローバルスコープはscript内の最も外側のエリアのことでどこからでも参照することができるが、ローカルスコープは関数スコープが存在し
// 関数スコープ内で定義された変数はスコープ外からは参照することができないためエラーが発生している。


// 応用編
// Q1
let randomNum = Math.floor(Math.random() * 10);
console.log(randomNum);

// Q2
setTimeout(() => {
  console.log('Hello World!');
},3000);

// Q3
let num = 2;

if (num > 0) {
    console.log('num is greater than 0');
} else if (num === 0) {
    console.log('num is 0');
} else if (num < 0) {
    console.log('num is less than 0');
}

// Q4
let numbers = [];
for (let index = 0; index < 100; index++) {
    numbers.push(index);
}

console.log(numbers);

// Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];
for (let index = 0; index < mixed.length; index++) {
   if (typeof(mixed[index]) !== 'number') {
        console.log('not number');
   } else if (mixed[index] % 2 === 1 ) {
        console.log('odd');
   } else {
        console.log('even');
   }
}