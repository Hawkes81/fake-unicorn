require('dotenv').config();
const axios = require('axios');
const { parseData } = require('../helper')

const axiosRequest = async (payload) => {
    const axiosInstance = axios.create({
        baseURL: process.env.BASE_URL_WEATHER,
        timeout: 1000,
        headers: {}
      });

    let response = await axiosInstance.get(process.env.CUSTOM_URL_WEATHER);
    // console.log(response);

    return response.data;
}

module.exports = {
    axiosRequest
}