import type { TreeProps } from 'antd';

export const filterData = (
  treeData: TreeProps['treeData'],
  searchStr?: string
) => {
  console.log(searchStr, typeof searchStr, '--searchStr');
  if (!treeData || !treeData.length) return [];
  return treeData.reduce((prev, curr) => {
    if (!curr?.title?.includes(searchStr)) return prev;
    const { children = [], ...rest } = curr;
    return [
      ...prev,
      {
        ...rest,
        children: filterData(children, searchStr),
      },
    ];
  }, []);
};
