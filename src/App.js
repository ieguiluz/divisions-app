import React, { useEffect, useState } from 'react';
import { Layout, Menu, Breadcrumb, Table } from 'antd';
import './App.less';

const { Header, Content, Footer } = Layout;

const columns = [
  {
    title: 'División',
    dataIndex: 'name',
    width: 150,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'División superior',
    dataIndex: 'parent',
    width: 150,
  },
  {
    title: 'Colaboradores',
    dataIndex: 'colaboratorsQty',
    width: 150,
  },
  {
    title: 'Nivel',
    dataIndex: 'level',
    width: 150,
  },
  {
    title: 'Subdivisiones',
    dataIndex: 'subdivisions',
    width: 150,
  },
  {
    title: 'Embajadores',
    dataIndex: 'ambassador',
    width: 150,
  },
];

const App = () => {
  const [divisions, setDivisions] = useState([]);
  useEffect(() => {
    fetch(`http://localhost/api/divisions`)
      .then(function(response) {
        return response.json();
      })
      .then(res => {
        console.log('chau', res)
        for (let i = 0; i < res.divisions.length; i++) {
          setDivisions(divisions => [...divisions, {
            key: i,
            name: res.divisions[i].name,
            parent: res.divisions[i].parent !== null ? res.divisions[i].parent.name : '-',
            colaboratorsQty: res.divisions[i].colaborators_qty,
            level: res.divisions[i].level,
            subdivisions: res.divisions[i].subdivisions_count,
            ambassador: res.divisions[i].ambassador !== null ? res.divisions[i].ambassador : '-',
          }])
        }
      })
      .catch(error => {
      });
  }, []);

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <Table columns={columns} dataSource={divisions} pagination={{ pageSize: 10 }} />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Developed by irwinEguiluz</Footer>
    </Layout>
  )
};

export default App;