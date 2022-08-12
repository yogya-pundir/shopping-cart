import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import green from "@material-ui/core/colors/green";

import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";



const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    },
    customColor: {
        // or hex code, this is normal CSS background-color
        backgroundColor: green[500]
    },
    customHeight: {
        minHeight: 200
    },
    offset: theme.mixins.toolbar
}));


const Header = () => {
    const classes = useStyles();
    const [example, setExample] = useState("primary");
    const isCustomColor = example === "customColor";
    const isCustomHeight = example === "customHeight";
    return (
        <React.Fragment>
            <AppBar

                className={`${isCustomColor && classes.customColor} ${isCustomHeight && classes.customHeight }`}>
                <Toolbar>

                    <Typography variant="h6" className={classes.title}>
                        Shopping Cart
                    </Typography>

                    <Badge color="secondary" badgeContent='0'>
                        <ShoppingCartIcon />{" "}
                    </Badge>

                </Toolbar>
            </AppBar>
            <Toolbar />

        </React.Fragment>
    );
}

export default Header;