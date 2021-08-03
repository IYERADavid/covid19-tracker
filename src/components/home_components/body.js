import Worldstatics from './body_components/world_statics'
import Countrystatics from './body_components/country_statics'

function Body() {
    return (
        <div className="container my-5 py-4 main_div">
            <h2 className="text-center">COVID 19 (DELTA) PANDEMIC STATISTICS</h2>
            <div className="world_statistics py-5">
                <h3 className="text-center">World Status</h3> 
                <Worldstatics/>
            </div>
            <div className="countries_statisticis">
                <h3 className="text-center">Countries Status</h3>
                <Countrystatics/>
            </div>
        </div>
    )
}

export default Body
