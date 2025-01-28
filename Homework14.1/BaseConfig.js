const axios = require('axios');

async function fetchDataFromWrongUrl() {
    try {
        const response = await axios.get('https://wrong-url.com/api/data');
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch data: ' + error.message);
    }
}

async function fetchDataWithCustomHeadersAndParams() {
    const headers = {
        'Authorization': 'Bearer token',
        'Custom-Header': 'CustomValue'
    };
    const params = {
        key1: 'value1',
        key2: 'value2'
    };
    const response = await axios.get('https://api.example.com/data', { headers, params });
    return response.data;
}

async function fetchDataFromApi() {
    try {
        const response = await axios.get('https://api.example.com/data');
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch data: ' + error.message);
    }
}

module.exports = {
    fetchDataWithCustomHeadersAndParams,
    fetchDataFromApi,
    fetchDataFromWrongUrl
};