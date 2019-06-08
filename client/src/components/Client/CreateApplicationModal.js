import React from 'react'
import { Button, Modal, Form, Input, Switch, Upload, Icon } from 'antd';
import axios from 'axios'

const CreateInquiryForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {

    state = {
      fileList: []
    }

    normFile = e => {
      console.log('Upload event:', e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    };

    dummyRequest = ({ file, onSuccess }) => {
      setTimeout(() => {
        onSuccess("ok")
      }, 0)
    }
  
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
            <Form.Item label="Title">
              {getFieldDecorator('subject', {
                rules: [{ required: true, message: 'Please input a short title!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator('description', {
                rules: [{ required: true, message: 'Please add a description of the piece!' }],
              })(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item label="Placement (e.g. ankle, chest, etc.)">
              {getFieldDecorator('placement', {
                rules: [{ required: true, message: 'Please describe the placement of the piece!' }],
              })(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item label="Is this piece a cover-up?">
              {getFieldDecorator('coverUp', { valuePropName: 'checked' })(
                <Switch checkedChildren={'Yes'} unCheckedChildren={'No'}/>
              )}
            </Form.Item>
            <Form.Item label="Would you like a consultation?">
              {getFieldDecorator('consultation', { valuePropName: 'checked' })(
                <Switch checkedChildren={'Yes'} unCheckedChildren={'No'}/>
              )}
            </Form.Item>
            <Form.Item label="Reference Photos">
              {getFieldDecorator('referencePhotos', {
                valuePropName: 'referencePhotos',
                getValueFromEvent: this.normFile,
              })(
                // <PhotoUploader normFile={this.normFile}/>
                <Upload
                  name="logo"
                  listType="picture-card"
                  customRequest={this.dummyRequest}
                >
                  <Icon type="plus" />
                  <div className="ant-upload-text">Upload</div>
                </Upload>
              )}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  },
);

class CreateApplicationModal extends React.Component {
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
    const artist = this.props.artist
    const form = this.formRef.props.form;
    form.validateFields(async (err, values) => {
      if (err) {
        return;
      }
      console.log(artist)
      console.log('Received values of form: ', values);
      const { subject, description, placement, coverUp, consultation } = values
      const result = await axios.post(
        `/artists/${artist.id}/interactions?type=application`, {
          subject,
          description,
          placement,
          coverUp,
          consultation
        }, 
      );

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
            marginRight: '5px'
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

export default CreateApplicationModal