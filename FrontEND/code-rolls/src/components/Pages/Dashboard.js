import Streak from '../DashboardComponents/Streak'
import 'bootstrap/dist/css/bootstrap.css';

function Dashboard(){
    return <div>Dashboard
        <Streak title="Toma al menos 2L de agua" buttonText="Listo!" containerColor="green"/>
        <Streak title="Come al menos 500 calorias" buttonText="Listo!" containerColor="blue"/>
        <Streak title="Haz al menos 20min de actividad física" buttonText="Listo!" containerColor="orange"/>
    </div>
}

export default Dashboard;