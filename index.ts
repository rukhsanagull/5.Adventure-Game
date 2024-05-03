#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"
class Player{
    name:string;
    fuel:number = 100;
    constructor(name:string){
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel -25
        this.fuel = fuel
    }
    fuelIncrease(){
        this.fuel
    }
}
class Opponent{
    name:string;
    fuel:number=100;
    constructor(name:string){
        this.name = name
    }
    fuelDecrease(){
        let fuel = this.fuel -25
        this.fuel = fuel
    }


}
let player = await inquirer.prompt([{
    name:"name",
    type:"input",
    message:"please Enter your name"
}])
let opponent = await inquirer.prompt([
    {   
        name:"select",
        type:"list",
        message:"select your opponent",
        choices:["skeleton","Alien","zombie"]

    }
])
let p1 = new Player(player.name)
let o1 = new Opponent(opponent.select)

do{
    if(opponent.select == "skeleton"){
        let ask = await inquirer.prompt([
            {   
                name:"opt",
                type:"list",
                message:"what would you like to do?",
                choices:["Attack","Drink portion","Run for your Life.."]
            }
      ]);
    
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if(p1.fuel <= 0){
                    console.log("you Loose, Better Luck Next Time");
                    process.exit()
                }


            }
            if (num <= 0){
                o1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if(o1.fuel <= 0){
                    console.log("you win");
                    process.exit()
            }}
            
    if(ask.opt == "Drink portion"){
       p1.fuelIncrease()
       console.log(`you Drink Health portion your fuel is ${p1.fuel}`);


    }
if(ask.opt =="Run for your Life"){
    console.log("you loose Better Luck Next time");
    process.exit()
}
    
}
    }

    if(opponent.select == "Alien"){
        let ask = await inquirer.prompt([
            {name:"opt",
                type:"list",
                message:"what would you like to do?",
                choices:["Attack","Drink portion","Run for your Life.."]
            }
      ]);
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if(p1.fuel <= 0){
                    console.log("you Loose, Better Luck Next Time");
                    process.exit()
                }


            }
            if (num <= 0){
                o1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if(o1.fuel <= 0){
                    console.log("you win");
                    process.exit()
            }}
            
    if(ask.opt == "Drink portion"){
       p1.fuelIncrease()
       console.log(`you Drink Health portion your fuel is ${p1.fuel}`);


    }
if(ask.opt =="Run for your Life"){
    console.log("you loose Better Luck Next time");
    process.exit()
}
    
}
    }

    if(opponent.select == "zombie"){
        let ask = await inquirer.prompt([
            {name:"opt",
                type:"list",
                message:"what would you like to do?",
                choices:["Attack","Drink portion","Run for your Life.."]
            }
      ]);
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if(p1.fuel <= 0){
                    console.log("you Loose, Better Luck Next Time");
                    process.exit()
                }


            }
            if (num <= 0){
                o1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if(o1.fuel <= 0){
                    console.log("you win");
                    process.exit()
            }}
            
    if(ask.opt == "Drink portion"){
       p1.fuelIncrease()
       console.log(`you Drink Health portion your fuel is ${p1.fuel}`);


    }
if(ask.opt =="Run for your Life"){
    console.log("you loose Better Luck Next time");
    process.exit()
}
    
}
    }}

    while(true)
