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
      <FormItem key="name" {...this.formLayout} label="角色名称">
        {form.getFieldDecorator('name', {
          rules: [
            {
              required: true,
              message: '请输入角色名称！',
            },
          ],
          initialValue: formVals.name,
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
        title="部门"
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
