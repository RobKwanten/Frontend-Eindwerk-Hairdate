import React from 'react'
import {useSelector} from 'react-redux'
import '../../plat.css'

import Kappers from '../Kappers/Kappers'
import KapperDetail from '../Kappers/KapperDetail'
import Agenda from './Agenda'
import OverzichtAfspraak from './OverzichtAfspraak'

export default () => {
    const {kapper,dienst,datum,beginuur} = useSelector(state => state.afspraak)
    console.log(kapper,dienst,datum,beginuur)

    return (
        <html>
            <body>
                    <header>
                        <div className="header">
                            <h1>Hairdate</h1>
                            <p>Welkom Rob</p>
                        </div>
                    </header>
                    <main>
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
                            <a href="#0">Mijn Afspraken</a>
                            <a href="#0">Mijn gegevens</a>
                        </nav>
                    </footer>
                </body>
        </html>  
    )
}