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
import { filterData } from './helpers';
import './style.scss';

export const prefixCls = 'dtTreeWrapper';

export interface IProps extends TreeProps {
  /** 是否展示头部组件 */
  showHeader?: boolean;
  treeTit?: React.ReactNode;
  wrapperClassName?: string;
  /** 点击搜索按钮回调 */
  onSearch?: (
    value: string,
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLElement, MouseEvent>
      | React.KeyboardEvent<HTMLInputElement>,
    data: TreeProps['treeData']
  ) => void;
}

const DtTree = (props: IProps) => {
  const {
    showHeader,
    treeTit,
    wrapperClassName,
    onSearch,
    treeData,
    ...restProps
  } = props;
  const [collapsed, setCollapsed] = useState(false);
  const handleSearch = (searchStr, e) => {
    onSearch(searchStr, e, filterData(treeData, searchStr));
  };
  if (collapsed) {
    return (
      <MenuUnfoldOutlined
        onClick={() => {
          setCollapsed(false);
        }}
      />
    );
  }
  return (
    <div className={`${prefixCls} ${wrapperClassName || ''}`}>
      {showHeader ? (
        <Header
          title={treeTit}
          collapsed={collapsed}
          onCollapsed={(flag) => {
            setCollapsed(flag);
          }}
        />
      ) : null}
      <Input.Search placeholder="搜索任务名称" onSearch={handleSearch} />
      <Tree
        treeData={treeData}
        style={{ marginTop: 8 }}
        switcherIcon={(props) => {
          console.log(props, '--props');
        }}
        // switcherIcon={1}
        showIcon
        height={200}
        {...restProps}
      />
    </div>
  );
};

DtTree.defaultProps = {
  showHeader: true,
  treeTit: '标签目录',
  collapsed: true,
};

export default DtTree;
