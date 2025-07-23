// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Usage extends APIResource {
  /**
   * Returns daily usage statistics for song generation requests over the last 7
   * days. Shows the number of jobs created per day for the authenticated API key.
   */
  retrieve(options?: RequestOptions): APIPromise<UsageRetrieveResponse> {
    return this._client.get('/usage', options);
  }
}

export type UsageRetrieveResponse = Array<UsageRetrieveResponse.UsageRetrieveResponseItem>;

export namespace UsageRetrieveResponse {
  export interface UsageRetrieveResponseItem {
    day: string;

    job_count: number;
  }
}

export declare namespace Usage {
  export { type UsageRetrieveResponse as UsageRetrieveResponse };
}
