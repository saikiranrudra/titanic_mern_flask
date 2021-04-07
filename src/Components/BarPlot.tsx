import React from "react";

// Components
import { Paper, Typography } from "@material-ui/core";
import { 
    XYPlot, 
    XAxis,
    YAxis,
    HorizontalGridLines,
    VerticalBarSeriesCanvas,
} from 'react-vis';

interface propType {
    labels: Array<any>,
    name: string,
    data: Array<any>
};

const BarPlot = (props: propType) => {
    const { name, data } = props;
    return (
        <Paper style={{ display: "inline-block", padding: "15px" }}>
            <XYPlot 
                height={330} 
                width={330} 
                xType="ordinal"
                color="#3f51b5"
            >
                <XAxis />
                <YAxis />
                <HorizontalGridLines />
                <VerticalBarSeriesCanvas 
                    data={data} 
                    
                    barWidth={0.5} 
                />
            </XYPlot>
            <Typography variant="h6" align="center" style={{ marginBottom: ".5rem", fontSize: ".9rem" }}>
                {name}
            </Typography>
        </Paper>
    );
}

export default BarPlot