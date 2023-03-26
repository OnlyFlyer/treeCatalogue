import * as React from 'react';
import { useState } from 'react';
import { Space, Divider } from 'antd';
import { render } from 'react-dom';

import {
  QuestionCircleOutlined,
  UpOutlined,
  PlusOutlined,
  SmileOutlined,
  MehOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

import Catalogue from './catalogue';
import './style.scss';

export const treeData = [
  {
    key: '1',
    title: '1',
    icon: <SmileOutlined />,
    children: [
      {
        key: '1.1',
        title: '1.1',
        icon: <SmileOutlined />,
        children: [
          {
            key: '1.1.1',
            title: '1.1.1',
            icon: <MehOutlined />,
          },
          {
            key: '1.1.2',
            title: '1.1.2',
            icon: <MehOutlined />,
          },
          {
            key: '1.1.3',
            title: '1.1.3',
            icon: <MehOutlined />,
          },
          {
            key: '1.1.4',
            title: '1.1.4',
            icon: <MehOutlined />,
          },
          {
            key: '1.1.5',
            title: '1.1.5',
            icon: <MehOutlined />,
          },
          {
            key: '1.1.6',
            title: '1.1.6',
            icon: <MehOutlined />,
          },
        ],
      },
      {
        key: '1.2',
        title: '1.2',
        icon: <SmileOutlined />,
        children: [
          {
            key: '1.2.1',
            title: '1.2.1',
            icon: <MehOutlined />,
          },
        ],
      },
    ],
  },
  {
    key: '2',
    title: '2',
    icon: <SmileOutlined />,
    children: [
      {
        key: '2.1',
        icon: <SmileOutlined />,
        title: '2.1',
        children: [
          {
            key: '2.1.1',
            title: '2.1.1',
            icon: <MehOutlined />,
          },
          {
            key: '2.1.2',
            title: '2.1.2',
            icon: <MehOutlined />,
          },
        ],
      },
      {
        key: '2.2',
        title: '2.2',
        icon: <SmileOutlined />,
        children: [
          {
            key: '2.2.1',
            title: '2.2.1',
            icon: <MehOutlined />,
          },
          {
            key: '2.2.2',
            title: '2.2.2',
            icon: <MehOutlined />,
          },
          {
            key: '2.2.3',
            title: '2.2.3',
            icon: <MehOutlined />,
          },
          {
            key: '2.2.4',
            title: '2.2.4',
            icon: <MehOutlined />,
          },
          {
            key: '2.2.5',
            title: '2.2.5',
            icon: <MehOutlined />,
          },
          {
            key: '2.2.6',
            title: '2.2.6',
            icon: <MehOutlined />,
          },
          {
            key: '2.2.7',
            title: '2.2.7',
            icon: <MehOutlined />,
          },
        ],
      },
    ],
  },
  {
    key: '3',
    title: '3',
    icon: <SmileOutlined />,
    children: [
      {
        key: '3.1',
        title: '3.1',
        icon: <SmileOutlined />,
        children: [
          {
            key: '3.1.1',
            title: '3.1.1',
            icon: <MehOutlined />,
          },
          {
            key: '3.1.2',
            title: '3.1.2',
            icon: <MehOutlined />,
          },
        ],
      },
      {
        key: '3.2',
        title: '3.2',
        icon: <SmileOutlined />,
        children: [
          {
            key: '3.2.1',
            title: '3.2.1',
            icon: <MehOutlined />,
          },
        ],
      },
    ],
  },
  {
    key: '4',
    title: '4',
    icon: <SmileOutlined />,
    children: [
      {
        key: '4.1',
        title: '4.1',
        icon: <SmileOutlined />,
        children: [
          {
            key: '4.1.1',
            title: '4.1.1',
            icon: <MehOutlined />,
          },
          {
            key: '4.1.2',
            title: '4.1.2',
            icon: <MehOutlined />,
          },
        ],
      },
      {
        key: '4.2',
        title: '4.2',
        icon: <SmileOutlined />,
        children: [
          {
            key: '4.2.1',
            title: '4.2.1',
            icon: <MehOutlined />,
          },
        ],
      },
    ],
  },
];

const App = () => {
  const [data, setData] = useState(treeData);
  return (
    <div style={{ background: '#eee', padding: 20 }}>
      <Catalogue.Tree
        treeData={data}
        showHeader
        draggable
        onSearch={(v, e, data) => {
          console.log(v, '--v');
          console.log(e, '--e');
          console.log(data, '--data');
          setData(data);
        }}
      />
      <Divider />
      <Catalogue.Tree treeData={data} showHeader={false} />
      <Divider />
      <Catalogue.TreeSelect treeData={data} style={{ width: 200 }} />
    </div>
  );
};

render(<App />, document.getElementById('root'));
