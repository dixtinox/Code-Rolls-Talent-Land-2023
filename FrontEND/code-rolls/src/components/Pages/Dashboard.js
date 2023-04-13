import Streak from '../DashboardComponents/Streak'
import PerfectDays from '../DashboardComponents/PerfectDays'
import DonutChart from '../DashboardComponents/DonutChart'
import NutriPoints from '../DashboardComponents/NutriPoints'
import { useEffect, useState } from 'react'
import { Card, Space } from 'antd';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

function Dashboard(){
    const [iniDate, setIniDate] = useState('');
    const [obj, setObj] = useState([]);
    const [perf, setPerf] = useState();
    const [points, setPoints] = useState();
    const [current, setCurrent] = useState();
    const [receivedData, setReceivedData] = useState(false);
    const [streakArray, setStreakArray] = useState([]);

    const [animando1, setAnimando1] = useState(false);
    const [animando2, setAnimando2] = useState(false);

    async function getDashboardData() {
        

        const response = await axios.post('http://localhost:3000/objectives/checkstreak', {
            user_id: '6436434ec1c5ad4d6023a8c0'
        })
        const { user: {initialStreakDay, perfectDays, nutriPoints, objectives}, currentDay} = response.data;
        setIniDate(initialStreakDay);
        setObj(objectives);
        setPerf(perfectDays);
        setPoints(nutriPoints);
        setCurrent(currentDay);
        setReceivedData(true);
        const perArr = [];
        objectives.map(dia => {
            if(Object.values(dia)[0]&&Object.values(dia)[1]&&Object.values(dia)[2]){
                perArr.push(true);
            } else {
                perArr.push(false);
            }
        })

        setStreakArray(perArr);
    }

    useEffect(() => {
        getDashboardData();
    }, [])

    useEffect(()=> {
        setAnimando1(true);
        
        setTimeout(() => {
          setAnimando1(false);
        }, 1000);
    }, [points])

    useEffect(()=> {
        setAnimando2(true);
        
        setTimeout(() => {
          setAnimando2(false);
        }, 1000);
    }, [perf])

    if (!receivedData) {
        return <div>Loading...</div>;
    }

    return <div className='d-flex p-5'>
        <Card>
            <PerfectDays title="Días de racha" containerColor="darkslateblue" valores={obj} streak={0} reload={getDashboardData}/>
            <Streak title="Toma al menos 2L de agua" buttonText="Listo!" containerColor="silver" valores={obj} streak={0} reload={getDashboardData}/>
            <Streak title="Come al menos 500 calorias" buttonText="Listo!" containerColor="silver" valores={obj} streak={1} reload={getDashboardData}/>
            <Streak title="Haz al menos 20min de actividad física" buttonText="Listo!" containerColor="silver" valores={obj} streak={2} reload={getDashboardData} />
        </Card>
        <Card>
            <NutriPoints title={["NutriPoints", "Días de racha"]} containerColor="silver" points={points} perfectDays={perf} animar={[animando1, animando2]}/>
            <DonutChart streakArray={streakArray}/>
        </Card>
    </div>
}

export default Dashboard;