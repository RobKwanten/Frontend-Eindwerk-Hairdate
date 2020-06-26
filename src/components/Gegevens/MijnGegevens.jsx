import React from 'react'

import Header from './../Base/Header'
import GegevensForm from './GegevensForm'

export default () => {
    return(
        <html>
            <body className="platbody">
                <Header/>
                <main className="gegevensMain platmain">
                    <GegevensForm/>
                </main>  
                <footer>
                     <nav>
                        <a href="/afspraak">Nieuwe afspraak</a>
                        <a href="/mijnAfspraken">Mijn Afspraken</a>
                        <a href="#0" className="active">Mijn gegevens</a>
                    </nav>
                </footer>    
            </body>
        </html>
    )
}