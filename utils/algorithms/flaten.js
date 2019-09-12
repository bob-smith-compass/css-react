// Welcome to Facebook!

// This is just a simple shared plaintext pad, with no execution capabilities.

// When you know what language you would like to use for your interview,
// simply choose it from the dropdown in the top bar.

// Enjoy your interview!

var input = [1, { a: [2, [3]] }, 4, [5, [6]], [[7], 8, 9], 10];
var output = [1, { a: [2, [3]] }, 4, 5, 6, 7, 8, 9, 10];
// fn flaten deeply nested array
// if object skip

function flaten(a) {

    let _flat = a.map((e) => {

        //     if e is object just use it
        //     if e is another array recursively flaten it
        if (Array.isArray(e)) {
            return flaten(e)
        } else {
            return e;

        }

    });

    return _flat;

}

flaten(input);

