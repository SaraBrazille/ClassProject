import { AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography, withStyles } from '@material-ui/core';
import {Menu} from "@material-ui/icons";
import React, { Component } from 'react'

const styles = theme => ({
    title: {
        flexGrow: 2,
        width: "100%",
        textAlign: "center"
    },
    main: {
        marginTop: theme.spacing(3)
    },
    item: {
        padding: theme.spacing(1),
        minHeight: 250,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer"
    },
    itemText:{
        textAlign: "center"
    }
});

class Home extends Component {
    render() {
        const { classes } = this.props;

        return (
            <>
                <AppBar position="static">
                    <Toolbar className={classes.menu}>
                        <Typography variant="h6" className={classes.title}>
                            Dot Star Class Project :D
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Container className={classes.main}>
                    <Grid container spacing={3}>
                        <Grid item xs={6} md={4} lg={3}>
                            <Paper className={classes.item}>
                                <Typography className={classes.itemText} onClick={() => {window.location.href = "/Game"}} variant="h4">Game</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} md={4} lg={3}>
                            <Paper className={classes.item}>
                                <Typography className={classes.itemText} onClick={() => {window.location.href = "/SqrtCalc"}} variant="h4">Root Calc</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} md={4} lg={3}>
                            <Paper className={classes.item}>
                                <Typography className={classes.itemText} onClick={() => {window.location.href = "/Responsive"}} variant="h4">Responsive Test</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} md={4} lg={3}>
                            <Paper className={classes.item}>
                                <Typography className={classes.itemText} onClick={() => {window.location.href = "/PopUps"}} variant="h4">Pop Ups</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </>
        )
    }
}

export default withStyles(styles)(Home);