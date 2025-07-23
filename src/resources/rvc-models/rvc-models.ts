// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TrainingAPI from './training';
import {
  Training,
  TrainingCreateParams,
  TrainingCreateResponse,
  TrainingRetrieveResponse,
  TrainingStatusResponse,
} from './training';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class RvcModels extends APIResource {
  training: TrainingAPI.Training = new TrainingAPI.Training(this._client);

  /**
   * Retrieves all RVC models (both uploaded and training jobs) for the authenticated
   * user, returned in descending order by creation date. Pagination is supported
   * through a cursor-based approach. Optionally filter results by name search.
   */
  list(
    query: RvcModelListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RvcModelListResponse> {
    return this._client.get('/rvc-models', { query, ...options });
  }

  /**
   * Retrieves the details of a specific uploaded RVC model by its ID. Returns null
   * if the model is not found or doesn't belong to the authenticated user.
   */
  retrieveUploaded(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RvcModelRetrieveUploadedResponse | null> {
    return this._client.get(path`/rvc-models/uploaded/${id}`, options);
  }

  /**
   * Searches through all public RVC models in the database. Results are sorted by
   * creation date. This endpoint does not require authentication.
   */
  search(query: RvcModelSearchParams, options?: RequestOptions): APIPromise<RvcModelSearchResponse> {
    return this._client.get('/rvc-models/search', { query, ...options });
  }

  /**
   * Uploads an existing RVC model to be used with Weights from the specified URL and
   * creates a new model entry in the database. The user must be authenticated.
   */
  upload(body: RvcModelUploadParams, options?: RequestOptions): APIPromise<RvcModelUploadResponse> {
    return this._client.post('/rvc-models/upload', { body, ...options });
  }
}

export interface RvcModelListResponse {
  items: Array<RvcModelListResponse.Item>;
}

export namespace RvcModelListResponse {
  export interface Item {
    id: string;

    createdAt: string;

    isPublic: boolean;

    name: string;

    type: 'uploaded' | 'training';

    updatedAt: string;

    attempt?: number | null;

    audioFiles?: Array<Item.AudioFile> | null;

    description?: string | null;

    endTime?: string | null;

    initialQueuePosition?: number | null;

    isPremiumJob?: boolean | null;

    queuePosition?: number | null;

    runDeEchoDeReverb?: boolean | null;

    runKaraoke?: boolean | null;

    rvcModel?: Item.RvcModel | null;

    rvcModelId?: string | null;

    shortStatusText?: string | null;

    simplifiedTitle?: string | null;

    startTime?: string | null;

    status?: 'QUEUED' | 'PENDING_WORKER' | 'PROCESSING' | 'ERRORED' | 'SUCCEEDED' | 'CANCELED' | null;

    title?: string | null;

    url?: string | null;

    version?: number | null;
  }

  export namespace Item {
    export interface AudioFile {
      id: string;

      createdAt: string;

      isPreStemmed: boolean;

      isYoutube: boolean;

      length: number;

      name: string;

      url: string;

      youtubeUrl?: string | null;
    }

    export interface RvcModel {
      id: string;

      isDeleted: boolean;

      isModRemoved: boolean;

      isPublic: boolean;

      simplifiedTitle: string;

      title: string;
    }
  }
}

export interface RvcModelRetrieveUploadedResponse {
  id: string;

  createdAt: string;

  title: string;
}

export interface RvcModelSearchResponse {
  models: Array<RvcModelSearchResponse.Model>;
}

export namespace RvcModelSearchResponse {
  export interface Model {
    id: string;

    createdAt: string;

    title: string;
  }
}

export interface RvcModelUploadResponse {
  id: string;

  createdAt: string;

  title: string;
}

export interface RvcModelListParams {
  cursor?: string | null;

  limit?: number;

  search?: string;
}

export interface RvcModelSearchParams {
  search: string;

  cursor?: string | null;

  limit?: number;
}

export interface RvcModelUploadParams {
  description: string;

  title: string;

  url: string;
}

RvcModels.Training = Training;

export declare namespace RvcModels {
  export {
    type RvcModelListResponse as RvcModelListResponse,
    type RvcModelRetrieveUploadedResponse as RvcModelRetrieveUploadedResponse,
    type RvcModelSearchResponse as RvcModelSearchResponse,
    type RvcModelUploadResponse as RvcModelUploadResponse,
    type RvcModelListParams as RvcModelListParams,
    type RvcModelSearchParams as RvcModelSearchParams,
    type RvcModelUploadParams as RvcModelUploadParams,
  };

  export {
    Training as Training,
    type TrainingCreateResponse as TrainingCreateResponse,
    type TrainingRetrieveResponse as TrainingRetrieveResponse,
    type TrainingStatusResponse as TrainingStatusResponse,
    type TrainingCreateParams as TrainingCreateParams,
  };
}
