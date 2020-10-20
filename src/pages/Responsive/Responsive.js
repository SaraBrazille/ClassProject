import { Box, Button, Container, Grid, withStyles } from '@material-ui/core'
import React, { Component } from 'react'

const styles = theme => ({
    myDiv:{
        display: "flex",
        backgroundColor: theme.palette.primary.main
    }
})

class Responsive extends Component {
    render() {

        const {classes} = this.props;

        return (
            <Container>
                <Grid container>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                        <Button variant="contained" color="primary" fullWidth>Button1</Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                        <Button variant="contained" color="primary" fullWidth>Button2</Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                        <Button variant="contained" color="primary" fullWidth>Button2</Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                        <Button variant="contained" color="primary" fullWidth>Button2</Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                        <Button variant="contained" color="primary" fullWidth>Button2</Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                        <Button variant="contained" color="primary" fullWidth>Button2</Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                        <Button variant="contained" color="primary" fullWidth>Button2</Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                        <Button variant="contained" color="primary" fullWidth>Button2</Button>
                    </Grid>
                </Grid>

                <Box className={classes.myDiv}>
                    Stuff
                </Box>
            </Container>
            
        )
    }
}

export default withStyles(styles)(Responsive)
