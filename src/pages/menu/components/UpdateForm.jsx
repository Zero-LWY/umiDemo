import { Form } from '@ant-design/compatible';
import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import '@ant-design/compatible/assets/index.css';
import { Divider, DatePicker, Input, Modal, Radio, Select, Steps, Popconfirm, Button, message } from 'antd';
import React, { Component } from 'react';
import ProTable from '@ant-design/pro-table';
import { queryPermission, updateRule, addRule, removePermission } from '../service';




const handleRemovePermission = async (selectedRows,menuId) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;

  try {
    await removePermission({
      menuId: menuId,
      roleId: selectedRows.id,
    });
    hide();
    message.success('删除成功，即将刷新');
    return true;
  } catch (error) {
    hide();
    message.error('删除失败，请重试');
    return false;
  }
};



class UpdateForm extends Component {
  static defaultProps = {
    handleUpdate: () => {},
    handleUpdateModalVisible: () => {},
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
      formVals: {
        name: props.values.name,
        desc: props.values.desc,
        menuId: props.values.id,
        target: '0',
        template: '0',
        type: '1',
        time: '',
        frequency: 'month',
      },
    };

  }

 
  

 

  renderContent = (formVals) => {
    const { form } = this.props;
    const columns = [
      {
        title: '序号',
        dataIndex: 'id',
      },
      {
        title: '角色名称',
        dataIndex: 'name',
      },
      {
        title: '操作',
        dataIndex: 'option',
        valueType: 'option',
        render: (_, record) => (
          <>
            
            <Popconfirm title="Sure to delete?" onConfirm={() => handleRemovePermission(record,this.state.formVals.menuId)}>
                <a>删除</a>
            </Popconfirm>
          </>
        ),
      },
    ];

    return [
    <ProTable
        headerTitle="查询表格"
        rowKey="id"
        toolBarRender={(action, { selectedRows }) => [
          <Button icon={<PlusOutlined />} type="primary" onClick={() => handleModalVisible(true)}>
            新建
          </Button>
        ]}
        request={params => {
           params = {...this.state.formVals,...params};
          return queryPermission(params);}}
        columns={columns}
      />
    
    
      
    ];
  };


  render() {
    const { updateModalVisible, onCancel: handleUpdateModalVisible, values } = this.props;
    const { formVals } = this.state;
    return (
      <Modal
        width={640}
        bodyStyle={{
          padding: '10px 40px 48px',
        }}
        destroyOnClose
        title="权限配置"
        visible={updateModalVisible}
        onCancel={() => handleUpdateModalVisible(false, values)}
        afterClose={() => handleUpdateModalVisible()}
      >
        {this.renderContent(formVals)}
      </Modal>
    );
  }
}

export default Form.create()(UpdateForm);
