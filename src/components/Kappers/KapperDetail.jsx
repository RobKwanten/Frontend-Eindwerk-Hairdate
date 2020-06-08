import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {setAfspraakKapper} from '../../data/afspraak'
 

export default () => {
    const dispatch= useDispatch();

    const [dienst, setDienst]= useState("");
    const kapper = useSelector(state=>state.afspraak.kapper)
    console.log(dienst)
    return(
        <>
        <p>Naam: {kapper.naam}</p>
        <ul>
            {kapper.dienstenKappers.map(dienst => (
                 <li key={dienst.duur}>{dienst.Diensten.naam}<a href="#" onClick={()=>{
                     setDienst(dienst)
                    }}>Kies dienst</a></li> 
                 
            ))}
        </ul>
        </>
    )
}