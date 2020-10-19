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

    constructor(){
        super();
        this.state = {
            bannerIndex: 0,
            MyBanners: new Array('banner1.jpg', 'banner2.jpg', 'banner3.jpg', 'banner4.jpg')
        }
    }

    componentDidMount(){
        setTimeout(this.ShowBanners, 5000)
    }


    ShowBanners = () => {
        if (document.images) {
            let banner = this.state.bannerIndex + 1;
            if (banner == this.state.MyBanners.length) {
                banner = 0
            }
            this.setState({
                bannerIndex: banner
            })
            setTimeout(this.ShowBanners, 5000)
        }
    }

    render() {
        const { classes } = this.props;

        let curBanner = this.state.MyBanners[this.state.bannerIndex];

        return (
            <>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <Menu />
                        </IconButton>s
                        <Typography variant="h6" className={classes.title}>
                            Free Money

                    </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                <img src={"/" + curBanner} width="900" height="120" name="ChangeBanner" />
            </>
        )
    }
}

export default withStyles(styles)(Home);