import { useState , useEffect} from 'react'
import Addworldstatics from './add_world_statics'
import Addhistoricalstatics from './add_historical_statics'
import Historicalstatics from './historical_statics'
import Button from './button'
import GlobalstaticsBar from './globalbar_chart'

function Worldstatics() {
    const [showcontent , set_showcontent] = useState(false)
    const [world_status, set_world_status] = useState({})
    useEffect( () =>{
        const world_statics = async () => {
            const data = await get_worlds_data()
            set_world_status(data)
        }
        world_statics()
    },[])

    const get_worlds_data = async () =>{
        const res  = await fetch("https://disease.sh/v3/covid-19/all")
        const data  = await res.json()
        return data
    }

    const global_datas_key = ['cases','tests','recovered','deaths']
    const chart_values = [parseInt(world_status.cases),parseInt(world_status.tests),
    parseInt(world_status.recovered),parseInt(world_status.deaths)]
    const todays_datas_key = ['todayCases','todayRecovered','todayDeaths']
    return (
        <div className="global_data py-4">
            <div className="global_status">
                <div className="row">
                    {global_datas_key.map( (data,index) => {
                        return(
                        <Addworldstatics key={index} data={data} data_value={world_status[data]} />
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
                                <Addhistoricalstatics key={index} data={data} data_value={world_status[data]} class_name="col-md-4 my-3" />
                                )
                            })}
                        </div>
                    </div>
                    <div className="last_days text-center my-4">
                        <h3>Last five days ago</h3>
                        <Historicalstatics url={'https://disease.sh/v3/covid-19/historical/all'} country={''} />
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

export default Worldstatics