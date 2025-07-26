// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Images extends APIResource {
  /**
   * Creates a new image generation job using the provided prompt. The job will be
   * queued for processing.
   *
   * @example
   * ```ts
   * const image = await client.images.create({
   *   prompt:
   *     'A beautiful sunset over mountains with a lake in the foreground',
   * });
   * ```
   */
  create(body: ImageCreateParams, options?: RequestOptions): APIPromise<ImageCreateResponse> {
    return this._client.post('/images/create', { body, ...options });
  }

  /**
   * Retrieves the status and results of a specific visual creation job by its ID.
   *
   * @example
   * ```ts
   * const image = await client.images.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ImageRetrieveResponse> {
    return this._client.get(path`/images/${id}`, options);
  }

  /**
   * Retrieves a paginated list of visual creation jobs for the authenticated user,
   * sorted by creation date in descending order.
   *
   * @example
   * ```ts
   * const images = await client.images.list();
   * ```
   */
  list(
    query: ImageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ImageListResponse> {
    return this._client.get('/images', { query, ...options });
  }
}

export interface ImageCreateResponse {
  /**
   * Unique identifier for the visual creation job
   */
  id: string;

  /**
   * Timestamp when the job was created
   */
  createdAt: string;

  /**
   * Dimensions of the generated images
   */
  dimensions: 'SQUARE' | 'PORTRAIT' | 'LANDSCAPE';

  /**
   * Primary LoRA model used for generation
   */
  lora: ImageCreateResponse.Lora | null;

  /**
   * Number of images generated
   */
  numImages: number;

  /**
   * Array of URLs to the generated images
   */
  outputUrls: Array<string>;

  /**
   * Text prompt used for the visual creation
   */
  prompt: string;

  /**
   * Secondary LoRA model used for generation
   */
  secondaryLora: ImageCreateResponse.SecondaryLora | null;

  /**
   * Current status of the visual creation job
   */
  status: 'QUEUED' | 'PENDING_WORKER' | 'PROCESSING' | 'ERRORED' | 'SUCCEEDED' | 'CANCELED';

  /**
   * Type of visual creation job
   */
  type: 'IMAGE' | 'VIDEO' | 'EDIT' | 'REMIX' | 'INPAINT' | 'UPSCALE';

  /**
   * Timestamp when the job was last updated
   */
  updatedAt: string;
}

export namespace ImageCreateResponse {
  /**
   * Primary LoRA model used for generation
   */
  export interface Lora {
    /**
     * Unique identifier for the primary LoRA model
     */
    id: string;

    /**
     * Name of the primary LoRA model
     */
    name: string;
  }

  /**
   * Secondary LoRA model used for generation
   */
  export interface SecondaryLora {
    /**
     * Unique identifier for the secondary LoRA model
     */
    id: string;

    /**
     * Name of the secondary LoRA model
     */
    name: string;
  }
}

export interface ImageRetrieveResponse {
  /**
   * Unique identifier for the visual creation job
   */
  id: string;

  /**
   * Timestamp when the job was created
   */
  createdAt: string;

  /**
   * Dimensions of the generated images
   */
  dimensions: 'SQUARE' | 'PORTRAIT' | 'LANDSCAPE';

  /**
   * Primary LoRA model used for generation
   */
  lora: ImageRetrieveResponse.Lora | null;

  /**
   * Number of images generated
   */
  numImages: number;

  /**
   * Array of URLs to the generated images
   */
  outputUrls: Array<string>;

  /**
   * Text prompt used for the visual creation
   */
  prompt: string;

  /**
   * Secondary LoRA model used for generation
   */
  secondaryLora: ImageRetrieveResponse.SecondaryLora | null;

  /**
   * Current status of the visual creation job
   */
  status: 'QUEUED' | 'PENDING_WORKER' | 'PROCESSING' | 'ERRORED' | 'SUCCEEDED' | 'CANCELED';

  /**
   * Type of visual creation job
   */
  type: 'IMAGE' | 'VIDEO' | 'EDIT' | 'REMIX' | 'INPAINT' | 'UPSCALE';

  /**
   * Timestamp when the job was last updated
   */
  updatedAt: string;
}

export namespace ImageRetrieveResponse {
  /**
   * Primary LoRA model used for generation
   */
  export interface Lora {
    /**
     * Unique identifier for the primary LoRA model
     */
    id: string;

    /**
     * Name of the primary LoRA model
     */
    name: string;
  }

  /**
   * Secondary LoRA model used for generation
   */
  export interface SecondaryLora {
    /**
     * Unique identifier for the secondary LoRA model
     */
    id: string;

    /**
     * Name of the secondary LoRA model
     */
    name: string;
  }
}

export interface ImageListResponse {
  jobs: Array<ImageListResponse.Job>;
}

export namespace ImageListResponse {
  export interface Job {
    id: string;

    createdAt: string;

    dimensions: 'SQUARE' | 'PORTRAIT' | 'LANDSCAPE';

    numImages: number;

    prompt: string;

    status: 'QUEUED' | 'PENDING_WORKER' | 'PROCESSING' | 'ERRORED' | 'SUCCEEDED' | 'CANCELED';

    type: 'IMAGE' | 'VIDEO' | 'EDIT' | 'REMIX' | 'INPAINT' | 'UPSCALE';

    updatedAt: string;

    outputUrls?: Array<string>;

    queuePosition?: number | null;
  }
}

export interface ImageCreateParams {
  /**
   * Text description of the image to generate
   */
  prompt: string;

  /**
   * Aspect ratio of the generated image
   */
  dimensions?: 'SQUARE' | 'PORTRAIT' | 'LANDSCAPE';

  /**
   * Lora IDs to apply to the image generation - up to 3 Lora models can be applied
   */
  loraIds?: Array<string>;

  /**
   * Number of images to generate (1-4)
   */
  numImages?: number;
}

export interface ImageListParams {
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

export declare namespace Images {
  export {
    type ImageCreateResponse as ImageCreateResponse,
    type ImageRetrieveResponse as ImageRetrieveResponse,
    type ImageListResponse as ImageListResponse,
    type ImageCreateParams as ImageCreateParams,
    type ImageListParams as ImageListParams,
  };
}
