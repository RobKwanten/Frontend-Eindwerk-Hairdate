import React from 'react'
import KappersForm from './KappersForm'
import {useSelector} from 'react-redux'

export default () => {
    const {loading, error, data} = useSelector(state => state.kapper)
    console.log(data);
    return(
        <>
            <KappersForm/>
            {loading && <p>Loading...</p>}
            {error !== "" && <p>{error}</p>}
            {data.length !== 0 && (
                <ul>
                    {data.map(kapper => (
                        <li key={kapper.id}>
                        {kapper.naam}
                        </li>
                ))}
                </ul>
            )}
        </>
    )
}