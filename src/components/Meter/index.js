import {Component} from "react" 
import "./index.css"
class Meter extends Component{
    state = {speed : 0}
    // Accelerate
    onAccelerate = () => {
        const {speed} = this.state
        if(speed < 200){
            this.setState((prevState)=>({
                speed : prevState.speed + 10
            }))
        }
    }
    // Break
    onApplyBreak = ()=>{
        const {speed} = this.state

        if(speed > 0){
            this.setState((prevState)=>({
                speed :prevState.speed - 10
            }))
        }
    }

    render(){
        const {speed} = this.state
        return(
            <div className="bg-con">
                <h1>SPPEDOMETER</h1>
                <img src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"  alt="speedometer"/>
                <p>Speed is <span>{speed} </span>mph</p>
                <p>Min limit is 0 mph, mxm limit is 200mph</p>
                <div>
                    <button onClick={this.onAccelerate}>Accelerate</button>
                    <button onClick={this.onApplyBreak}>Apply Break</button>
                </div>
            </div>
        )
    }
}

export default Meter