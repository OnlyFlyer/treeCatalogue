import * as React from 'react';
import { useState } from 'react';
import {
  QuestionCircleOutlined,
  UpOutlined,
  PlusOutlined,
  SmileOutlined,
  MehOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import { Tooltip, Tree, Input } from 'antd';
import type { TreeProps } from 'antd';

import { Header, Search } from './components';

export interface IProps extends TreeProps {
  /** 是否展示头部组件 */
  showHeader?: boolean;
  treeTit?: React.ReactNode;
}

const DtTree = (props: IProps) => {
  const { showHeader, treeTit } = props;
  const prefixCls = 'dtc-catalogue-tree';
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className={`${prefixCls}`} style={{ background: '#eee', padding: 50 }}>
      <div style={{ maxWidth: 230, padding: 12, background: '#fff' }}>
        {showHeader ? <Header title={treeTit} collapsed={collapsed} /> : null}
        <Input.Search placeholder="搜索任务名称" />
        <Tree
          treeData={props.dataSource}
          style={{ marginTop: 8 }}
          // switcherIcon={1}
          showIcon
          height={200}
        />
      </div>
    </div>
  );
};

DtTree.defaultProps = {
  showHeader: true,
  treeTit: '标签目录',
  collapsed: true,
  dataSource: [
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
  ],
};

export default DtTree;
