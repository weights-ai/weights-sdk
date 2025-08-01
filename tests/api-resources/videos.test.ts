// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Weights from '@weights-ai/sdk';

const client = new Weights({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource videos', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.videos.create({
      inputImageUrl: 'https://storage.example.com/input/river.jpg',
      prompt: 'A flowing river with leaves floating downstream',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await client.videos.create({
      inputImageUrl: 'https://storage.example.com/input/river.jpg',
      prompt: 'A flowing river with leaves floating downstream',
    });
  });
});
