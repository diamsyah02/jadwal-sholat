const url = 'https://jadwal-shalat-api.herokuapp.com/'
const now = new Date()

function main() {
  return {
    url: url,
    kota: [],
    kota2: [],
    keyword: '',
    dateDaily: `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`,
  }
}

function mainDaily() {
  return {
    url: url,
    jadwalDaily: [],
  }
}

function mainMonthly() {
  return {
    url: url,
    jadwalMonthly: []
  }
}

const cariKota = (keyword, datas) => {
  let temp = []
  if(keyword != '' || keyword != null) {
    datas.map((item, i) => {
      if(item.cityName.toLowerCase().indexOf(keyword.toLowerCase()) > -1){
        temp.push(item)
      }
    })
    return temp
  } else {
    return datas
  }
}

async function getKota() {
  let res = await(await(fetch(`${url}cities`))).json()
  return res.data
}

const getHeight = () => {
  const body = document.body
  const html = document.documentElement
  const height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight )
  document.getElementById('wrap').style.height = `${height}px`
  document.getElementById('content').style.height = `${height-155}px`
}

getHeight()