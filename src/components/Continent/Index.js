import React, {useEffect, useState} from 'react'
import '../LandingPage/style.css'
function Index() {
    const [continent, setContinent] = useState([])

    // fetch the continents by using useEffect hook
    useEffect(()=> {
        async function fetchData(){
        const res = await fetch('https://corona.lmao.ninja/v2/continents?yesterday&sort')
        const json = await res.json()
        setContinent(json)
        }
        fetchData()
    },[])
    return (
        <div className="continent-card">
        
        {continent.map( data=> (
            <div className="card">
                <div className="left">
                    <h1>{data.continent}</h1>
                    <div className="cases">
                        <h2>{data.todayCases}</h2>
                        <h3>New cases</h3>
                    </div>
                    <span>All cases: {data.cases}</span>
                </div>
                <div className="right">
                    <div>
                        <h6>{data.todayDeaths}</h6>
                        <p>New Deaths</p>
                        <span>total Deaths {data.deaths}</span>
                    </div>
                    <div>
                        <h6>{data.todayRecovered}</h6>
                        <p>New Recovery</p>
                        <span>total Recovery {data.recovered}</span>
                    </div>
                    <div>
                        <h6>{data.active}</h6>
                        <p>New Vacineted</p>
                        <span>total Vacineted {data.updated}</span>
                    </div>
                </div>
            </div>
    ))}             
                    
    </div>
    )
}

export default Index
