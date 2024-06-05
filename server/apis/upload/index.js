import { uploadFile, postAxios } from '@/utils/request/Request';
import axios from 'axios';
//上传图片
export const uploadImg = (data) => {
  return axios({
    url:'/api/app-api/ffd/v1/upload/image',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'multipart/form-data',
    }});
};
