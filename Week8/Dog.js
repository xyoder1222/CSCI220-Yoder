class Dog{
    constructor(){
        this.color
        this.breed
        this.name
    }
    set description(color,breed,name)
    {
        this.color="red";
        this.breed="Corgi";
        this.name="Bobert";
    }
    get description(color, breed, name)
    {
        return this.name +" is a " + this.color + " " + this.breed;  
    }
}

doggo = new Dog;
console.log(doggo.description);