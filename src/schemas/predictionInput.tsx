import * as Yup from "yup";

const predictionInputSchema = Yup.object().shape({
    PassengerId: Yup.number()
        .required("PassengerId is required").positive(),
    Pclass: Yup.number()
        .moreThan(0, "should be between 1 and 3")
        .lessThan(4, "should be between 1 and 3")
        .required("Pclass is required"),
    Sex_male: Yup.number().required("Sex_male is required")
        .lessThan(2, "Either 0 or 1")
        .moreThan(-1, "Either 0 or 1"),
    Sex_female: Yup
        .number()
        .required("Sex_female is required")
        .lessThan(2, "Either 0 or 1")
        .moreThan(-1, "Either 0 or 1"),
    Age: Yup.number().required("Age is required").positive(),
    SibSp: Yup.number().required("SibSp is required").positive(),
    Parch: Yup.number().required("Parch is required").positive(),
    Fare: Yup.number().required("Fare is required").positive(),
    Embarked_S: Yup.number()
        .required("Embarked_S is required")
        .lessThan(2, "Either 0 or 1")
        .moreThan(-1, "Either 0 or 1"),
    Embarked_C: Yup.number()
        .required("Embarked_C is required")
        .lessThan(2, "Either 0 or 1")
        .moreThan(-1, "Either 0 or 1"),
    Embarked_Q: Yup
        .number()
        .required("Embarked_Q is required")
        .lessThan(2, "Either 0 or 1")
        .moreThan(-1, "Either 0 or 1"),
})

export default predictionInputSchema;