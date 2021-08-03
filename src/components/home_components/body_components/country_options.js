import { useState , useEffect} from 'react'

function Countryoptions({current_ctry , set_ctry}) {
    const [countries , set_countries] = useState([])

    useEffect( () =>{
        const countries_name = async () => {
            const data = await get_countries_names()
            let countries = []
            data.forEach(country_obj => {
                const info = {
                    name : country_obj.country,
                    flag : country_obj.countryInfo.flag,
                    continent : country_obj.continent
                }
                countries.push(info)
            });
            set_countries(countries)
            console.log(countries)
        }
        countries_name()
    },[])

    const get_countries_names = async () =>{
        const res  = await fetch("https://disease.sh/v3/covid-19/countries")
        const data  = await res.json()
        return data
    }

    const change_country = (event) =>{
        set_ctry(event.target.value)
    }

    let country_info = {}
    countries.forEach((country) => {
        if(current_ctry === country.name){
            country_info = country
        }
    })

    return (
        <>
            <div className="country_info">
                <div className="row text-center">
                    <div className="col-md-6 my-2">
                        <h4 className="pb-3">country</h4>
                        <select value={current_ctry} onChange={change_country}>
                            {countries.map((country, index) =>{
                                return <option key={index} value={country.name}>{country.name}</option>
                            })}
                        </select>
                        <h5 className="pt-4 pb-3" >Continent</h5>
                        <p>{country_info.continent}</p>
                    </div>
                    <div className="col-md-6 my-2">
                        <h5>Flag</h5>
                        <img src={country_info.flag} height="150px" width="300px" alt=""></img>
                    </div>
                </div>
            </div>     
        </>
    )
}

export default Countryoptions
