import React from 'react'
import {useSelector} from 'react-redux'

import Header from './../Base/Header'
import Kappers from '../Kappers/Kappers'
import KapperDetail from '../Kappers/KapperDetail'
import Agenda from './Agenda'
import OverzichtAfspraak from './OverzichtAfspraak'

export default () => {
    const {kapper,dienst,datum,beginuur} = useSelector(state => state.afspraak)

    return (
        <html>
            <body className="platbody">
                    <Header/>
                    <main className="platmain">
                        <div className="KappersForm Container">
                            <Kappers/>
                        </div>
                        <div className="KappersDetail Container">
                            {kapper.length!==0 && <KapperDetail kapper={kapper} />}
                        </div>
                        <div className="Agenda Container">
                            {dienst.length!==0 && <Agenda />}
                        </div>
                        <div className="AfspraakOverzicht Container">
                            {beginuur.length!==0 && <OverzichtAfspraak />}
                        </div> 
                    </main>   
                    <footer>
                        <nav>
                            <a href="#0" className="active">Nieuwe afspraak</a>
                            <a href="/mijnAfspraken">Mijn Afspraken</a>
                            <a href="/mijnGegevens">Mijn gegevens</a>
                        </nav>
                    </footer>
                </body>
        </html>  
    )
}