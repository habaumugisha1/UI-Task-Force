import React, {useEffect, useState} from 'react'
import './style.css'
import profile from '../../assets/ami.png'
import Continent from '../Continent/Index.js';
import Skills from '../Skills';

function Index() {
const [countries, setCountries] = useState([]) 
const [country, setCountry] = useState({ 
"updated": 1629647472830,
"country": "Rwanda",
"countryInfo": {
    "_id": 646,
    "iso2": "RW",
    "iso3": "RWA",
    "lat": -2,
    "long": 30,
    "flag": "https://disease.sh/assets/img/flags/rw.png"
},
"cases": 82630,
"todayCases": 0,
"deaths": 1010,
"todayDeaths": 0,
"recovered": 45211,
"todayRecovered": 0,
"active": 36409,
"critical": 47,
"casesPerOneMillion": 6205,
"deathsPerOneMillion": 76,
"tests": 2301288,
"testsPerOneMillion": 172823,
"population": 13315905,
"continent": "Africa",
"oneCasePerPeople": 161,
"oneDeathPerPeople": 13184,
"oneTestPerPeople": 6,
"activePerOneMillion": 2734.25,
"recoveredPerOneMillion": 3395.26,
"criticalPerOneMillion": 3.53
}) 
const [countryImg, setCountryImg] = useState("https://www.gettysburgflag.com/media/catalog/product/cache/2/thumbnail/520x416/602f0fa2c1f0d1ba5e241f914e856ff9/2/0/2000px-flag_of_rwanda.svg.png")


const handleChange = async (event) =>{
    
    const res = await fetch(`https://corona.lmao.ninja/v2/countries/${event.target.value}?yesterday&strict`)
    const json = await res.json()

    setCountryImg(json.countryInfo.flag);
    setCountry(json)
}

useEffect( ()=> {
    async function fetchData(){

        const res = await fetch('https://corona.lmao.ninja/v2/countries?yesterday&sort')
        const json = await res.json()
        setCountries(json)
    }
    fetchData()
},[])

const options = countries.map(data =>(
    <option key={data.countryInfo._id} value={data.country}>{data.country}</option>
    ))
    return (
        <div>
            <section className="updates">
               <div className="headers">
                <h3>covicalc</h3>
                <button>contancts</button>
               </div>
               <div className="homecontent">
                <h1>updates</h1>
                <span>search a country</span>
                <div className="inputs">
                        <div className="countryImg"> <img src={countryImg} alt="flag"/> </div>
                        <select onChange={handleChange}>
                        <option value="rwanda">Rwanda</option>
                        {options}
                            
                        </select>
                        
                        <input type="date" value="2021-08-21"/>
                        <button>submit</button>
                </div>
                <div className="results">
                    <div className="results-number">
                        <h4>{country.population}</h4>
                        <p>Cumulatively</p>
                    </div>
                    <div className="details">
                        <div className="detail-card">
                            <h5>{country.cases}</h5>
                            <p>Tests</p>
                            <h7>{country.tests}</h7>
                        </div>
                        <div className="detail-card">
                            <h5>{country.todayCases}</h5>
                            <p>cases</p>
                            <h7>{country.cases}</h7>
                        </div>
                        <div className="detail-card">
                            <h5>{country.criticalPerOneMillion}</h5>
                            <p>Hospitalized</p>
                            <h7>{country.critical}</h7>
                        </div>
                        <div className="detail-card">
                            <h5>{country.todayRecovered}</h5>
                            <p>Recovered</p>
                            <h7>{country.recovered}</h7>
                        </div>
                        <div className="detail-card">
                            <h5>{country.todayDeaths}</h5>
                            <p>Deaths</p>
                            <h7>{country.deaths}</h7>
                        </div>
                    </div>
                </div>
               </div>
            </section>
            <section className="continents">
                <h2>For continents</h2>
                <div className="left-circle"><p>&#8592;</p></div>
                
                <Continent />
                <div className="right-circle"><p>&#8594;</p></div>
            </section>
            <section className="my-skills">
                <div className="images"> <img src={profile} alt="profile"/> </div>
                <Skills />
            </section>
            <section className="contact">
                <h1>REACH ME</h1>
                <div>
                    <span>Email</span><br></br>
                    <p>habajeunes2@gmail.com</p>
                </div>
                <div>
                    <span>Phone</span><br></br>
                    <p>+250784696314/+250722635969</p>
                </div>
                <div>
                    <span>Profile</span><br></br>
                    <p>www.ami-portfolio.netlify.app</p>
                </div>
            </section>
            <section className="footer">
                <div className="name">Developed by <b>HABUMUGISHA Ami des jeunes</b></div>
                <div className="lab">Designed by <b>awasomity Lab</b></div>
            </section>
        </div>
    )
}

export default Index
