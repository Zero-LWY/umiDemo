import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Button, DatePicker, Input, Modal, Radio, Select, Steps } from 'antd';
import React, { Component } from 'react';

const FormItem = Form.Item;

class UpdateForm extends Component {
  static defaultProps = {
    handleUpdate: () => { },
    handleUpdateModalVisible: () => { },
    values: {},
  };

  formLayout = {
    labelCol: {
      span: 7,
    },
    wrapperCol: {
      span: 13,
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      formVals: { ...props.values  },
      currentStep: 0,
    };
  }

  handleNext = currentStep => {
    const { form, onSubmit: handleUpdate } = this.props;
    const { formVals: oldValue } = this.state;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      const formVals = { ...oldValue, ...fieldsValue };
      this.setState(
        {
          formVals,
        },
        () => {
          handleUpdate(formVals);
        },
      );
    });
  };



  renderContent = (currentStep, formVals) => {
    const { form } = this.props;
    return [
      <FormItem key="name" {...this.formLayout} label="部门名称">
        {form.getFieldDecorator('name', {
          rules: [
            {
              required: true,
              message: '请输入部门名称！',
            },
          ],
          initialValue: formVals.name,
        })(<Input/>)}
      </FormItem>,


      <FormItem key="code" {...this.formLayout} label="部门编码">
        {form.getFieldDecorator('code', {
          rules: [
            {
              required: true,
              message: '请输入部门编码！',
            },
          ],
          initialValue: formVals.code,
        })(<Input />)}
      </FormItem>,
      <FormItem key="parentId" {...this.formLayout} label="父级ID">
        {form.getFieldDecorator('parentId', {
          rules: [
            {
              required: true,
              message: '请输入父级ID！',
            },
          ],
          initialValue: formVals.parentId,
        })(<Input/>)}
      </FormItem>,
      <FormItem key="master" {...this.formLayout} label="管理人">
        {form.getFieldDecorator('master', {
          initialValue: formVals.master,
        })(<Input/>)}
      </FormItem>,
      <FormItem key="sort" {...this.formLayout} label="排序号">
        {form.getFieldDecorator('sort', {
          initialValue: formVals.sort,
        })(<Input placeholder="请输入" />)}
      </FormItem>,
    ];
  };

  renderFooter = currentStep => {
    const { onCancel: handleUpdateModalVisible, values } = this.props;
      return [
        <Button key="cancel" onClick={() => handleUpdateModalVisible(false, values)}>
          取消
        </Button>,
        <Button key="submit" type="primary" onClick={() => this.handleNext(currentStep)}>
          完成
        </Button>,
      ];

   
  };

  render() {
    const { updateModalVisible, onCancel: handleUpdateModalVisible, values } = this.props;
    const { currentStep, formVals } = this.state;
    return (
      <Modal
        width={640}
        bodyStyle={{
          padding: '32px 40px 48px',
        }}
        destroyOnClose
        title="区域设置"
        visible={updateModalVisible}
        footer={this.renderFooter(currentStep)}
        onCancel={() => handleUpdateModalVisible(false, values)}
        afterClose={() => handleUpdateModalVisible()}
      >
        {this.renderContent(currentStep, formVals)}
      </Modal>
    );
  }
}

export default Form.create()(UpdateForm);
