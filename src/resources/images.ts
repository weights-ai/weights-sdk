// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Images extends APIResource {
  /**
   * Creates a new image generation job using the provided prompt. The job will be
   * queued for processing.
   */
  create(body: ImageCreateParams, options?: RequestOptions): APIPromise<ImageCreateResponse> {
    return this._client.post('/images/create', { body, ...options });
  }

  /**
   * Retrieves the status and results of a specific visual creation job by its ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ImageRetrieveResponse> {
    return this._client.get(path`/images/${id}`, options);
  }

  /**
   * Retrieves a paginated list of visual creation jobs for the authenticated user,
   * sorted by creation date in descending order.
   */
  list(
    query: ImageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ImageListResponse> {
    return this._client.get('/images', { query, ...options });
  }
}

export interface ImageCreateResponse {
  id: string;

  createdAt: string;

  dimensions: 'SQUARE' | 'PORTRAIT' | 'LANDSCAPE';

  lora: ImageCreateResponse.Lora | null;

  numImages: number;

  prompt: string;

  secondaryLora: ImageCreateResponse.SecondaryLora | null;

  status: 'QUEUED' | 'PENDING_WORKER' | 'PROCESSING' | 'ERRORED' | 'SUCCEEDED' | 'CANCELED';

  type: 'IMAGE' | 'VIDEO' | 'EDIT' | 'REMIX' | 'INPAINT' | 'UPSCALE';

  updatedAt: string;

  outputUrls?: Array<string>;
}

export namespace ImageCreateResponse {
  export interface Lora {
    id: string;

    name: string;
  }

  export interface SecondaryLora {
    id: string;

    name: string;
  }
}

export interface ImageRetrieveResponse {
  id: string;

  createdAt: string;

  dimensions: 'SQUARE' | 'PORTRAIT' | 'LANDSCAPE';

  lora: ImageRetrieveResponse.Lora | null;

  numImages: number;

  prompt: string;

  secondaryLora: ImageRetrieveResponse.SecondaryLora | null;

  status: 'QUEUED' | 'PENDING_WORKER' | 'PROCESSING' | 'ERRORED' | 'SUCCEEDED' | 'CANCELED';

  type: 'IMAGE' | 'VIDEO' | 'EDIT' | 'REMIX' | 'INPAINT' | 'UPSCALE';

  updatedAt: string;

  outputUrls?: Array<string>;
}

export namespace ImageRetrieveResponse {
  export interface Lora {
    id: string;

    name: string;
  }

  export interface SecondaryLora {
    id: string;

    name: string;
  }
}

export interface ImageListResponse {
  jobs: Array<ImageListResponse.Job>;
}

export namespace ImageListResponse {
  export interface Job {
    id: string;

    createdAt: string;

    dimensions: 'SQUARE' | 'PORTRAIT' | 'LANDSCAPE';

    numImages: number;

    prompt: string;

    status: 'QUEUED' | 'PENDING_WORKER' | 'PROCESSING' | 'ERRORED' | 'SUCCEEDED' | 'CANCELED';

    type: 'IMAGE' | 'VIDEO' | 'EDIT' | 'REMIX' | 'INPAINT' | 'UPSCALE';

    updatedAt: string;

    outputUrls?: Array<string>;

    queuePosition?: number | null;
  }
}

export interface ImageCreateParams {
  prompt: string;

  dimensions?: 'SQUARE' | 'PORTRAIT' | 'LANDSCAPE';

  numImages?: number;

  secondStyleId?: string;

  styleId?: string;

  tertiaryStyleId?: string;
}

export interface ImageListParams {
  cursor?: string | null;

  limit?: number;
}

export declare namespace Images {
  export {
    type ImageCreateResponse as ImageCreateResponse,
    type ImageRetrieveResponse as ImageRetrieveResponse,
    type ImageListResponse as ImageListResponse,
    type ImageCreateParams as ImageCreateParams,
    type ImageListParams as ImageListParams,
  };
}
