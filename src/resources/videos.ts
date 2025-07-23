// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Videos extends APIResource {
  /**
   * Creates a new video generation job using the provided prompt. The job will be
   * queued for processing.
   */
  create(body: VideoCreateParams, options?: RequestOptions): APIPromise<VideoCreateResponse> {
    return this._client.post('/videos/create', { body, ...options });
  }
}

export interface VideoCreateResponse {
  id: string;
}

export interface VideoCreateParams {
  prompt: string;

  inputImageUrl?: string;
}

export declare namespace Videos {
  export { type VideoCreateResponse as VideoCreateResponse, type VideoCreateParams as VideoCreateParams };
}
