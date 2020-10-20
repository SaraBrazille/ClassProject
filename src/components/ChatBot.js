import React, { Component } from 'react';
import { render } from "react-dom";
import { Resizable } from 're-resizable';
import { Button, withStyles } from '@material-ui/core';

const styles = theme => ({
    mainBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
<<<<<<< HEAD
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
=======
        border: "solid 3px " + theme.palette.primary.main,
        background: "#f0f0f0",
        position: "absolute !important",
        bottom: 0,
        right: 0
>>>>>>> 91649dc17364e307b1feca8de7dc9e4f8de5d7d6
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
<<<<<<< HEAD
                <div className={classes.bodyBox}>
                    randomtesting
                </div>
                <input type="text" className={classes.textBox} value="test"/>
                
=======
                <Button fullWidth variant="contained" color="primary">Test Button</Button>
>>>>>>> 91649dc17364e307b1feca8de7dc9e4f8de5d7d6
            </Resizable>
        )
    }
}
export default withStyles(styles)(ChatBot);

