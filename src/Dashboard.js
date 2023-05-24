import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
  const [items, setItems] = useState([
    {
      image: require('./images/s1.png'),
      title: 'Transform',
      unique_plays: 20,
      total_plays: 100,
      completion_rate: 75,
      showChart: false,
    },
    {
      image: require('./images/s2.png'),
      title: 'Guided Meditation Lightsleep',
      unique_plays: 15,
      total_plays: 160,
      completion_rate: 60,
      showChart: false,
    },
    {
      image: require('./images/s3.png'),
      title: '10 minutes Deep Relaxation',
      unique_plays: 25,
      total_plays: 253,
      completion_rate: 80,
      showChart: false,
    },
    {
      image: require('./images/s4.png'),
      title: 'Guided Talkdown to Blissful Sleep (Explicit)',
      unique_plays: 20,
      total_plays: 400,
      completion_rate: 75,
      showChart: false,
    },
    {
      image: require('./images/s5.png'),
      title: '5 Minute Guided Sleep Meditation',
      unique_plays: 40,
      total_plays: 300,
      completion_rate: 75,
      showChart: false,
    },
  ]);

  const handleShowChart = (index) => {
    const updatedItems = [...items];
    updatedItems[index].showChart = !updatedItems[index].showChart;
    setItems(updatedItems);
  };

  return (
    <div className="dashboard">
      {items.map((item, index) => (
        <div key={index} className="item">
          <img src={item.image} alt="Sound Thumbnail" className="thumbnail" />
          <h3>{item.title}</h3>
          <div className="graph">
            <span>Unique Plays: {item.unique_plays}</span>
            <span>Total Plays: {item.total_plays}</span>
            {item.showChart && (
              <BarChart width={300} height={200} data={[item]} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="title" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="unique_plays" fill="#8884d8" />
                <Bar dataKey="total_plays" fill="#82ca9d" />
              </BarChart>
            )}
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${item.completion_rate}%` }}></div>
            <span>{item.completion_rate}%</span>
          </div>
          <button onClick={() => handleShowChart(index)}>
            {item.showChart ? 'Hide Chart' : 'Show Chart'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
