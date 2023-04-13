import React, {useState} from "react";
import Chart from "react-apexcharts";
import { Statistic, Card } from "antd";


function DonutChart({streakArray}) {  
  return (
    <React.Fragment>
      <div className="container-fluid mt-3 mb-3">
        {/* <Statistic>
                    <title>Días perfectos</title>
                </Statistic> */}

        {/* <h2>DonutChart</h2> */}
        <Chart
          type="donut"
          width={500}
          height={500}
          series={[1, 1, 1, 1, 1, 1, 1]} //Distribucion de porcentajes

          options={{
            labels: [
              "Día 1",
              "Día 2",
              "Día 3",
              "Día 4",
              "Día 5",
              "Día 6",
              "Día 7",
            ],
            colors: [
              streakArray[0] ? "#efb810" : "#cccccc",
              streakArray[1] ? "#efb810" : "#cccccc",
              streakArray[2] ? "#efb810" : "#cccccc",
              streakArray[3] ? "#efb810" : "#cccccc",
              streakArray[4] ? "#efb810" : "#cccccc",
              streakArray[5] ? "#efb810" : "#cccccc",
              streakArray[6] ? "#efb810" : "#cccccc",
            ],
            // colors:[],
            title: {
              text: "Nutrisemana", //Titulo de la grafica
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true, //Parte de enmedio
                    total: {
                      show: true,
                    },
                  },
                },
              },
            },
            legend: {
              show: false,
            },
            dataLabels: {
              enabled: false,
            },
          }}
        />
      </div>
    </React.Fragment>
  );
}

export default DonutChart;