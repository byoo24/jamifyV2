import React, { useState, useRef } from "react";
import useDrag from "../hooks/useDrag";

export default ({ id, dragEffect, data }) => {
    const dragRef = useRef();
    const [classValue, setClassValue] = useState("grab");
    const { dragState } = useDrag({
        id,
        effect: dragEffect,
        ref: dragRef,
        onDragStart: () => setClassValue("grabbing"),
        onDragEnd: () => {
            setClassValue("grab");
        }
    });

    return (
        <div ref={dragRef} className={classValue}>
            {data}
        </div>
    );
}


