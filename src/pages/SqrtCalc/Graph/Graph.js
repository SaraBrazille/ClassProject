
import React, { Component } from 'react'
import { AppBar, Box, Button, IconButton, TextField, Toolbar, Typography, withStyles } from '@material-ui/core';
// import { Menu } from "@material-ui/icons";

export default class Graph extends Component {
    constructor() {
        super()
        this.state = {

        }
        this.canvasRef = React.createRef();
        this.canvasRefTwo = React.createRef();
    }



    drawFunction = () => {
        let xAxis = 0;
        let yAxis = 0;

        var c = this.canvasRef.current;
        var ctx = c.getContext("2d");
        ctx.moveTo(0, 0);
        ctx.lineTo(200, 100);
        ctx.stroke();


        var b = this.canvasRefTwo.current;
        var ctxx = b.getContext("2d");
        ctxx.moveTo(0, 100);
        ctxx.lineTo(200, 0);
        ctxx.stroke();

    }

    render() {
        return (

            <Box display="flex" flexDirection="column">
                <Typography variant="p">Data from parent X: {this.props.input1} </Typography>
                <Typography variant="p">Data from parent Y: {this.props.input2} </Typography>
                <Typography variant="p">Data from parent Z: {this.props.input3} </Typography>
                <Box display="flex">
                    <canvas with={600} height={400} ref={this.canvasRef}></canvas>
                    <canvas with={600} height={400} ref={this.canvasRefTwo}></canvas>
                </Box>
                <Button onClick={this.drawFunction}>Draw function</Button>

            </Box>


        )
    }
}
