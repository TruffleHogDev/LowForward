import React from 'react';
import conceptImg from "../assets/images/conceptImg.png";
import AAPreview from "../assets/images/AAPreview.png";
import lowCommitPreview from "../assets/images/lowCommitPreview.png";
import defensePreview from "../assets/images/defensePreview.png";

const ConceptBanner = () => {
    return (
        <div> 
        <img className="w-4/6 lg:w-2/5 m-auto justify-center" src={conceptImg}></img>
        <h3>Refine your knowledge of fighting games.</h3>  

        <div className="grid grid-cols-3 place-items-center gap-1 p-2">  {/*Div for banner images */}
        <img class="w-32 md:w-60" src={defensePreview}></img>
        <img class="w-32 md:w-52" src={AAPreview}></img>
        <img class="w-32 md:w-60" src={lowCommitPreview}></img>
    
        </div>
        </div>
    )
}

export default ConceptBanner