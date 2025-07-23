// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class GenerateSong extends APIResource {
  /**
   * Creates a new song generation job using the provided lyrics. The lyrics must be
   * in English and cannot exceed 380 characters. The job will be queued for
   * processing and you can check its status using the getGeneratedSongById endpoint.
   */
  create(body: GenerateSongCreateParams, options?: RequestOptions): APIPromise<GenerateSongCreateResponse> {
    return this._client.post('/generate-song', { body, ...options });
  }
}

export interface GenerateSongCreateResponse {
  id: string;
}

export interface GenerateSongCreateParams {
  lyrics: string;

  section?: 'verse' | 'chorus' | 'guitar-stabs' | 'all' | 'all_v2';
}

export declare namespace GenerateSong {
  export {
    type GenerateSongCreateResponse as GenerateSongCreateResponse,
    type GenerateSongCreateParams as GenerateSongCreateParams,
  };
}
