const axios = require('axios');
const { fetchDataWithCustomHeadersAndParams, fetchDataFromApi , fetchDataFromWrongUrl} = require('./BaseConfig');
jest.mock('axios');

test('fetchDataFromWrongUrl throws an error', async () => {
    await expect(fetchDataFromWrongUrl()).rejects.toThrow('Failed to fetch data');
});

test('fetchDataWithCustomHeadersAndParams includes custom headers and params', async () => {
    axios.get.mockResolvedValue({ data: {} });

    await fetchDataWithCustomHeadersAndParams();

    expect(axios.get).toHaveBeenCalledWith('https://api.example.com/data', {
        headers: {
            'Authorization': 'Bearer token',
            'Custom-Header': 'CustomValue'
        },
        params: {
            key1: 'value1',
            key2: 'value2'
        }
    });
});

test('fetchDataFromApi returns data on successful request', async () => {
    const mockData = { key: 'value' };
    axios.get.mockResolvedValue({ data: mockData });

    const result = await fetchDataFromApi();
    expect(result).toEqual(mockData);
});

test('fetchDataFromApi throws an error on failed request', async () => {
    axios.get.mockRejectedValue(new Error('Network Error'));

    await expect(fetchDataFromApi()).rejects.toThrow('Failed to fetch data: Network Error');
});