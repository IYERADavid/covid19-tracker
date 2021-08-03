import { useState , useEffect} from 'react'
import Countryoptions from './country_options'
import Addworldstatics from './add_world_statics'
import Addhistoricalstatics from './add_historical_statics'
import Historicalstatics from './historical_statics'
import Button from './button'
import GlobalstaticsBar from './globalbar_chart'

function Countrystatics() {
    const [showcontent , set_showcontent] = useState(false)
    const [country, set_country] = useState("Rwanda")
    const [country_status, set_country_status] = useState({})

    useEffect( () =>{
        const country_statics = async () => {
            const res  = await fetch("https://disease.sh/v3/covid-19/countries/" + country)
            const data  = await res.json()
            console.log(data)
            set_country_status(data)
        }
        country_statics()
    }, [country])

    const country_datas_key = ['cases','tests','recovered','deaths']
    const chart_values = [parseInt(country_status.cases),parseInt(country_status.tests),
        parseInt(country_status.recovered),parseInt(country_status.deaths)] 
    const todays_datas_key = ['todayCases','todayRecovered','todayDeaths']
    return (
        <div className="country_data py-4">
            <div className="country-options py-3">
                <Countryoptions current_ctry={country} set_ctry={set_country} />
            </div>
            <div className="country_status">
                <div className="row">
                    {country_datas_key.map( (data,index) => {
                        return(
                        <Addworldstatics key={index} data={data} data_value={country_status[data]} />
                        )
                    })}
                </div>
            </div>
            <div className="global_chart py-5">
                <GlobalstaticsBar data={chart_values}/>
            </div>
            {showcontent && 
                <div className="last_days_info pb-5">
                    <div className="today_statics">
                        <div className="row">
                            {todays_datas_key.map((data, index) => {
                                return(
                                <Addhistoricalstatics key={index} data={data} data_value={country_status[data]} class_name="col-md-4 my-3" />
                                )
                            })}
                        </div>
                    </div>
                    <div className="last_days text-center my-4">
                        <h3>Last five days ago</h3>
                        <Historicalstatics url={'https://disease.sh/v3/covid-19/historical/'} country={country} />
                    </div> 
                </div>
            }
            <div className="button text-center">
                <Button onview={() => {set_showcontent(!showcontent)}}
                text={showcontent? 'Hide': 'More'} />
            </div>
        </div>
    )
}

export default Countrystatics
