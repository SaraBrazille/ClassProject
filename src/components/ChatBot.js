import React, { Component } from 'react';
import { render } from "react-dom";
import { Resizable } from 're-resizable';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    mainBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "solid 3px " + theme.palette.secondary.main,
        background: theme.palette.primary.main,
        display: 'flex'
    },
    bodyBox: {
        height: "100px",
        wordBreak: "break-all"
    },
    textBox: {
        height: "40px",
        alignContent: "flex-end",
        width: "100%",
        wordBreak: "break-all"
    }
});

class ChatBot extends Component {
    render() {
        const classes = this.props.classes
        return (

            <Resizable
                className={classes.mainBox}
                defaultSize={{
                    width: 200,
                    height: 200
                }}
            >
                <div className={classes.bodyBox}>
                    randomtesting
                </div>
                <input type="text" className={classes.textBox} value="test"/>
                
            </Resizable>
        )
    }
}
export default withStyles(styles)(ChatBot);

