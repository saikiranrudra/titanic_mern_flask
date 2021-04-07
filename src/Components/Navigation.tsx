import React from "react";

// Components
import { 
    Paper, 
    Typography, 
    Button,
    Grid 
} from "@material-ui/core";

import { 
    Timeline as TimelineIcon, 
    GridOn as TableIcon,
    FlashOn as PredictionIcon
} from "@material-ui/icons";

// Utils
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const Navigation = () => {
    const classes = useStyles();
    return (
        <Paper>
            <Grid container style={{ alignItems: "center" }}>
                <Grid item sm={6} xs={12}>
                    <Typography 
                        variant="h6" 
                        component="h1"
                        className={classes.logo}
                    >
                        Saikiran Rudra
                    </Typography>
                </Grid>
                
                <Grid 
                    item
                    sm={6} 
                    xs={12} 
                    style={{ justifySelf: "self-end" }}
                >
                    <div className={classes.btnContainer}>

                        <Link to="/" style={{ textDecoration: "none" }}>
                            <Button 
                                variant="contained" 
                                color="primary"
                                startIcon={<TimelineIcon />}
                                className={classes.btn}
                            >
                                Charts
                            </Button> 
                        </Link>

                        <Link to="/TablePage" style={{ textDecoration: "none" }}>
                            <Button 
                                variant="contained" 
                                color="primary"
                                startIcon={<TableIcon />}
                                className={classes.btn}
                            >
                                Table
                            </Button> 
                        </Link>

                        <Link to="/Prediction" style={{ textDecoration: "none" }}>
                            <Button 
                                variant="contained" 
                                color="primary"
                                startIcon={<PredictionIcon />}
                                className={classes.btn}
                            >
                                Prediction
                            </Button> 
                        </Link>
                    </div>
                </Grid>

            </Grid>
        </Paper>
    );
}

const useStyles = makeStyles({
    logo: {
        textTransform: "uppercase",
        padding: ".8rem 1rem",
        fontSize: "1rem"
    },
    btnContainer: {
        display: "flex",
        justifyContent: "flex-end",
        padding: ".8rem 0"
    },
    btn: {
        margin: ".05rem",
        transform: "scale(.9)"
    }
})

export default Navigation;