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
      <FormItem key="userName" {...this.formLayout} label="用户名称">
        {form.getFieldDecorator('userName', {
          rules: [
            {
              required: true,
              message: '请输入区域名称！',
            },
          ],
          initialValue: formVals.userName,
        })(<Input/>)}
      </FormItem>,


      <FormItem key="email" {...this.formLayout} label="邮箱">
        {form.getFieldDecorator('email', {
          rules: [
            {
              required: true,
              message: '请输入邮箱！',
            },
          ],
          initialValue: formVals.email,
        })(<Input />)}
      </FormItem>,
      <FormItem key="phone" {...this.formLayout} label="电话">
        {form.getFieldDecorator('phone', {
          rules: [
            {
              required: true,
              message: '请输入电话！',
            },
          ],
          initialValue: formVals.phone,
        })(<Input/>)}
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
        title="用户更新"
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
