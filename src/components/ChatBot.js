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
        border: "solid 3px " + theme.palette.secondary.main,
        background: theme.palette.primary.main,
        display: 'flex',
        position: "absolute !important",
        bottom: 20,
        right: 20
    },
    title: {
        height: "40px",
        width: "100%",
        textDecoration: "underline",
        textAlign: "center"
    },
    bodyBox: {
        flex: "1",
        height: "100px",
        wordBreak: "break-all",
        background: "lightGray",
        width: "100%"
    },
    textBox: {
        height: "40px",
        width: "100%",
        wordBreak: "break-all",
        border: "solid 3px " + theme.palette.primary.main,
        background: "#f0f0f0",
        boxSizing: "border-box",
        
    },
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
                <div className={classes.title}> Chatting with Crystal</div>
                <div className={classes.bodyBox}>
                    nope
                </div>
                <input type="text" className={classes.textBox} onChange={() => {}} value="test"/>
                
            </Resizable>
        )
    }
}
export default withStyles(styles)(ChatBot);

