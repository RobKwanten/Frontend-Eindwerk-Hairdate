import React from 'react'
import { useDispatch , useSelector } from 'react-redux'

import {getMijnAfspraken} from '../../data/afspraak'

import Header from './../Base/Header'
import Overzicht from './Overzicht'
import ZoekAfspraken from './ZoekAfspraken'
import AfsprakenResult from './AfsprakenResult'

export default () => {
    const dispatch = useDispatch() 
    const {mijnAfspraken,afspraakDetail} = useSelector(state => state.afspraak)
    
    return(
        <html>
            <body className="platbody">
                <Header/>
                <main className="mijnAfsprakenMain platmain">
                    <div className="MijnAfspraken Container">
                        <ZoekAfspraken/>
                        {mijnAfspraken.length!==0 && <AfsprakenResult afspraken={mijnAfspraken} />}
                    </div>   
                    <div className="AfspraakOverzichtContainer Container">
                        {afspraakDetail.length!==0 && <Overzicht/>}
                    </div>         
                </main>   
                <footer>
                     <nav>
                        <a href="/afspraak">Nieuwe afspraak</a>
                        <a href="#0" className="active">Mijn Afspraken</a>
                        <a href="/mijnGegevens">Mijn gegevens</a>
                    </nav>
                </footer>
            </body>
        </html>  
    )
}