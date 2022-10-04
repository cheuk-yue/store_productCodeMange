import React, { Component } from 'react'
import { Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import apiFun from '../../api/js/action';
const { TextArea } = Input;

export default class AddItem extends Component {
  addProduct = () => {
    console.log(this.state);
    const { title, price, code, notes } = this.state;
    apiFun.addProductFun(title, price, code, notes);
  }
  inputChange = (e, _name) => {
    this.setState({
      [_name]: e.target.value
    })
  }
  render() {
    return (
      <div>
        <p><Input placeholder="商品名称" onChange={(e) => { this.inputChange(e, 'title') }} /></p>
        <p><Input prefix="￥" type='number' placeholder="输入价格" suffix="元" onChange={(e) => { this.inputChange(e, 'price') }} /></p>
        <p><Input placeholder="商品条形码" type='number' onChange={(e) => { this.inputChange(e, 'code') }} /></p>
        <p><TextArea rows={4} placeholder="提醒以及备注" onChange={(e) => { this.inputChange(e, 'notes') }} /></p>
        <Button type="primary" block onClick={this.addProduct}>
          提交商品
        </Button>
        <p></p>
        <p></p>
        <Link to='/index'>
          <div style={{ textDecoration: 'underline', fontSize: '12px', color: 'white', marginTop: '120px' }}>
            返回上一页
          </div>
        </Link>
      </div>
    )
  }
}

