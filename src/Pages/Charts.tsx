import React, { useEffect, useState } from "react";

// Components
import BarPlot from "./../Components/BarPlot";
import { Typography } from "@material-ui/core";

// Utils
import './../../node_modules/react-vis/dist/style.css';
import titanic from "./../Apis/titanic";

const Charts = () => {
    const [ distPlotData, setDistPlotData ] = useState<Array<any>>([]);

    const getDistPlotData = async () => {
        const response: any = await titanic.get("/distplot");
        setDistPlotData(response.data);
    }

    useEffect(() => {
        getDistPlotData();
    }, [])

    return (
        <>
            <div style={{ margin: "1rem" }}>
                <Typography variant="h3" component="h1" align="left">
                    Charts
                </Typography>
            </div>

            <div style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fill, 350px)",
                gap: ".5rem",
                placeContent: "center"
            }}>
                {distPlotData.map((obj, key) => {
                    return (
                        <BarPlot
                            key={key} 
                            name={obj.name} 
                            labels={obj.labels}
                            data={obj.data}
                        />
                    )
                })}
            </div>
        </>
    );
}

export default Charts;
