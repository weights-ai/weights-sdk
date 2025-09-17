// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Weights from '@weights-ai/sdk';

const client = new Weights({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource imageLoraModels', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.imageLoraModels.create({
      images: [
        { url: 'https://example.com/image1.jpg' },
        { url: 'https://example.com/image1.jpg' },
        { url: 'https://example.com/image1.jpg' },
        { url: 'https://example.com/image1.jpg' },
        { url: 'https://example.com/image1.jpg' },
      ],
      name: 'My Custom Style',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.imageLoraModels.create({
      images: [
        { url: 'https://example.com/image1.jpg', description: 'Portrait with specific lighting' },
        { url: 'https://example.com/image1.jpg', description: 'Portrait with specific lighting' },
        { url: 'https://example.com/image1.jpg', description: 'Portrait with specific lighting' },
        { url: 'https://example.com/image1.jpg', description: 'Portrait with specific lighting' },
        { url: 'https://example.com/image1.jpg', description: 'Portrait with specific lighting' },
      ],
      name: 'My Custom Style',
      triggerWord: 'my_style',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.imageLoraModels.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.imageLoraModels.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.imageLoraModels.list(
        { cursor: 'cmcz89fci00zr0dlt68klunpf', limit: 25, search: 'search' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Weights.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveDownloadURL', async () => {
    const responsePromise = client.imageLoraModels.retrieveDownloadURL('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveStatus', async () => {
    const responsePromise = client.imageLoraModels.retrieveStatus('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
