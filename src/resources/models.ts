// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Models extends APIResource {
  /**
   * Uploads an RVC model from the specified URL and creates a new model entry in the
   * database. The user must be authenticated.
   */
  create(body: ModelCreateParams, options?: RequestOptions): APIPromise<ModelCreateResponse> {
    return this._client.post('/models/create', { body, ...options });
  }

  /**
   * Retrieves all RVC models for the authenticated user, returned in descending
   * order by creation date. Pagination is supported through a cursor-based approach.
   * Optionally filter results by title search.
   */
  list(
    query: ModelListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ModelListResponse> {
    return this._client.get('/models', { query, ...options });
  }

  /**
   * Searches through all public RVC models in the database. Results are sorted by
   * relevance and creation date. This endpoint does not require authentication.
   */
  search(query: ModelSearchParams, options?: RequestOptions): APIPromise<ModelSearchResponse> {
    return this._client.get('/models/search', { query, ...options });
  }
}

export interface ModelCreateResponse {
  id: string;

  createdAt: string;

  title: string;
}

export interface ModelListResponse {
  models: Array<ModelListResponse.Model>;
}

export namespace ModelListResponse {
  export interface Model {
    id: string;

    createdAt: string;

    title: string;
  }
}

export interface ModelSearchResponse {
  models: Array<ModelSearchResponse.Model>;
}

export namespace ModelSearchResponse {
  export interface Model {
    id: string;

    createdAt: string;

    title: string;
  }
}

export interface ModelCreateParams {
  description: string;

  title: string;

  url: string;
}

export interface ModelListParams {
  cursor?: string | null;

  limit?: number;

  search?: string;
}

export interface ModelSearchParams {
  search: string;

  cursor?: string | null;

  limit?: number;
}

export declare namespace Models {
  export {
    type ModelCreateResponse as ModelCreateResponse,
    type ModelListResponse as ModelListResponse,
    type ModelSearchResponse as ModelSearchResponse,
    type ModelCreateParams as ModelCreateParams,
    type ModelListParams as ModelListParams,
    type ModelSearchParams as ModelSearchParams,
  };
}
