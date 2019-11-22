let x = 'outer scope';
(function() {
    console.log(x);
    let x = 'inner scope';
}());