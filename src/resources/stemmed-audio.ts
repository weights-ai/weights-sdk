// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class StemmedAudio extends APIResource {
  /**
   * Gets a stemmed audio file by ID. Returns the status and shortStatusText of the
   * job, as well as the stems if the job has succeeded.
   */
  retrieve(
    query: StemmedAudioRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<StemmedAudioRetrieveResponse> {
    return this._client.get('/stemmed-audio', { query, ...options });
  }
}

export interface StemmedAudioRetrieveResponse {
  id: string;

  shortStatusText: string | null;

  status: 'QUEUED' | 'PENDING_WORKER' | 'PROCESSING' | 'ERRORED' | 'SUCCEEDED' | 'CANCELED';

  stems: Array<StemmedAudioRetrieveResponse.Stem>;
}

export namespace StemmedAudioRetrieveResponse {
  export interface Stem {
    id: string;

    createdAt: string;

    inputUrl: string;

    outputUrl: string;

    type:
      | 'Vocals'
      | 'Instrumental'
      | 'DeEchoedVocals'
      | 'EchoedVocals'
      | 'IsolatedVocals'
      | 'IsolatedDeEchoedVocals'
      | 'BackingVocals';
  }
}

export interface StemmedAudioRetrieveParams {
  id: string;
}

export declare namespace StemmedAudio {
  export {
    type StemmedAudioRetrieveResponse as StemmedAudioRetrieveResponse,
    type StemmedAudioRetrieveParams as StemmedAudioRetrieveParams,
  };
}
