
let a = [1, 2, 3, 4, 5, 4, 5];
let sum = a.reduce((cur, next) => {
    console.log(`cur: ${cur} next: ${next}`); // take elements as per index so 1 is frist cur and 2 is first next
    return (cur + next);
});
console.log(`sum: ${sum}`);

let b = a.sort();
let lastStone = b.reduce((cur, next) => {
    console.log(`cur: ${cur} next: ${next}`);
    let smashedStone = Math.abs(cur - next);
    console.log(`smashedStone: ${smashedStone}`);
    if (smashedStone === 0) {
        console.log(`Take next 2 stones`);
    }
    return (smashedStone);
})
console.log(`lastStone: ${lastStone}`);

/**
 * Interview question 
 * find if 2 array elements add up to a given number
 */
// a = [1,2,3,4,5]; // 1+2 = 3 so true
a = [1, 2, 5, 8, 20]; // 1+2 = 3 so true
function addUpTo(n, a) {
    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            console.log(`Adding ${a[i]} + ${a[j]}: `);
            if ((a[i] + a[j]) === n) {
                return true;
            };

        }
    }
    return false;
}
console.log(addUpTo(3, a));
console.log(addUpTo(20, a));
/**
 * Array operations
 * 1. assign 1 to 100 to array
 */
for (let i = 0; i < 100; i++) {
    a[i] = i + 1;
}
console.log(a);
let str = "Arrays are cool!";
let mistake = [str.split(' ')]; //[ [ 'Arrays', 'are', 'cool!' ] ]
let words = str.split(' ');; //[ [ 'Arrays', 'are', 'cool!' ] ]
console.log(words);
console.log(mistake);
/**
 * Copy arrays
 * 1. shallow
 * 2. deep
 */
// let acopy = a;
var acopy = a;
a = [1, 2, 3];
console.log(acopy);
console.log(a);

/**
 * Searchaing arrays
 * 1. indexOf()
 */
console.log(a.indexOf(3)); // 
console.log(a.indexOf(-99)); // 
console.log(a.indexOf(-19) === -1 ? "Not found" : a[a.indexOf(3)]); // return element if exists, else 
console.log(a.indexOf(3) === -1 ? "Not found" : a[a.indexOf(3)]); // return element if exists, else 

let all = [2, 2, 2, 2, 2];
console.log(all.indexOf(2)); // first found index
console.log(all.lastIndexOf(2)); // last found index

/**
 * String Representations of Arrays
 * 1. join()
 * 2. toString()
 */
console.log([1, 2, 3, 4].join()); // 1,2,3,4
console.log([1, 2, 3, 4].toString()); // 1,2,3,4
let first = ['A', 'B', 'C', 'D', 'E', 'F'];
let second = ['G', 'H', 'I'];
let both = first.concat(second);
console.log(both);
let middle = first.slice(1, 3); // 1 inclusive and upto ( not inclusive 3 ) so 1 and 2
console.log(middle);
console.log(first.splice(1, 3)); // start at position 1 and take 3 elements
/**
 * Mutator function
 * 1. push() - add to the END
 * 2. unshift() - // add to the BEGINING
 */
console.log([2, 3, 4].unshift(1)); // 4
let uncomplete = ['B', 'C', 'D'];
let carray = uncomplete.slice('A');
console.log(carray); // 4
console.log(uncomplete); // mutate array in place
console.log(uncomplete.splice('E')); // 5
console.log(uncomplete); // mutate array in place
let shme = ['A', 'B', 'C', 'E', 'F'];
console.log(shme.shift('G')); // A - trickey - ignore `G` if not integer
console.log(shme); // [ 'B', 'C' ]
console.log(shme.shift(2));
console.log(shme);
while (shme.length) {
    console.log(shme.shift());
}
/**
 * splice()
 * 1. add elements
 * 2. remove elements
 * 3. both from begining and end
 */
a = [1, 2, 3, 4, 5];
console.log(a);
a.splice(0, 1); // from 0 position remove 1 element
console.log(a);
a.splice(a.length, 0, 6); // add 6 to the end of the array
console.log(a);
a.splice(1, 3); // starting at position 1 remove/return 3 elements
console.log(a);
a.splice(1, 0, 3, 4, 5); // statring after position 1 add ( 0 ) 3 elements 3,4,5
console.log(a);
/**
 * Note old books may say using [3,4,5] array
 * but now it will add the array [3,4,5] as the only element at position 1
 */
a.splice(a.length, 0, [7, 8, 9]);
console.log(a);
a.pop();
console.log(a);
a.splice(a.length, 0, ...[7, 8, 9]);
console.log(a);
a = [1, 2, 3, 50, 60, 70, 4, 5, 6];
a.splice(3, 1, 3); // starting at position 3 [ 1, 2, 3, 3, 60, 70, 4, 5, 6 ]
a.splice(3, 0, 3); // starting at position 3 ( inclusive ) remove 3 elements
console.log(a);
/**
 * sorting
 * reversing
 */
a = ["John", "Bob", "David"];
console.log(a);
a.reverse();
console.log(a);
a.sort();
console.log(a);
a = ["John01", "Bob02", "David3", "David03"];
console.log(a);
a.reverse();
console.log(a);
a.sort();
console.log(a);
a = [1, 2, 100, 200];
console.log(a);
a.sort();
console.log(a); // [ 1, 100, 2, 200 ]
let comparator = (x, y) => x - y;
a.sort(comparator);
console.log(a);

/**
 * Iterators
 */
let square = (e) => {
    console.log(e);
    return e * e;
};
let mquare = function (e) {
    console.log(e);
    return e * e;
};
a = [1, 2, 3, 4, 5];
let sqra = a.forEach(square); // returns new array
console.log(a);
sqra = a.forEach(mquare); // returns new array
console.log(a);
console.log(sqra);
sqra = a.map(square);
console.log(a);
console.log(sqra);
let z = [1, 2, 3];
console.log(z.forEach(function (e) {
    console.log(e);
    // return e * e;
    e = e * e;
}));
console.log(z);
let allEven = z.every((e) => e % 2 === 0);
console.log("TCL: allEven", allEven);
allEven = [2, 4, 6].every((e) => e % 2 === 0);
console.log("TCL: allEven", allEven);
console.log([1, 2, 3].some((e) => e % 2 === 0));
console.log([1, 3].some((e) => e % 2 === 0));

/**
 * reduce
 */
let total = 100;
console.log([5, 10].reduce((total, currentValue) => total + currentValue)); // 15!!! You will think you are able to pass initial value
console.log(["John", "Bob", "David"].reduce((all, cur) => `${all} AND ${cur}`));
console.log(["John", "Bob", "David"].reduceRight((all, cur) => `${all} AND ${cur}`));
/**
 * Arrays & Strings
 * 1. return first letter of each word
 * 2. reverse each work in the array
 */
console.log(["John", "Bob", "David"].map((e) => e[0])); // [ 'J', 'B', 'D' ]
console.log(["John", "Bob", "David"].map((e) => {
    return [...e].reverse().join(''); // without empy string join() will insert comma
})); // [ 'nhoJ', 'boB', 'divaD' ]
/**
 * filter()
 */
console.log([1, 2, 3, 4, 5, 6].filter((e) => e % 2 === 0)); // [ 2, 4, 6 ]
let wrongs = [];
wrongs = ["decieve", "received", "achieve"].filter((e) => {
    console.log(e);
    if (e.indexOf("cie") !== -1) {
        return e;
    }
});
console.log(wrongs);
/**
 * 2-D Arrays in JS
 * JavaScript arrays are only one-dimensional, but you can create multidimensional arrays by creating arrays of arrays. 
 */
Array.matrix = function (numrows, numcols, initial) {
    var arr = []; for (let i = 0; i < numrows; ++i) {
        var columns = []; for (let j = 0; j < numcols; ++j) {
            columns[j] = initial;
        }
        arr[i] = columns;
    }
    return arr;
}
let D2 = Array.matrix(3, 4, 0);
console.log(D2);
D2.map((e) => e.map((g) => g += 5)); // BUG
console.log(D2);
D2.map((e) => {
    console.log(`e: `, e);
    let temp = e.map((g) => {
        console.log(`g: `, g);
        g += 1;
    });
    return temp; // TODO debug
});
D2.forEach((e, i) => {
    console.log(e, i);
    e.forEach((g, j) => {
        console.log(g)
        // TODO
        D2[i][j] = 99;
    })
});
console.log(D2);
for (let i = 0; i < D2.length; i++) {
    const element = D2[i];
    for (let j = 0; j < element.length; j++) {
        D2[i][j] = 5;

    }
}
console.log(D2);
/**
 * all the functions and properties of arrays work with objects.
 */
let oArray = [
    { name: 'David', ssn: 12345678 },
    { name: 'John', ssn: 32345644 },
    { name: 'Bob', ssn: 33345678 }
];
oArray.map((e) => {
    console.log(e);
    console.log(`Hello Mr. ${e}`);
    // e.map( (g) => {
    // e.forEach( (g) => {
    // console.log(`Hello Mr. ${g}`);
    // console.log(`g`);
    // });
});
while (oArray.length) {
    console.log(oArray.pop());
}
console.log(oArray); // []
oArray = [
    { name: 'David', ssn: 12345678 },
    { name: 'John', ssn: 32345644 },
    { name: 'Bob', ssn: 33345678 }
];
if (oArray.length !== 0) {
    oArray.reduceRight((total, cur) => {
        // console.log(e.name);
        // console.log(cur);
        // total += cur;
        // total.name += cur.name;
        console.log(`cur: ${cur.name}`);
    });
};
// console.log([1,2,3].reduceRight((total, cur) => {
//     // console.log(prev, cur);
//     // return prev += cur;
//     // total += cur; // TODO dubug
// }));
[1, 2, 3].reduceRight((prev, next) => {
    return prev + next;
})

/**
 * List ATD implementation
 * ES5 implementation
 */
function List() {

    this.show = function () {
        console.log(this._list);
    }
    this._list = Array.from(arguments);
    this.listSize = function () {
        return this._list.length;
    };
    this.first = () => {
        return this._list[0];
    };
    this.removeFirst = () => {
        console.log(`First: ${this._list.shift()}`);
    };
    this.last = () => {
        console.log(`Last: ${this._list.pop()}`);
    };
    this.remove = (e) => {
        /**
         * 1. fid element
         * 2. remove it
         * 3. shift array
         */
        // console.log(this._list.indexOf(e));
        let position = this._list.indexOf(e);
        if(position !== -1){
            this._list.splice(position, 1); // TODO: -1 otherwise splice will remove from the end 
        }
        return this._list; // [ 'First', 'Second', 'Third', 'Other' ]
    };
    this.add = () => {
        console.log('add');
    };
    this.append = (e) => {
        if (e) {
            this._list.push(e);
        }
    }
}
let list = new List("First", "Second", "Third", "Other", "Last");
// let list = new List();
console.log(list.first());
list.last();
// list.remove();
list.add();
console.log(list.listSize());
list.show();
list.remove('Third');
// list.remove('NoSuchElement');
console.log(list._list);
