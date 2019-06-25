import axios from 'axios'

export const acceptApplication = async (id) => {
  await axios.post(`/interactions/${id}/accept`)
}

export const declineApplication = async (id) => {
  await axios.post(`/interactions/${id}/decline`)
}

const api = {
  acceptApplication,
  declineApplication
}

export default api
