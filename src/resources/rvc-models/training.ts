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
  /**
   * Unique identifier for the RVC training job
   */
  id: string;

  /**
   * Number of training attempts made
   */
  attempt: number;

  /**
   * Array of training audio files
   */
  audioFiles: Array<TrainingCreateResponse.AudioFile>;

  /**
   * Timestamp when the training job was created
   */
  createdAt: string;

  /**
   * Whether echo and reverb removal was enabled
   */
  deEchoDeReverb: boolean;

  /**
   * Whether main vocal isolation was enabled
   */
  isolateMainVocals: boolean;

  /**
   * Name of the RVC voice model being trained
   */
  name: string;

  /**
   * Timestamp when the training job was last updated
   */
  updatedAt: string;

  /**
   * Description of the voice model
   */
  description?: string | null;

  /**
   * Timestamp when training completed
   */
  endTime?: string | null;

  /**
   * URL to the model preview image
   */
  image?: string | null;

  /**
   * Initial position in the training queue
   */
  initialQueuePosition?: number | null;

  /**
   * Current position in the training queue
   */
  queuePosition?: number | null;

  /**
   * Associated RVC model information
   */
  rvcModel?: TrainingCreateResponse.RvcModel | null;

  /**
   * ID of the associated RVC model
   */
  rvcModelId?: string | null;

  /**
   * Brief description of the current training status
   */
  shortStatusText?: string | null;

  /**
   * Timestamp when training started
   */
  startTime?: string | null;

  /**
   * Current status of the training job
   */
  status?: 'QUEUED' | 'PENDING_WORKER' | 'PROCESSING' | 'ERRORED' | 'SUCCEEDED' | 'CANCELED' | null;
}

export namespace TrainingCreateResponse {
  export interface AudioFile {
    /**
     * Unique identifier for the audio file
     */
    id: string;

    /**
     * Timestamp when the audio file was uploaded
     */
    createdAt: string;

    /**
     * Whether the audio file is pre-stemmed
     */
    isPreStemmed: boolean;

    /**
     * URL to the training audio file
     */
    url: string;
  }

  /**
   * Associated RVC model information
   */
  export interface RvcModel {
    /**
     * Unique identifier for the RVC model
     */
    id: string;

    /**
     * Title of the RVC model
     */
    title: string;
  }
}

export interface TrainingRetrieveResponse {
  /**
   * Unique identifier for the RVC training job
   */
  id: string;

  /**
   * Number of training attempts made
   */
  attempt: number;

  /**
   * Array of training audio files
   */
  audioFiles: Array<TrainingRetrieveResponse.AudioFile>;

  /**
   * Timestamp when the training job was created
   */
  createdAt: string;

  /**
   * Whether echo and reverb removal was enabled
   */
  deEchoDeReverb: boolean;

  /**
   * Whether main vocal isolation was enabled
   */
  isolateMainVocals: boolean;

  /**
   * Name of the RVC voice model being trained
   */
  name: string;

  /**
   * Timestamp when the training job was last updated
   */
  updatedAt: string;

  /**
   * Description of the voice model
   */
  description?: string | null;

  /**
   * Timestamp when training completed
   */
  endTime?: string | null;

  /**
   * URL to the model preview image
   */
  image?: string | null;

  /**
   * Initial position in the training queue
   */
  initialQueuePosition?: number | null;

  /**
   * Current position in the training queue
   */
  queuePosition?: number | null;

  /**
   * Associated RVC model information
   */
  rvcModel?: TrainingRetrieveResponse.RvcModel | null;

  /**
   * ID of the associated RVC model
   */
  rvcModelId?: string | null;

  /**
   * Brief description of the current training status
   */
  shortStatusText?: string | null;

  /**
   * Timestamp when training started
   */
  startTime?: string | null;

  /**
   * Current status of the training job
   */
  status?: 'QUEUED' | 'PENDING_WORKER' | 'PROCESSING' | 'ERRORED' | 'SUCCEEDED' | 'CANCELED' | null;
}

export namespace TrainingRetrieveResponse {
  export interface AudioFile {
    /**
     * Unique identifier for the audio file
     */
    id: string;

    /**
     * Timestamp when the audio file was uploaded
     */
    createdAt: string;

    /**
     * Whether the audio file is pre-stemmed
     */
    isPreStemmed: boolean;

    /**
     * URL to the training audio file
     */
    url: string;
  }

  /**
   * Associated RVC model information
   */
  export interface RvcModel {
    /**
     * Unique identifier for the RVC model
     */
    id: string;

    /**
     * Title of the RVC model
     */
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
  /**
   * Array of training audio files (1-50 files required)
   */
  audioFiles: Array<TrainingCreateParams.AudioFile>;

  /**
   * Name for the RVC voice model
   */
  name: string;

  /**
   * Whether to remove echo and reverb from the audio
   */
  deEchoDeReverb?: boolean;

  /**
   * Description of the voice model
   */
  description?: string;

  /**
   * Whether to run the UVR-MDX-NET Karaoke stemming processing on the audio to
   * isolate the main vocals
   */
  isolateMainVocals?: boolean;
}

export namespace TrainingCreateParams {
  export interface AudioFile {
    /**
     * URL to the training audio file
     */
    url: string;

    /**
     * Whether the audio file is already separated into stems
     */
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
