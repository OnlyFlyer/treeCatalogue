import React from 'react';
import { Tree } from 'antd';
import type { TreeProps } from 'antd';

export interface IProps extends TreeProps {}

export default (props: IProps) => {
  return <Tree {...props} />;
};
