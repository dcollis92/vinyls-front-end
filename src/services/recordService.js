const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/records`

async function getAllRecords(searchParams) {
  console.log(searchParams)
  const res = await fetch(`${BASE_URL}?word=${searchParams}`)
  return await res.json()
  }

function getRecordDetails(id) {
   return fetch (`${BASE_URL}/${id}`)
   .then(res => res.json())
 }

export { getAllRecords, getRecordDetails }
