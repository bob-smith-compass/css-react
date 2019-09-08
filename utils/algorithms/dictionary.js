/**
 * Dictionary
 * 1. arrays are objects in JS
 * 2. Will use arrays for Dictionaries to be able to sort
 * 3. will create Phone directory as dictionary
 */
class Dictionary {
    constructor() {
        this.dataStore = [];
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
}

let dic = new Dictionary();
console.log(dic);
dic.add('David', 4169695432);
console.log(dic);
console.log(dic.find("David"));
console.log([1,2,3].find( (e) => e === 2)); // 