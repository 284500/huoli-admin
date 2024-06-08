import axios from "axios";

export function getMapAddress(data){

  return axios({
    method: 'get',
    url:'https://restapi.amap.com/v3/geocode/geo',
    params:{
      address:data,
      output:'JSON',
      key:'8219338422e1b5d6f87a986c6c257697'
    }
  })
}
