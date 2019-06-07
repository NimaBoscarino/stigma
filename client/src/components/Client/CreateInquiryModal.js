import React from 'react'
import { Button, Modal, Form, Input, DatePicker } from 'antd';
import axios from 'axios'

const config = {
  rules: [{ type: 'object', required: true, message: 'Please select time!' }],
};

const CreateInquiryForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Send a Question"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="Subject">
              {getFieldDecorator('subject', {
                rules: [{ required: true, message: 'Please input the subject of your question!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Question">
              {getFieldDecorator('question', {
                rules: [{ required: true, message: 'Please input the text for your question!' }],
              })(<Input type="textarea" />)}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  },
);

class CreateInquiryModal extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const user = this.props.user
    const form = this.formRef.props.form;
    form.validateFields(async (err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);

      // send to server
      // const result = await axios.post(
      //   `/artists/${user.id}/events`, {
      //     name: values.name,
      //     description: values.description,
      //     date: values.datetime.toISOString()
      //   }, 
      // );

      // this.props.addEvent(result.data.event)
  
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div>
        <Button
          type="primary"
          onClick={this.showModal}
          style={{
            margin: '5px'
          }}
        >
          Question
        </Button>
        <CreateInquiryForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

export default CreateInquiryModal