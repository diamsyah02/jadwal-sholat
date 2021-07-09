const url = 'https://jadwal-shalat-api.herokuapp.com/'
const now = new Date()
const date = now.getDate()
const month = now.getMonth() + 1
const year = now.getFullYear()
let cityId = localStorage.getItem('cityId')

function mainDaily() {
  return {
    daily: [],
  }
}

function mainMonthly() {
  return {
    monthly: []
  }
}

async function getDaily() {
  let res = await(await fetch(`${url}daily?date=${year}-${month}-${date}&cityId=1`)).json()
  console.log(res.data)
  return res.data
}

async function getMonthly() {
  let res = await(await fetch(`${url}monthly?month=${year}-${month}&cityId=1`)).json()
  return res.data
} 

const getHeight = () => {
  const body = document.body
  const html = document.documentElement
  const height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight )
  document.getElementById('wrap').style.height = `${height}px`
  // document.getElementById('wrap-monthly').style.height = `${height-400}px`
}

getHeight()