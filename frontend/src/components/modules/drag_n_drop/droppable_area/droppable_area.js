import React, { useState, useRef } from 'react';
import useDrop from '../hooks/useDrop';

export default (props) => {
    const {children, title, onDrop, classValue, stateName} = props;
    // const [droppableState, setDroppableState] = useState();


    const dropRef = useRef();
    const { dropState, droppedItem } = useDrop({
        ref: dropRef,
        onDrop
    });
    
    return (
        <div ref={dropRef} className={`droppable_area ${classValue}`}>
                <h1>{title}</h1>
                {children}
        </div>
    );
};


