import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/records`


async function getAllRecords(searchParams) {
  console.log(searchParams)
  const res = await fetch(`${BASE_URL}?word=${searchParams}`)
  return await res.json()
  }

function getRecordsDb() {
  return fetch (`${BASE_URL}/recordsdb`)
  .then(res => res.json())
}

function getRecordDetails(id) {
   return fetch (`${BASE_URL}/${id}`)
   .then(res => res.json())
 }

function addComment(recordId, comment) {
  console.log(recordId, comment)
  return fetch(`${BASE_URL}/${recordId}/comments`, {
    method: "POST",
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  })
  .then(res => res.json())
}

export { getAllRecords, getRecordDetails, getRecordsDb, addComment }
