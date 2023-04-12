import Streak from '../DashboardComponents/Streak'
import PerfectDays from '../DashboardComponents/PerfectDays'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

function Dashboard(){
    const [iniDate, setIniDate] = useState('');
    const [obj, setObj] = useState([]);
    const [perf, setPerf] = useState();
    const [points, setPoints] = useState();
    const [current, setCurrent] = useState();
    const [receivedData, setReceivedData] = useState(false);

    async function getDashboardData() {
        const response = await axios.post('http://localhost:3000/objectives/checkstreak', {
            user_id: '6436005c3c4616f372641688'
        })
        const { user: {initialStreakDay, perfectDays, nutriPoints, objectives}, currentDay} = response.data;
        setIniDate(initialStreakDay);
        setObj(objectives);
        setPerf(perfectDays);
        setPoints(nutriPoints);
        setCurrent(currentDay);
        setReceivedData(true);
    }

    useEffect(() => {
        getDashboardData();
    }, [])

    if (!receivedData) {
        return <div>Loading...</div>;
    }

    return <div>Dashboard
        <PerfectDays title="Días de racha" containerColor="black" valores={obj} streak={0} reload={getDashboardData}/>
        <Streak title="Toma al menos 2L de agua" buttonText="Listo!" containerColor="green" valores={obj} streak={0} reload={getDashboardData}/>
        <Streak title="Come al menos 500 calorias" buttonText="Listo!" containerColor="blue" valores={obj} streak={1} reload={getDashboardData}/>
        <Streak title="Haz al menos 20min de actividad física" buttonText="Listo!" containerColor="orange" valores={obj} streak={2} reload={getDashboardData}/>
    </div>
}

export default Dashboard;