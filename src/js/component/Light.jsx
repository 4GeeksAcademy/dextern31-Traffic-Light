import React, { useState} from 'react';

const Light = () => {
    const [selectedColor, setSelectedColor] = useState("red");
    function glow(color) {
        if(selectedColor === color){
            return " glow";
        } else {
            return "";
        }
    }
    return(
        <>
            <div onClick={() => setSelectedColor("red")} className={"light red" + glow("red")}></div>
		    <div onClick={() => setSelectedColor("yellow")} className={"light yellow" + glow("yellow")}></div>
		    <div onClick={() => setSelectedColor("green")} className={"light green" + glow("green")}></div>
        </>
        );
    
};

export default Light;
