import { AppBar, Box, Button, Container, IconButton, TextField, Toolbar, Typography, withStyles } from '@material-ui/core';
import React, { Component } from 'react'


class Animal {
    constructor(name, animalType, weight) {
        this.name = name;
        this.animalType = animalType;
        this.weight = weight;
    }
    speak() {
        return `${this.name} is a ${this.animalType} and weighs ${this.weight}`;
    }
}

let generator = "";

export default class ClassesTest extends Component {
    constructor(props) {
        super()
        this.state = {
            box1: "Animals's Name",
            box2: "Animal Type",
            box3: "Animal's Weight",
            weight: "",
            response: []
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

        generator = new Animal(this.state.box1, this.state.box2, this.state.box3)
        let otherGenerator = generator.speak();

        let newResponse = [...this.state.response, otherGenerator];

        this.setState({
            response: newResponse
        })



    }
    theDownload = () => {
        this.downloadObjectAsJson(this.state.response, "yourAnimals")
    }

    downloadObjectAsJson(exportObj, exportName) {
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj,null,4));
        var downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", exportName + ".json");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }

    render() {
        console.log(this.state.response);
        return (
            <Container maxWidth="sm" item xs={6} md={4} lg={3}>
                <Box display="flex" flexDirection="column">
                    <TextField id="filled-basic" variant="filled" value={this.state.box1} onChange={this.inputName} /> <br /><br />
                    <TextField id="filled-basic" variant="filled" value={this.state.box2} onChange={this.inputAnimalType} /> <br /><br />
                    <TextField id="filled-basic" variant="filled" value={this.state.box3} onChange={this.inputWeight} /> <br /><br />
                    <Button variant="contained" color="primary" onClick={this.animalGen}>Generate Animal</Button>
                    <Button variant="contained" color="primary" onClick={this.theDownload}> Click to Export List of Animals</Button>
                    {
                        this.state.response.map(
                            (response) => (<h3>{response}</h3>)
                        )
                    }
                </Box>
            </Container>
        )
    }
}
