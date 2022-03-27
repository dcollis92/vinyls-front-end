const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/records`

async function getAllRecords(searchParams) {
  const res = await fetch(`${BASE_URL}?word=${searchParams}`)
  return await res.json()
  }

export { getAllRecords }
