import React, { useContext, useState } from "react";

// Components
import { 
        Paper,
        Table, 
        TableBody, 
        TableCell, 
        TableContainer, 
        TableRow,  
        Button
    } from "@material-ui/core";
 
// Context Provider
import { Context as TitanicContext } from "./../Context/titanic";

const TablePage = () => {
    const { state } = useContext(TitanicContext);
    const [ length, setLength ] = useState(22);

    const printData = () => {
        let data = state.slice(0, length);
        let elements = data.map((data, index) => (
            <TableRow key={index}>
                <TableCell>{data[0]}</TableCell>
                <TableCell>{data[1]}</TableCell>
                <TableCell>{data[2]}</TableCell>
                <TableCell>{data[3]}</TableCell>
                <TableCell>{data[4]}</TableCell>
                <TableCell>{data[5]}</TableCell>
                <TableCell>{data[6]}</TableCell>
                <TableCell>{data[7]}</TableCell>
                <TableCell>{data[8]}</TableCell>
                <TableCell>{data[9]}</TableCell>
                <TableCell>{data[10]}</TableCell>
                <TableCell>{data[11]}</TableCell>
            </TableRow>
        ))

        return elements;
    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableBody>
                    {printData()}
                </TableBody>
            </Table>
            <div style={{ textAlign: "center", margin: "1rem auto" }}>
                <Button 
                    variant="contained" 
                    color="primary"
                    onClick={() => { setLength(length + 10) }}
                >
                    Load More
                </Button>
            </div>
        </TableContainer>
    );
}

export default TablePage;
