// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Covers extends APIResource {
  /**
   * Creates a new AI cover job for the authenticated user using the specified RVC
   * model and audio file. The job is added to the queue for further processing.
   */
  create(body: CoverCreateParams, options?: RequestOptions): APIPromise<CoverCreateResponse> {
    return this._client.post('/covers/create', { body, ...options });
  }

  /**
   * Retrieves a paginated list of AI cover jobs belonging to the currently
   * authenticated user.
   */
  list(
    query: CoverListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CoverListResponse> {
    return this._client.get('/covers', { query, ...options });
  }
}

export interface CoverCreateResponse {
  id: string;

  createdAt: string;

  status: 'QUEUED' | 'PENDING_WORKER' | 'PROCESSING' | 'ERRORED' | 'SUCCEEDED' | 'CANCELED';

  inputFileName?: string | null;

  inputUrl?: string | null;

  outputUrl?: string | null;

  pitch?: number | null;

  preStemmed?: boolean | null;

  stemOnly?: boolean | null;

  ttsText?: string | null;
}

export interface CoverListResponse {
  covers: Array<CoverListResponse.Cover>;
}

export namespace CoverListResponse {
  export interface Cover {
    id: string;

    createdAt: string;

    status: 'QUEUED' | 'PENDING_WORKER' | 'PROCESSING' | 'ERRORED' | 'SUCCEEDED' | 'CANCELED';

    inputFileName?: string | null;

    inputUrl?: string | null;

    outputUrl?: string | null;

    pitch?: number | null;

    preStemmed?: boolean | null;

    stemOnly?: boolean | null;

    ttsText?: string | null;
  }
}

export interface CoverCreateParams {
  inputUrl: string;

  rvcModelId: string;

  consonantProtection?: number;

  deEcho?: boolean;

  inputFileName?: string;

  instrumentalPitch?: number;

  isolateMainVocals?: boolean;

  pitch?: number;

  preStemmed?: boolean;

  stemOnly?: boolean;

  volumeEnvelope?: number;
}

export interface CoverListParams {
  cursor?: string | null;

  limit?: number;
}

export declare namespace Covers {
  export {
    type CoverCreateResponse as CoverCreateResponse,
    type CoverListResponse as CoverListResponse,
    type CoverCreateParams as CoverCreateParams,
    type CoverListParams as CoverListParams,
  };
}
