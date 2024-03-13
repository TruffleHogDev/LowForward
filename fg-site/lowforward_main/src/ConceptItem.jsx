import React from 'react'
import conceptImg from "../src/assets/images/conceptImg.png";
import AAPreview from "../src/assets/images/AAPreview.png";
import lowCommitPreview from "../src/assets/images/lowCommitPreview.png";
import defensePreview from "../src/assets/images/defensePreview.png";


const ConceptItem = ({tag, title, details}) => {
    return (
        
        <div className="container">
        <img className="w-4/6 lg:w-2/5 m-auto justify-center" src={conceptImg}></img>
        <h3>Refine your knowledge of fighting games.</h3>  

        <div className="grid grid-cols-3 place-items-center gap-1 p-2">
        <img class="w-32 md:w-60" src={defensePreview}></img>
        <img class="w-32 md:w-52" src={AAPreview}></img>
        <img class="w-32 md:w-60" src={lowCommitPreview}></img>

            </div> {/*Div for banner images */}
        </div>
    )
}

export default ConceptItem;