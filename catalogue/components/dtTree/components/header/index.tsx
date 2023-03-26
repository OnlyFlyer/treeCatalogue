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
  title?: React.ReactNode;
  collapsed?: boolean;
  onCollapsed?: (collapsed: boolean) => void;
}

export default (props: IProps) => {
  const { onCollapsed } = props;
  return (
    <div className={prefixCls}>
      <div className={`${prefixCls}-left`}>
        <QuestionCircleOutlined style={{ fontSize: 14, marginRight: 4 }} />
        <span style={{ fontSize: 14 }}>{props.title}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <PlusOutlined style={{ fontSize: 12 }} />
        {props.collapsed ? (
          <MenuUnfoldOutlined
            style={{ fontSize: 14 }}
            onClick={() => onCollapsed(false)}
          />
        ) : (
          <MenuFoldOutlined
            style={{ fontSize: 14 }}
            onClick={() => onCollapsed(true)}
          />
        )}
      </div>
    </div>
  );
};
