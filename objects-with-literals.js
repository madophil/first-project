const { not } = require("cheerio/lib/api/traversing")

let  firstObject={
     AddProperty(param1, param2){
        this[param1] = param2
    }
    
}
firstObject.AddProperty('firstName', 'ocansey')
firstObject.AddProperty('lastName', 'paul')
firstObject.AddProperty('age', 18)
firstObject.AddProperty('sex', 'female')

console.log(firstObject)


// get a property from  an object
/**
 * create an object
 * object should have properties
 * object should have a method that returns a property
 */
let  secondObject={
    "vegetable" : "weed",
    "fruit" : ["pepper", "onion","potato","tomato"],
    "spices" :["palm wine","gari"],
    getproperty(param){
    
        if(this[param]){
            console.log(this[param])
    
        }
        else{
            console.log("not available")
        }

    }
}
secondObject.getproperty('spices')
secondObject.getproperty('desert')

/**
 * how to deleted a property from an object
 */
let thirdObjecy={
    "vegetable" : "weed",
    "fruit" : ["pepper", "onion","potato","tomato"],
    "spices" :["palm wine","gari"],
 deleteproperty(param){
    if(this[param]){
        delete this[param]
       
    }
    else{
        console.log("doesnt exist")
    }
    
 }
}
thirdObjecy.deleteproperty('food')
//console.log(thirdObjecy)

/**
 * change property in an object
 */
let fourthObject={
    "vegetable" : "weed",
    "fruit" : ["pepper", "onion","potato","tomato"],
    "spices" :["palm wine","gari"],
    changeproperty(key,value){
        if(this[key]){
            this[key]=value
        }
   else{
    console.log ("error occure")
   }
    }

}
fourthObject.changeproperty('fruit',"weed")
console.log(fourthObject)