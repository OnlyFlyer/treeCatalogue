import React from 'react';
import { TreeSelect } from 'antd';
import type { TreeSelectProps } from 'antd';

export interface IProps extends TreeSelectProps {}

export default (props: IProps) => {
  return <TreeSelect {...props} />;
};
