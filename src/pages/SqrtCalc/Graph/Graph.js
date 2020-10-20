import React, { Component } from 'react'
import { AppBar, Button, IconButton, TextField, Toolbar, Typography, withStyles } from '@material-ui/core';
import { Menu } from "@material-ui/icons";

export default class Graph extends Component {
    constructor(){
        super()
        this.state= {

        }
    }


    
    render() {
        return (
            <div>
                Data from parent X: {this.props.input1} <br />
                Data from parent Y: {this.props.input2} <br />
                Data from parent Z: {this.props.input3} <br />
            </div>
        )
    }
}
