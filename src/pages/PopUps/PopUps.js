import { AppBar, Button, IconButton, Toolbar, Typography, withStyles } from '@material-ui/core';
import { HighlightTwoTone, Menu } from "@material-ui/icons";
import React, { Component } from 'react'

const styles = theme => ({
    root: {
        flexGrow: 2,
    },
    menuButton: {
        marginRight: theme.spacing(3),
    },
    title: {
        flexGrow: 2,
    },
});

class Home extends Component {
    render() {
        const { classes } = this.props;

        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Free Money

                </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>

            <html>
             language="Javascript">MyBanners=new Array('banner1.jpg','banner2.jpg','banner3.jpg','banner4.jpg')
            banner=0
            function ShowBanners()
        { if (document.images)
        {banner++
        if (banner==MyBanners.length) {
                    banner = 0}
        document.ChangeBanner.src=MyBanners[banner]
        setTimeout("ShowBanners()",5000)
        }
        }
        
            <body onload="ShowBanners()">
                <center>
                    <img src="banner1.jpg" width="900" height="120" name="ChangeBanner" />
                </center>
            </body>
        </html> 
        )
    }
}

export default withStyles(styles)(Home);




