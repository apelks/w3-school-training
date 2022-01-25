import React from "react";

const DemoOutput = (props) =>{
    console.log("demo app running ")
    return <p>{props.show ? "this is Here": ''}</p>

}

export default React.memo(DemoOutput);
