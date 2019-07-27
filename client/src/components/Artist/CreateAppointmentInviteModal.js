import React from 'react'
import { Button, Modal, Form, Input, DatePicker } from 'antd';
import axios from 'axios'

const config = {
  rules: [{ type: 'object', required: true, message: 'Please select time!' }],
};

const AppointmentInviteCreateForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Create an Appointment Invitation"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="Name">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please input a name for the appointment!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator('description')(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item label="DatePicker[showTime]">
              {getFieldDecorator('datetime', config)(
                <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />,
              )}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  },
);

class CreateAppointmentInviteModal extends React.Component {
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
    const interaction = this.props.interaction
    const form = this.formRef.props.form;
    form.validateFields(async (err, values) => {
      if (err) {
        return;
      }

      // send to server

      const result = await axios.post(
        `/interactions/${interaction.id}/appointments`, {
          name: values.name,
          description: values.description,
          date: values.datetime.toISOString()
        }, 
      );

      this.props.addAppointment(result.data.appointment)
  
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
            float: 'left',
            margin: '5px'
          }}  
        >
          Create Appointment
        </Button>
        <AppointmentInviteCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

export default CreateAppointmentInviteModal