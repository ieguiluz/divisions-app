import React from 'react';
import { Layout, Tabs, Typography, Button } from 'antd';
import { DownloadOutlined, UploadOutlined, PlusOutlined } from '@ant-design/icons';
import './App.less';

import DivisionsList from './components/DivisionsList';
import ContentHeader from './components/ContentHeader';

const { Header, Content, Footer } = Layout;
const { TabPane } = Tabs;
const { Title } = Typography;

const App = () => {
  return (
    <Layout className="layout">
      <Header>
        <ContentHeader />
      </Header>
      <Content>
        <div className="site-layout-content">
          <div className="sub-header">
            <Title>Organización</Title>
            <div className="btns">
              <Button type="primary" icon={<PlusOutlined />} />
              <Button icon={<DownloadOutlined />} />
              <Button icon={<UploadOutlined />} />
            </div>
          </div>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Divisiones" key="1">
              <DivisionsList />
            </TabPane>
            <TabPane tab="Colaboradores" key="2">
            </TabPane>
          </Tabs>
        </div>
      </Content>
      <Footer>
        Developed by <a target="_blank" href="https://github.com/ieguiluz">Irwin Eguiluz</a>
      </Footer>
    </Layout>
  )
};

export default App;