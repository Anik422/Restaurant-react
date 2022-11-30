import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/fontawesome-free-solid'



const Loading = () =>{
    return(
        <div className="col-12" style={{padding: '60px'}}>
            <FontAwesomeIcon icon="fa-solid fa-spinner" />
        </div>
    )
}

export default Loading; 