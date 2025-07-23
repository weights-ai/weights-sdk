// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class VisualCreation extends APIResource {
  /**
   * Retrieves the status and results of a specific visual creation job by its ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<VisualCreationRetrieveResponse> {
    return this._client.get(path`/visual-creation/${id}`, options);
  }

  /**
   * Retrieves a paginated list of visual creation jobs for the authenticated user,
   * sorted by creation date in descending order.
   */
  list(
    query: VisualCreationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VisualCreationListResponse> {
    return this._client.get('/visual-creation', { query, ...options });
  }
}

export interface VisualCreationRetrieveResponse {
  id: string;

  createdAt: string;

  dimensions: 'SQUARE' | 'PORTRAIT' | 'LANDSCAPE';

  lora: VisualCreationRetrieveResponse.Lora | null;

  numImages: number;

  prompt: string;

  secondaryLora: VisualCreationRetrieveResponse.SecondaryLora | null;

  status: 'QUEUED' | 'PENDING_WORKER' | 'PROCESSING' | 'ERRORED' | 'SUCCEEDED' | 'CANCELED';

  type: 'IMAGE' | 'VIDEO' | 'EDIT' | 'REMIX' | 'INPAINT' | 'UPSCALE';

  updatedAt: string;

  outputUrls?: Array<string>;
}

export namespace VisualCreationRetrieveResponse {
  export interface Lora {
    id: string;

    name: string;
  }

  export interface SecondaryLora {
    id: string;

    name: string;
  }
}

export interface VisualCreationListResponse {
  jobs: Array<VisualCreationListResponse.Job>;
}

export namespace VisualCreationListResponse {
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
  }
}

export interface VisualCreationListParams {
  cursor?: string | null;

  limit?: number;
}

export declare namespace VisualCreation {
  export {
    type VisualCreationRetrieveResponse as VisualCreationRetrieveResponse,
    type VisualCreationListResponse as VisualCreationListResponse,
    type VisualCreationListParams as VisualCreationListParams,
  };
}
