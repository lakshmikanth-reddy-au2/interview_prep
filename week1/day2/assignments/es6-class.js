class Animal {
    constructor(familyName, breedName){
      this.familyName = familyName;
      this.breedName = breedName;
    }
  
    
  }
  
  class Cat extends Animal {
    constructor(firstName, breedName){
      super(firstName, breedName)
    }
    sayFamilyName(){
      console.log(this.familyName);
    }
    sayBreedName(){
      console.log(this.breedName);
    }
  }
  
  let cat = new Cat();
  cat.familyName = 'Carnivora';
  cat.breedName = 'Persian';
  cat.sayFamilyName();
  cat.sayBreedName();
   