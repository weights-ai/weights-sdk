// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Covers extends APIResource {
  /**
   * Creates a new AI cover job for the authenticated user using the specified RVC
   * model and audio file. The job is added to the queue for further processing.
   *
   * @example
   * ```ts
   * const cover = await client.covers.create({
   *   inputUrl: 'https://storage.example.com/input/song.wav',
   *   rvcModelId: 'model_123456789',
   * });
   * ```
   */
  create(body: CoverCreateParams, options?: RequestOptions): APIPromise<CoverCreateResponse> {
    return this._client.post('/covers/create', { body, ...options });
  }

  /**
   * Retrieves the details of a specific AI cover job by its ID. Returns null if the
   * cover is not found or doesn't belong to the authenticated user.
   *
   * @example
   * ```ts
   * const cover = await client.covers.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CoverRetrieveResponse | null> {
    return this._client.get(path`/covers/${id}`, options);
  }

  /**
   * Retrieves a paginated list of AI cover jobs belonging to the currently
   * authenticated user.
   *
   * @example
   * ```ts
   * const covers = await client.covers.list();
   * ```
   */
  list(
    query: CoverListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CoverListResponse> {
    return this._client.get('/covers', { query, ...options });
  }
}

export interface CoverCreateResponse {
  /**
   * Unique identifier for the cover job
   */
  id: string;

  /**
   * Timestamp when the cover job was created
   */
  createdAt: string;

  /**
   * Current status of the cover generation job
   */
  status: 'QUEUED' | 'PENDING_WORKER' | 'PROCESSING' | 'ERRORED' | 'SUCCEEDED' | 'CANCELED';

  /**
   * Original filename of the input audio
   */
  inputFileName?: string | null;

  /**
   * URL to the input audio file
   */
  inputUrl?: string | null;

  /**
   * URL to the generated cover audio file
   */
  outputUrl?: string | null;

  /**
   * Pitch adjustment value for the voice
   */
  pitch?: number | null;

  /**
   * Whether the input audio is already stemmed
   */
  preStemmed?: boolean | null;

  /**
   * Current position in the processing queue
   */
  queuePosition?: number | null;

  /**
   * Whether to process only the vocal stem
   */
  stemOnly?: boolean | null;

  /**
   * Text-to-speech content if using TTS
   */
  ttsText?: string | null;
}

export interface CoverRetrieveResponse {
  /**
   * Unique identifier for the cover job
   */
  id: string;

  /**
   * Timestamp when the cover job was created
   */
  createdAt: string;

  /**
   * Current status of the cover generation job
   */
  status: 'QUEUED' | 'PENDING_WORKER' | 'PROCESSING' | 'ERRORED' | 'SUCCEEDED' | 'CANCELED';

  /**
   * Original filename of the input audio
   */
  inputFileName?: string | null;

  /**
   * URL to the input audio file
   */
  inputUrl?: string | null;

  /**
   * URL to the generated cover audio file
   */
  outputUrl?: string | null;

  /**
   * Pitch adjustment value for the voice
   */
  pitch?: number | null;

  /**
   * Whether the input audio is already stemmed
   */
  preStemmed?: boolean | null;

  /**
   * Current position in the processing queue
   */
  queuePosition?: number | null;

  /**
   * Whether to process only the vocal stem
   */
  stemOnly?: boolean | null;

  /**
   * Text-to-speech content if using TTS
   */
  ttsText?: string | null;
}

export interface CoverListResponse {
  covers: Array<CoverListResponse.Cover>;
}

export namespace CoverListResponse {
  export interface Cover {
    /**
     * Unique identifier for the cover job
     */
    id: string;

    /**
     * Timestamp when the cover job was created
     */
    createdAt: string;

    /**
     * Current status of the cover generation job
     */
    status: 'QUEUED' | 'PENDING_WORKER' | 'PROCESSING' | 'ERRORED' | 'SUCCEEDED' | 'CANCELED';

    /**
     * Original filename of the input audio
     */
    inputFileName?: string | null;

    /**
     * URL to the input audio file
     */
    inputUrl?: string | null;

    /**
     * URL to the generated cover audio file
     */
    outputUrl?: string | null;

    /**
     * Pitch adjustment value for the voice
     */
    pitch?: number | null;

    /**
     * Whether the input audio is already stemmed
     */
    preStemmed?: boolean | null;

    /**
     * Current position in the processing queue
     */
    queuePosition?: number | null;

    /**
     * Whether to process only the vocal stem
     */
    stemOnly?: boolean | null;

    /**
     * Text-to-speech content if using TTS
     */
    ttsText?: string | null;
  }
}

export interface CoverCreateParams {
  /**
   * URL to the input audio file to be processed
   */
  inputUrl: string;

  /**
   * ID of the RVC voice model to use for cloning
   */
  rvcModelId: string;

  /**
   * Consonant protection level (0-1)
   */
  consonantProtection?: number;

  /**
   * Whether to remove echo from the audio
   */
  deEcho?: boolean;

  /**
   * Original filename of the input audio
   */
  inputFileName?: string;

  /**
   * Pitch adjustment for the instrumental track
   */
  instrumentalPitch?: number;

  /**
   * Whether to isolate only the main vocal track
   */
  isolateMainVocals?: boolean;

  /**
   * Pitch adjustment value for the voice (in semitones)
   */
  pitch?: number;

  /**
   * Whether the input audio is already separated into stems
   */
  preStemmed?: boolean;

  /**
   * Whether to process only the vocal stem
   */
  stemOnly?: boolean;

  /**
   * Volume envelope adjustment value
   */
  volumeEnvelope?: number;
}

export interface CoverListParams {
  /**
   * Cursor for pagination to get the next page of results - this is the last item's
   * ID from the previous page
   */
  cursor?: string | null;

  /**
   * Number of items to return per page
   */
  limit?: number;
}

export declare namespace Covers {
  export {
    type CoverCreateResponse as CoverCreateResponse,
    type CoverRetrieveResponse as CoverRetrieveResponse,
    type CoverListResponse as CoverListResponse,
    type CoverCreateParams as CoverCreateParams,
    type CoverListParams as CoverListParams,
  };
}
