import express, { Application, NextFunction, Request, response, Response } from "express";
import Papa from "papaparse";
import fs from "fs";
import path from "path";
import cors from "cors";
import axios from "axios";

// Constants
const PORT = process.env.PORT || 8888;
const FLASK_URL = process.env.MODEL_URL || "http://127.0.0.1:5000";

// Initilizing server
const app: Application = express();

// reading titanic csv file
const filePath = path.join(__dirname, "data", "titanic.csv");
const file = fs.readFileSync(filePath, 'utf8');

// Middlewares
app.use(express.json());
app.use(cors())

// Starting server
app.listen(PORT, () => console.log(`App is listening to port ${PORT}...`));

// Routes
app.get('/tableData', (req: Request, res: Response, next: NextFunction) => {
   Papa.parse(file, {
       worker: false,
       complete: (results, file) => {
           res.json(results);
       }
   });
})

app.get('/distplot', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await axios.get(`${FLASK_URL}/distplot`)
        res.json(response.data);
    } catch(err) {
        console.log("DIST_PLOT_DATA_ERROR: ", err);
        res.status(500).json({
            status: "FAILURE",
            data: err
        })
    }
})

app.post('/predict', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await axios.post(`${FLASK_URL}/predict`, req.body.input);
        const result = response.data;
        res.json(result)
    } catch(err) {
        console.log("MODEL_PREDICTION_ERROR: ", err);
        res.status(500).json({
            status: "FAILURE",
            error: err
        })
    }
})