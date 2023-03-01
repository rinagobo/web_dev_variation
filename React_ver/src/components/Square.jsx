import React, {useState} from "react";

function Square(props) {

    var [isMouseInside, setState] = useState(false)

    console.log(isMouseInside);

    return(
        <div className="square" onMouseEnter={() => setState(true)} onMouseLeave={() => setState(false)}>
            { isMouseInside ? null : <img className={props.imgClassName} src={props.imgSrc}/>}
            { isMouseInside ?  <button type="submit" className="btn btn-info" name="details" value={props.btnValue} id="details">Details</button> : null}
        </div>
    )
}

export default Square;