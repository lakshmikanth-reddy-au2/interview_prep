var Car = function() {
    this.name = 'Audi';
    this.color = 'blue';
    this.speed = '180';
    };
    ​
    Car.prototype.setName = function(name) {
    this.name = name;
    return this;
    };
    ​
    Car.prototype.setColor = function(color) {
    this.color = color;
    return this;
    };
    ​
    Car.prototype.setSpeed = function(speed) {
    this.speed = speed;
    return this;
    };
    ​
    Car.prototype.save = function() {
    alert( this.name +    + this.color +  + this.speed); //this is alert with inserted data
    // here we can save to database
    return this;
    ​
    };
    //Now we will try to call method as a chaining
    ​
    //var c = new Car();
   // c.setName(‘Alto’).setColor(‘black’).setSpeed(’90′).save();