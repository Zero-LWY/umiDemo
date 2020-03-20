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
      title="新建菜单"
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
        label="菜单名称"
      >
      
        {form.getFieldDecorator('name', {
          rules: [
            {
              required: true,
              message: '菜单名称不能为空',
            },
          ],
        })(<Input placeholder="请输入" />)}
      </FormItem>

      <FormItem
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 15,
        }}
        label="链接"
      >
      
        {form.getFieldDecorator('href', {
          rules: [
            {
              required: true,
              message: '路由不能为空',
            },
          ],
        })(<Input placeholder="请输入" />)}
      </FormItem>

      <FormItem
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 15,
        }}
        label="排序"
      >
      
        {form.getFieldDecorator('sort', {
          rules: [
            {
              required: true,
              message: '排序不能为空',
            },
          ],
        })(<Input placeholder="请输入" />)}
      </FormItem> 

      <FormItem
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 15,
        }}
        label="目标"
      >
      
        {form.getFieldDecorator('target', {
          rules: [
            {
              required: true,
              message: '目标不能为空',
            },
          ],
        })(<Input placeholder="请输入" />)}
      </FormItem>

      <FormItem
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 15,
        }}
        label="父节点"
      >
      
        {form.getFieldDecorator('parentId', {
          rules: [
            {
              required: true,
              message: '父节点不能为空',
            },
          ],
        })(<Input placeholder="请输入" />)}
      </FormItem> 



    </Modal>
  );
};

export default Form.create()(CreateForm);
