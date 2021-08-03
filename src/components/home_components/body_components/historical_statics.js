import { useState , useEffect} from 'react'
import Addhistoricalstatics from './add_historical_statics'
function Historicalstatics({url, country}) {

    const [historical_status, set_historical_status] = useState(false)
    useEffect(() => {
        const world_historical = async () => {
            const res  = await fetch(url + country)
            const data  = await res.json()
            set_historical_status(data)
        }
        world_historical()
    },[url, country])

    let datas = []
    let data_object = {}
    let data_list = []
    let sub_data = []


    if (historical_status){
        if(country ===  ''){
            datas = ['cases','recovered','deaths']
            data_object = historical_status.cases
            data_list = Object.keys(data_object)
            sub_data = data_list.slice(data_list.length-5)
            sub_data.reverse()
        }
        else{
            datas = ['cases','recovered','deaths']
            data_object = historical_status.timeline.cases
            data_list = Object.keys(data_object)
            sub_data = data_list.slice(data_list.length-5)
            sub_data.reverse()
        }
    }

    return (
        <div className="mt-5">     
            {sub_data.map((item, index)=> {
                return(
                    <div className="a_day mb-4" key={index}>
                        <h4>{item}</h4>
                        <div className="row">
                            {country === '' ? 
                                datas.map((data, index)=>{
                                    return(
                                    <Addhistoricalstatics key={index} data={data} data_value={historical_status[data][item]} class_name="col-md-4 my-3" />
                                    )
                                }) : 
                                datas.map((data, index)=>{
                                    return(
                                    <Addhistoricalstatics key={index} data={data} data_value={historical_status.timeline[data][item]} class_name="col-md-4 my-3" />
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Historicalstatics
