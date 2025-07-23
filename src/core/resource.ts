// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Weights } from '../client';

export abstract class APIResource {
  protected _client: Weights;

  constructor(client: Weights) {
    this._client = client;
  }
}
