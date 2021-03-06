import React, { Component } from 'react';
import { render } from "react-dom";
import { Resizable } from 're-resizable';
import { Button, Paper, TextField, Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
    mainBox: {
        alignItems: "center",
        justifyContent: "center",
        display: 'flex',
        position: "absolute !important",
        bottom: 20,
        right: 20,
    },
    paper: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden"
    },
    title: {
        textAlign: "center",
        color: "white",
        backgroundColor: theme.palette.primary.main,
        
    },
    bodyBox: {
        flex: "1",
        height: "100px",
        wordBreak: "break-all",
        background: "white",
        width: "100%",
        borderTop: "solid 1px " + theme.palette.secondary.light,
    },
    textBox: {
        height: "60px",
        width: "100%",
        wordBreak: "break-all",
        background: "white",
        boxSizing: "border-box",
        borderRadius: "3px",
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
            >   <Paper className={classes.paper} elevation={3}>
                    <Typography variant="h6" className={classes.title}> Chatting with Crystal</Typography>
                    <div className={classes.bodyBox}>
                        nope
                    </div>
                    <form className={classes.textBox} noValidate autoComplete="off">
                        <TextField fullWidth id="standard-basic" label="Say Something" />
                    </form>
                </Paper>
            </Resizable>
        )
    }
}
export default withStyles(styles)(ChatBot);

