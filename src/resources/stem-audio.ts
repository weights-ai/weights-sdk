// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class StemAudio extends APIResource {
  /**
   * Stems an audio file, returning the instrumental and vocals separately. Returns
   * the id of the stemming job which can be used to check the status of the job.
   */
  create(body: StemAudioCreateParams, options?: RequestOptions): APIPromise<StemAudioCreateResponse> {
    return this._client.post('/stem-audio', { body, ...options });
  }
}

export interface StemAudioCreateResponse {
  id: string;
}

export interface StemAudioCreateParams {
  url: string;
}

export declare namespace StemAudio {
  export {
    type StemAudioCreateResponse as StemAudioCreateResponse,
    type StemAudioCreateParams as StemAudioCreateParams,
  };
}
