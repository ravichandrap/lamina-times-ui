import React, { FC, useContext, useState } from 'react';
import { LaminaInfo } from './LaminaInfo/LaminaInfo';
import { LAMINA_DASHBOARD } from './utils/constants';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { LaminaContext } from './hooks/context/LaminaProvider';
const { Header, Content, Footer } = Layout;

export const LaminaHome: FC = () => {
  const { fetchStocks, 
    fetchUsers, 
    setCurrentPage 
  } = useContext(LaminaContext);
  const [pageId, setPageId] = useState('1');

  return <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[pageId]}>
        <Menu.Item key="1" onClick={() => { setPageId('1'); setCurrentPage(LAMINA_DASHBOARD) }}>Dashboard</Menu.Item>
        <Menu.Item key="2" onClick={() => { setPageId('2'); fetchUsers(0) }}>Users</Menu.Item>
        <Menu.Item key="3" onClick={() => { setPageId('3'); fetchStocks(0) }}>Stocks</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '20px 50px' }}>
      <div className="site-layout-content">
        <LaminaInfo />
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Laminatime ©2018 Created by BlueMoon team</Footer>
  </Layout>
}