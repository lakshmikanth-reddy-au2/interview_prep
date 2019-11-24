sayHello = (name) => (
    (greeting) => (
         console.log(greeting, name)
 ))
 word = sayHello("AttainU")
 word("Hello");
 