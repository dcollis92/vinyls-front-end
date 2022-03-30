import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/profiles`

async function getAllProfiles() {
  const res = await fetch(BASE_URL, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

function getProfile(id) {
  return fetch (`${BASE_URL}/${id}`, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  .then(res => res.json())
}

function addRecord(record) {
  console.log(record)
  return fetch(`${BASE_URL}/addRecord`, {
    method: "POST",
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(record)
  })
  .then(res => res.json())
}

function removeRecord(recordsId) {
  console.log(recordsId)
  return fetch(`${BASE_URL}/${recordsId}`, {
    method: "PATCH",
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      }    
  })
  .then(res => res.json())
}

export { 
  getAllProfiles, 
  getProfile,
  addRecord,
  removeRecord
}
