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

import DtTree from './dtTree';
import DtTreeSelect from './dtTreeSelect';

export interface IProps {
  // 标题
  title?: string;
  dataSource?: TreeProps['treeData'];
  // 是否展开
  collapsed?: boolean;
}

const CatalogueTree = (props: IProps) => {
  const prefixCls = 'dtc-catalogue-tree';
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className={`${prefixCls}`} style={{ background: '#eee', padding: 50 }}>
      <div style={{ maxWidth: 230, padding: 12, background: '#fff' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <QuestionCircleOutlined />
            {props.title}
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <PlusOutlined />
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
        </div>
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

CatalogueTree.Tree = DtTree;
CatalogueTree.TreeSelect = DtTreeSelect;

CatalogueTree.defaultProps = {
  title: '标签目录',
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

export default CatalogueTree;
