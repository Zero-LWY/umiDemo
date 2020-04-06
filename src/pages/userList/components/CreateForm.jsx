import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Input, Modal } from 'antd';
import React from 'react';

const FormItem = Form.Item;

const CreateForm = props => {
  const { modalVisible, form, onSubmit: handleAdd, onCancel } = props;

  const okHandle = () => {
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      form.resetFields();
      handleAdd(fieldsValue);
    });
  };

  return (
    <Modal
      destroyOnClose
      title="新建用户"
      visible={modalVisible}
      onOk={okHandle}
      onCancel={() => onCancel()}
    >
      <FormItem
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 15,
        }}
        label="部门ID"
      >
        {form.getFieldDecorator('deptId', {
          rules: [
            {
              required: true,
              message: '请输入部门id！',
            },
          ],
        })(<Input/>)}
      </FormItem>
      <FormItem
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 15,
        }}
        label="用户名称"
      >
        {form.getFieldDecorator('userName', {
          rules: [
            {
              required: true,
              message: '请输入用户名称！'
            },
          ],
        })(<Input  />)}
      </FormItem>
      <FormItem
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 15,
        }}
        label="邮箱"
      >
        {form.getFieldDecorator('email', {
          rules: [
            {
              required: true,
              message: '请输入正确的邮箱！',
              pattern: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,
            },
          ],
        })(<Input />)}
      </FormItem>
      <FormItem
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 15,
        }}
        label="电话号码"
      >
        {form.getFieldDecorator('phone', {
          rules: [
            {
              required: true,
              message: '请输入正确的电话号码！',
              pattern: /^1(3|4|5|6|7|8|9)\d{9}$/,
            },
          ],
        })(<Input/>)}
      </FormItem>

      <FormItem
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 15,
        }}
        label="登录名"
      >
        {form.getFieldDecorator('loginName', {
          rules: [
            {
              required: true,
              message: '请输入登录名！',
            },
          ],
        })(<Input />)}
      </FormItem>
      <FormItem
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 15,
        }}
        label="密码"
      >
        {form.getFieldDecorator('password', {
          rules: [
            {
              required: true,
              message: '至少8-16个字符，至少1个大写字母，1个小写字母和1个数字',
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/,
            },
          ],
        })(<Input.Password/>)}
      </FormItem>

    </Modal>
  );
};

export default Form.create()(CreateForm);
