import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Input, Space } from 'antd';
import apiFun from '../../api/js/action';

export default class search extends Component {
  onSearch(e) {
    return apiFun.getProducts(e);
  }
  render() {
    const { Search } = Input;
    return (
      <div>
        <h3 style={{ color: 'white' }}>商品价格搜索系统</h3>
        <Space direction="vertical">
          <Search
            placeholder="输入商品条形码"
            allowClear
            enterButton="搜索"
            size="large"
            onSearch={(e) => { this.onSearch(e) }}
          />
        </Space>
        <Link to='/addItems'>
          <div style={{ textDecoration: 'underline', fontSize: '14px', color: 'white', marginTop: '100px' }}>
            添加商品
          </div>
        </Link>
      </div>
    )
  }
}
