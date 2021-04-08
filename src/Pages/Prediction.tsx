import React, { useState } from "react";

// Components
import { Typography, TextField, Paper, Button } from "@material-ui/core";
import { Formik } from "formik";
import ResultPopup from "./../Components/ResultPopup";

// Utils
import { makeStyles } from "@material-ui/core/styles";
import titanic from "./../Apis/titanic";
import predictionInputSchema from "./../schemas/predictionInput";

const initialValues = {
    PassengerId: 0,
    Pclass: 1,
    Sex_male: 1.0,
    Sex_female: 0.0,
    Age: 0,
    SibSp: 0,
    Parch: 0,
    Fare: 0.0,
    Embarked_S: 1.0,
    Embarked_C: 0.0,
    Embarked_Q: 0.0
}

interface ObjectToKeyValue {
    errors: { [id: string]: any },
    touched: { [id: string]: any }
    handleChange: (arg0: string) => any,
    handleSubmit: () => any,
    values: { [id: string]: any }

}

const Predicition = () => {
    const classes = useStyle();
    const [ open, setOpen ] = useState(false);
    const [ prediction, setPrediction ] = useState("Survived");

    const handleClose = (): any => {
        setOpen(false);
    }

    const getPrediction = async (values: any) => {
        try {
            const response = await titanic.post("/predict", { input: values });
            setPrediction(response.data.predict ? "Survived": "Not Survived" );
            setOpen(true)
        } catch(err){
            console.log("PREDICTION_FETCH_ERROR: ", err);
        }
    }

    return (
        <>
            <div style={{ margin: "1rem" }}>
                <Typography variant="h3" component="h1" align="left">
                   Prediction
                </Typography>
            </div>

            <Formik
                initialValues={initialValues}
                validationSchema={predictionInputSchema}
                onSubmit={getPrediction}
            >
                {({ errors, touched, handleChange, handleSubmit, values}: ObjectToKeyValue) => {

                    return (
                        <div style={{ 
                            display: "grid", 
                            gridTemplateColumns: "1fr",
                        }}>
                            <Paper className={classes.form}>
                                {Object.keys(initialValues).map((element, index) => (
                                    <TextField
                                        key={index} 
                                        name={element} 
                                        label={element}
                                        type="number"
                                        value={values[element]}
                                        placeholder={element}
                                        onChange={handleChange(element)}
                                        error={Boolean(errors[element] && touched[element])}
                                        helperText={errors[element]}
                                    />
                                ))}
                                <div style={{ margin: "1rem" }}>
                                    <Button variant="contained" color="primary" onClick={handleSubmit}> 
                                        Predict 
                                    </Button>
                                </div>  
                            </Paper>
                        </div>
                    )
                }}
            </Formik>
            <ResultPopup
                open={open}
                handleClose={handleClose}
                title="Prediction Result"
                content={<Typography variant="h6" align="center">The passenger is <b>{prediction}</b></Typography>}
            />
        </>
    );
}

const useStyle = makeStyles({
    form: {
        justifySelf: "center",
        width: "95%",
        margin: "1rem",
        "& > div": {
            display: "block",
            margin: "1rem",
            "& > div": {
                width: "100%"
            }
        }
    }
})

export default Predicition;
