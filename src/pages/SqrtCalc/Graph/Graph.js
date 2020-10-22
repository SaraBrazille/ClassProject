
import React, { Component } from 'react'
import { AppBar, Box, Button, IconButton, TextField, Toolbar, Typography, withStyles } from '@material-ui/core';
import { EqualizerTwoTone } from '@material-ui/icons';
// import { Menu } from "@material-ui/icons";

export default class Graph extends Component {
    constructor() {
        super()
        this.state = {
            myWidth: 200,
            myHeight: 200
        }
        this.canvasRef = React.createRef();
        this.canvasRefTwo = React.createRef();
    }


    drawFunction = () => {

        //x-axis
        var c = this.canvasRef.current;
        var ctx = c.getContext("2d");
        ctx.moveTo(100, 0);
        ctx.lineTo(100, 200);
        ctx.stroke();
        ctx.moveTo(0, 100);
        ctx.lineTo(200, 100);
        ctx.stroke();

        var other = this.canvasRef.current;
        var polyEq = other.getContext("2d");

        for (let i = 0; i < 200; i++) {
            let polyEquation = this.props.input1 * Math.pow(i, 3) + this.props.input2 * Math.pow(i, 2) + this.props.input3
            polyEq.moveTo(100, 100);
            polyEq.lineTo(100 + i, 100 - polyEquation)
            polyEq.stroke()

        }

    }

    render() {
        return (

            <Box display="flex" flexDirection="column">
                <Typography variant="p">Data from parent X: {this.props.input1} </Typography>
                <Typography variant="p">Data from parent Y: {this.props.input2} </Typography>
                <Typography variant="p">Data from parent Z: {this.props.input3} </Typography>
                <Box display="flex">
                    <canvas width={this.state.myWidth} height={this.state.myHeight} ref={this.canvasRef}></canvas>
                    <canvas width={this.state.myWidth} height={this.state.myHeight} ref={this.canvasRefTwo}></canvas>
                </Box>
                <Button onClick={this.drawFunction}>Draw function</Button>

            </Box>


        )
    }
}
