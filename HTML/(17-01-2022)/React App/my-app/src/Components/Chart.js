import ChartBar from './ChartBar';
import './Chart.css';

const chart = (props) =>{

    return <div className='chart'>

        

        {props.dataPoints.map(dataPoint => <ChartBar
        key = {dataPoint.label}
        value = {dataPoint.value} 
        maxValue = {null}
        label = {dataPoint.label}/>)}


    </div>

};

export default chart;