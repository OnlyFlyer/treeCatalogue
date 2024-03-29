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

import './style.scss';

export const prefixCls = 'dtTreeHeaderWrapper';

export interface IProps {
  title?: string;
  collapsed?: boolean;
}

export default (props: IProps) => {
  return (
    <div className={prefixCls}>
      <div className={`${prefixCls}-left`}>
        <QuestionCircleOutlined />
        {props.title}
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <PlusOutlined />
        {props.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
    </div>
  );
};
