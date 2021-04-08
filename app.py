from flask import Flask, jsonify, request
import pandas as pd
import joblib
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

titanic = pd.read_csv("./data/titanic.csv")
titanic = titanic[["Survived", "Pclass", "Age", "SibSp", "Parch", "Fare", "Embarked"]]

data = []
for col in titanic.columns:
    xy = []
    titanic_dict = titanic[col].value_counts().to_dict()
    keys = list(titanic_dict.keys())
    values = list(titanic_dict.values())
    
    for index, key in enumerate(keys):
        xy.append({"x": key, "y": values[index]})
        
    data.append({ "name": col, "data": xy, "labels": keys})

model = joblib.load("./model_joblib")

@app.route('/distplot')
def chartData():
    return jsonify(data)

@app.route('/predict', methods=["POST"])
def predict():
    modelInput = dict(request.get_json(force=True))
    modelInputArray = list(modelInput.values())
    shapedInput = np.asarray(modelInputArray).reshape(1,-1)
    result = model.predict(shapedInput)
    result_int = int(result[0])
    return jsonify({ "predict": result_int })

if __name__ == "__main__":
    app.run()
