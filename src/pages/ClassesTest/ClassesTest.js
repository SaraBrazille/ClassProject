import { AppBar, Button, IconButton, TextField, Toolbar, Typography, withStyles } from '@material-ui/core';
import React, { Component } from 'react'


class Animal {
    constructor(name, animalType, weight) {
        this.name = name;
        this.animalType = animalType;
        this.weight = weight;
        // this.result = "";
    }
    speak() {
        // this.setState({
        //     result:`${this.name} is a ${this.animalType} and weighs ${this.weight}`
        // })
        console.log(`${this.name} is a ${this.animalType} and weighs ${this.weight}`);
    }
}

let generator="";

export default class ClassesTest extends Component {
    constructor(props) {
        super()
        this.state = {
            box1: "Animals's Name",
            box2: "Animal Type",
            box3: "Animal's Weight",
            weight: "",
            response: ""
        }
    }

    // Name
    inputName = (e) => {
        this.setState({
            box1: e.target.value
        })
    }

    // AnimalType
    inputAnimalType = (e) => {
        this.setState({
            box2: e.target.value
        })
    }

    // Weight
    inputWeight = (e) => {
        this.setState({
            box3: e.target.value
        })
    }


    animalGen = () => {

        generator= new Animal(this.state.box1, this.state.box2, this.state.box3)
        let otherGenerator = generator.speak();

        this.setState({
            response: otherGenerator
        })

    }

    render() {
        return (
            <div>

                <TextField id="filled-basic" variant="filled" value={this.state.box1} onChange={this.inputName} /> <br /><br />
                <TextField id="filled-basic" variant="filled" value={this.state.box2} onChange={this.inputAnimalType} /> <br /><br />
                <TextField id="filled-basic" variant="filled" value={this.state.box3} onChange={this.inputWeight} /> <br /><br />
                <Button variant="contained" color="primary" onClick={this.animalGen}>Generate Animal</Button>
                <h3>{this.state.response}</h3>
                {/* <h3>{this.result}</h3> */}

            </div>
        )
    }
}
