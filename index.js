import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Radar } from '@ant-design/plots';

const DemoRadar = () => {
  const data = [
    { name: '市场潜在规模', star: 75 },
    { name: '净收益', star: 75 },
    { name: '客户品质', star: 75 },
  ];

  const config = {
    data,
    xField: 'name',
    yField: 'star',
    meta: {
      star: {
        alias: '分数',
        min: 0,
        max: 100,
      },
    },
    xAxis: {
      line: null,
      tickLine: null,
      grid: {
        line: {
          style: {
            lineDash: null,
          },
        },
      },
    },
    yAxis: {
      grid: {
        alternateColor: 'rgba(0, 0, 0, 0.04)',
      },
    },
    // 开启辅助点
    point: {
      size: 2,
    },
    area: {},
    width: 600,
    height: 600,
  };

  return <Radar {...config} />;
};

ReactDOM.render(<DemoRadar />, document.getElementById('container'));
