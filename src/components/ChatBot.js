import React, { Component } from 'react';
import { render } from "react-dom";
import { Resizable } from 're-resizable';
import { Button, withStyles } from '@material-ui/core';

const styles = theme => ({
    mainBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "solid 3px " + theme.palette.primary.main,
        background: "#f0f0f0"
    }
});

class ChatBot extends Component {
    render() {
        const classes = this.props.classes
        return (

            <Resizable
                className = {classes.mainBox}
                defaultSize={{
                    width: 200,
                    height: 200
                }}
            >
                <Button fullWidth variant="contained" color="primary">Test Button</Button>
            </Resizable>
        )
    }
}
export default withStyles(styles)(ChatBot);

