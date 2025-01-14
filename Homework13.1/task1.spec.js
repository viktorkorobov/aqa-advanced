const axios = require('axios');

// Створюємо базову конфігурацію Axios
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000,
});

// Додаткове завдання: Налаштування інтерсепторів
api.interceptors.request.use((config) => {
  console.log(`[Запит] ${config.method.toUpperCase()} ${config.url}`);
  return config;
});

api.interceptors.response.use(
  (response) => {
    console.log(`[Респонс] ${response.status} ${response.statusText}`);
    return response;
  },
  (error) => {
    console.error('[Помилка]', error.message);
    return Promise.reject(error);
  }
);

describe('Тести для JSONPlaceholder API', () => {
  test('GET /posts - має повернути список постів із статусом 200', async () => {
    const response = await api.get('/posts');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
  });

  test('GET /posts/1 - має повернути пост з ID=1 із статусом 200', async () => {
    const response = await api.get('/posts/1');
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', 1);
    expect(response.data).toHaveProperty('title');
    expect(response.data).toHaveProperty('body');
  });

  test('POST /posts - має створити новий пост із статусом 201', async () => {
    const newPost = {
      title: 'Test Title',
      body: 'Test Body',
      userId: 1,
    };

    const response = await api.post('/posts', newPost);

    expect(response.status).toBe(201);
    expect(response.data).toMatchObject(newPost);
  });

  test('GET /users - має повернути список користувачів із статусом 200', async () => {
    const response = await api.get('/users');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
  });

  test('GET /users/1 - має повернути користувача з ID=1 із статусом 200', async () => {
    const response = await api.get('/users/1');
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', 1);
    expect(response.data).toHaveProperty('name');
    expect(response.data).toHaveProperty('email');
  });
});