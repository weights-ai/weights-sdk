// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Training extends APIResource {
  /**
   * Creates a new RVC model training job using the provided audio files. The audio
   * files should already be uploaded to a web-accessible location. The training job
   * will be queued for processing.
   */
  create(body: TrainingCreateParams, options?: RequestOptions): APIPromise<TrainingCreateResponse> {
    return this._client.post('/rvc-models/training/create', { body, ...options });
  }

  /**
   * Retrieves the details of a specific RVC model training job by its ID. Returns
   * null if the job is not found or doesn't belong to the authenticated user.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<TrainingRetrieveResponse | null> {
    return this._client.get(path`/rvc-models/training/${id}`, options);
  }

  /**
   * Retrieves the current training status of a specific RVC model training job.
   * Useful for polling the status of a training job. Returns null if the job is not
   * found or doesn't belong to the authenticated user.
   */
  status(id: string, options?: RequestOptions): APIPromise<TrainingStatusResponse | null> {
    return this._client.get(path`/rvc-models/training/${id}/status`, options);
  }
}

export interface TrainingCreateResponse {
  id: string;

  attempt: number;

  audioFiles: Array<TrainingCreateResponse.AudioFile>;

  createdAt: string;

  name: string;

  runDeEchoDeReverb: boolean;

  runKaraoke: boolean;

  updatedAt: string;

  description?: string | null;

  endTime?: string | null;

  image?: string | null;

  initialQueuePosition?: number | null;

  queuePosition?: number | null;

  rvcModel?: TrainingCreateResponse.RvcModel | null;

  rvcModelId?: string | null;

  shortStatusText?: string | null;

  startTime?: string | null;

  status?: 'QUEUED' | 'PENDING_WORKER' | 'PROCESSING' | 'ERRORED' | 'SUCCEEDED' | 'CANCELED' | null;
}

export namespace TrainingCreateResponse {
  export interface AudioFile {
    id: string;

    createdAt: string;

    isPreStemmed: boolean;

    url: string;
  }

  export interface RvcModel {
    id: string;

    title: string;
  }
}

export interface TrainingRetrieveResponse {
  id: string;

  attempt: number;

  audioFiles: Array<TrainingRetrieveResponse.AudioFile>;

  createdAt: string;

  name: string;

  runDeEchoDeReverb: boolean;

  runKaraoke: boolean;

  updatedAt: string;

  description?: string | null;

  endTime?: string | null;

  image?: string | null;

  initialQueuePosition?: number | null;

  queuePosition?: number | null;

  rvcModel?: TrainingRetrieveResponse.RvcModel | null;

  rvcModelId?: string | null;

  shortStatusText?: string | null;

  startTime?: string | null;

  status?: 'QUEUED' | 'PENDING_WORKER' | 'PROCESSING' | 'ERRORED' | 'SUCCEEDED' | 'CANCELED' | null;
}

export namespace TrainingRetrieveResponse {
  export interface AudioFile {
    id: string;

    createdAt: string;

    isPreStemmed: boolean;

    url: string;
  }

  export interface RvcModel {
    id: string;

    title: string;
  }
}

export interface TrainingStatusResponse {
  id: string;

  createdAt: string;

  queuePosition: number | null;

  shortStatusText: string | null;

  status: 'QUEUED' | 'PENDING_WORKER' | 'PROCESSING' | 'ERRORED' | 'SUCCEEDED' | 'CANCELED';
}

export interface TrainingCreateParams {
  audioFiles: Array<TrainingCreateParams.AudioFile>;

  name: string;

  description?: string;

  runDeEchoDeReverb?: boolean;

  runKaraoke?: boolean;
}

export namespace TrainingCreateParams {
  export interface AudioFile {
    url: string;

    isPreStemmed?: boolean;
  }
}

export declare namespace Training {
  export {
    type TrainingCreateResponse as TrainingCreateResponse,
    type TrainingRetrieveResponse as TrainingRetrieveResponse,
    type TrainingStatusResponse as TrainingStatusResponse,
    type TrainingCreateParams as TrainingCreateParams,
  };
}
