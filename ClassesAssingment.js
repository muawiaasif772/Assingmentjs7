class Person{
    constructor(age,name,heght,hairColor,weight){
        this.age=age
        this.name=name
        this.heght=heght
        this.hairColor=hairColor
        this.weight=weight
    }
    getname(){ return (`my name is ${this.name}`)}
    getAgeAndHeight(){return ({
        age:this.agg,
        heght:this.heght
    })}
    updateAge(newAge){
       if(newAge===undefined){
        throw new Error('please write new age')
       }
      return this.age=newAge
    }
    isDied (Died){
  return this.Died=Died
    }

}
let myProperty=new Person(14,'muawia asif',5.2,'black','58kg')
 console.log(myProperty.getname())
 console.log(myProperty.getAgeAndHeight()) 
 console.log(myProperty)
 console.log(myProperty.updateAge(45))
 console.log(myProperty)
//  myProperty.setIsDied(true)
//  myProperty.setIsDied(false)
 console.log(myProperty.isDied(true))
 console.log(myProperty.isDied(false))
 console.log(myProperty)



 
