import React from 'react';
import { Menu } from 'antd';

import './index.less';

const { SubMenu } = Menu;

const ContentHeader = () => {
  return (
    <>
      <div className="logo" />
      <Menu mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Dashboard</Menu.Item>
        <Menu.Item key="2">Organización</Menu.Item>
        <SubMenu key="3" title="Modelos">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="4" title="Seguimiento">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="5" style={{float: 'right'}} title={'Administrador'}>
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    </>
  );
};

export default ContentHeader;