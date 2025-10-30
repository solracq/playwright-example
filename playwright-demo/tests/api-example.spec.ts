import { test, expect } from '@playwright/test';

test('GET request example - Public API', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  expect(response.ok()).toBeTruthy();

  const data = await response.json();
  console.log(data);

  expect(data).toHaveProperty('id', 1);
  expect(data).toHaveProperty('title');
});

test('POST request example', async ({ request }) => {
  const newPost = {
    title: 'Playwright API test',
    body: 'This is a test using Playwright request fixture',
    userId: 1
  };

  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: newPost,
  });

  expect(response.status()).toBe(201);
  const responseData = await response.json();
  console.log(responseData);

  expect(responseData).toMatchObject(newPost);
});
