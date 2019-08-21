import React, { useState } from 'react';
import DroppableArea from '../../modules/drag_n_drop/droppable_area/droppable_area';
import DraggableItem from '../../modules/drag_n_drop/draggable_item/draggable_item';

import './style.css';

const areas = {
    head: 0,
    tail: 3,
    0: {
        id: 0,
        title: "Applications",
        type: "main",
        state: "apps",
    },
    1: {
        id: 1,
        title: "Foundations",
        type: "side",
        state: "foundations",
    },
    2: {
        id: 2,
        title: "Coaches",
        type: "side",
        state: "staff",
    },
    3: {
        id: 3,
        title: "Something",
        type: "something",
        state: "area",
    },
    
};



const panels = {
    1: {
        id: 1,
        title: "panel 1",
        state: "apps",
    },
    2: {
        id: 2,
        title: "panel 2",
        state: "something",
    },
}







// const createLinkedList = (panels) => {
//     if (panels.head === null) return [];

//     const linkedList = [];
//     let current = panels.head;

//     while(current !== null) {
//         linkedList.push(current);
//         let nextId = current.next;
//         current = nextId ? panels[nextId] : null;
//     }

//     return linkedList;
// }


const HomeView = () => {
    const [statePanels, setPanels] = useState(panels);


    

    // function dragstart_handler(ev) {
    //     ev.dataTransfer.setData("source", ev.target.id);
    //     ev.dataTransfer.dropEffect = "move";
    //     // e.dataTransfer.setData("text/html", e.target.outerHTML);
    //     // e.dataTransfer.setData("text/uri-list", e.target.ownerDocument.location.href);
    //     console.log(ev.target.innerText);
    //     console.log(ev.dataTransfer.getData("source"));
        
    // }


    // function dragover_handler(ev) {
    //     ev.preventDefault();
    //     ev.dataTransfer.dropEffect = "move";

    // }

    function drop_handler(id, newState) {
        const currentPanel = { ...statePanels[id] };
        currentPanel.state = newState;
        setPanels({ ...statePanels, ...{ [id]: currentPanel } });
    }

    console.log(statePanels);
    return (
        <section className="dashboard_home">
            <div className="dashboard_home-main">

                <DroppableArea 
                    title="Applications" 
                    onDrop={(id) => drop_handler(id, "apps")}>

                    { Object.values(panels)
                            .filter(panel => panel.state === "apps")
                            .map(panel => (
                                <DraggableItem id={panel.id} data={panel.title} key={panel.id} />
                    ))}
                </DroppableArea>

                <DroppableArea 
                    title="Something" 
                    onDrop={(id) => drop_handler(id, "something")}>
                        
                    {Object.values(panels)
                            .filter(panel => panel.state === "something")
                            .map(panel => (
                                <DraggableItem id={panel.id} data={panel.title} key={panel.id} />
                            ))}
                </DroppableArea>

            </div>
        </section>
    )
}



export default HomeView;