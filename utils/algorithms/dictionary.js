/**
 * Dictionary
 * 1. arrays are objects in JS
 * 2. Will use arrays for Dictionaries to be able to sort
 * 3. will create Phone directory as dictionary
 */
class Dictionary {
    constructor() {
        this.dataStore = [];
        // this.dataStore = new Array();
    }
    add(key, val) {
        this.dataStore[key] = val;
    }
    find(key){
        return this.dataStore.find((e) => {
            console.log(e);
            return key === e;
        });
    }
    delete(key) {
        delete this.dataStore[key];
    }
}

let dic = new Dictionary();
console.log(dic);
dic.add('David', 4169695432);
dic.add('John', 3013215431);
console.log(dic);
console.log(dic.find("David"));
console.log(dic.find("John"));
console.log([1,2,3].find( (e) => e === 2)); // 
/**
 * Arrays are objects
 */
let arr = [];
arr["David"] = "David Shams";
arr["John"] = "John Doe";
console.log(arr);
console.log(arr["David"]);
console.log(arr["John"]);
let answer = arr.find( (e) => {
    return e === "David Shams";
});
console.log(answer);
/**
 * Array operations
 */
// input array contain some elements. 
var array = [10, 20, 30, 40, 50]; 
// Here find function returns the value of the first element 
// in the array that satisfies the provided testing 
// function (return element > 10). 
var found = array.find(function(element) { 
  return element > 30; 
});   
// Printing desired values. 
console.log(found); 
console.log(dic); 
dic.delete("John");
console.log(dic); 



