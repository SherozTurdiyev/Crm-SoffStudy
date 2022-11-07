import { Backdrop } from "@mui/material";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Yanvar",
    uv: 100,
    pv: 111,
    amt: 2400
  },
  {
    name: "Fevral",
    uv: 120,
    pv: 142,
    amt: 2210
  },
  {
    name: "Mart",
    uv: 130,
    pv: 176,
    amt: 2290
  },
  {
    name: "Aprel",
    uv: 120,
    pv: 131,
    amt: 2000
  },
  {
    name: "May",
    uv: 1890,
    pv: 94,
    amt: 2181
  },
  {
    name: "Iyun",
    uv: 2390,
    pv: 131,
    amt: 2500
  }, 
  {
    name: "Iyul",
    uv: 2390,
    pv: 142,
    amt: 2500
  },
  {
    name: "Avgust",
    uv: 3490,
    pv: 207,
    amt: 2100
  },
  {
    name: "Sentyabr",
    uv: 3490,
    pv: 181,
    amt: 2100
  },
  {
    name: "Oktyabr",
    uv: 3490,
    pv: 152,
    amt: 2100
  },
  {
    name: "Noyabr",
    uv: 3490,
    pv: 111,
    amt: 2100
  },
  {
    name: "Dekabr",
    uv: 3490,
    pv: 161,
    amt: 2100
  }
];

export default function YillikStatistika() {
  return (
    <>
      <div>
        
    <div style={{display:"flex" , alignItems: "center" , justifyContent:"space-between" , width: '820px'  , marginLeft:"50px"}}>
    <h1>Yilik Satatistika</h1>
    <select style={{width: "150px" , textAlign: "center" , height: "30px"}} name="" id="">
        <option disabled selected>Yillik statistika</option>
        <option value="">2020</option>
        <option value="">2021</option>
        <option value="">2022</option>
    </select>
    </div>

    <BarChart
      width={900}
      height={380}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#5932EA" radius={20} />
    </BarChart>

      </div>
    </>
  );
}