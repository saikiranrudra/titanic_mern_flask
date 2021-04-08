import React, { ReactElement } from "react";

// Components
import { 
    Dialog,
    DialogTitle,
    DialogContent
} from "@material-ui/core";

interface propType {
    open: boolean,
    handleClose: () => null,
    title: string,
    content: ReactElement
}

const ResultPopup = (props: propType) => {
    const { 
        open, 
        handleClose, 
        title,
        content
    } = props;
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>{content}</DialogContent>
        </Dialog>
    )
}

export default ResultPopup;