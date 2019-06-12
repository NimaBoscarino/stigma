import axios from 'axios'

const uploadFileToS3 = (response, file) => {
  console.log(response)
  console.log(response.url, response.url_fields)
  var bodyFormData = new FormData();
  for (const data in response.url_fields) {
    bodyFormData.set(data, response.url_fields[data])
  }
  bodyFormData.append('file', file.originFileObj); 

  return axios({
    method: 'post',
    url: response.url,
    data: bodyFormData,
    config: { headers: {'Content-Type': 'multipart/form-data' }}    
    // headers: {
    //   'Origin': 'localhost',
    //   'Content-Type': undefined
    // },
    // data: {
    //   ...response.url_fields,
    //   file: file
    // }
  })
}

export default {
  uploadFileToS3
}