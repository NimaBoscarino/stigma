import React from 'react'
import { Button, Modal, Form, Input, DatePicker } from 'antd';
import axios from 'axios'

const CreateInquiryForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Apply for a Booking"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
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
          Apply
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