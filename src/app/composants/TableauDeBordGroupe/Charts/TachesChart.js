import React from "react";
import Chart from "react-apexcharts";

export default function TachesChart() {

  var options = {
    chart: {
      height: 280,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    series: [
      {
        name: "Series 1",
        data: [45, 52, 38, 45, 19, 23, 2],
      },
    ],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    xaxis: {
      categories: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan",
      ],
    },
  };

  var series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 39, 60, 91],
    },
  ];

  return (
    <div className="mixed-chart p-5">
      <Chart options={options} series={series} type="area" width="400" />
    </div>
  );
}
