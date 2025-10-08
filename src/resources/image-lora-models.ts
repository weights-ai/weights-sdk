// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class ImageLoraModels extends APIResource {
  /**
   * Creates a new image LoRA model training job. Requires 5-30 images with their
   * URLs. The images should already be uploaded to a web-accessible location. The
   * training job will be queued for processing.
   */
  create(
    body: ImageLoraModelCreateParams,
    options?: RequestOptions,
  ): APIPromise<ImageLoraModelCreateResponse> {
    return this._client.post('/image-lora-models/create', { body, ...options });
  }

  /**
   * Retrieves the details of a specific image LoRA model by its ID. Returns null if
   * the model is not found or doesn't belong to the authenticated user (unless it's
   * public).
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ImageLoraModelRetrieveResponse | null> {
    return this._client.get(path`/image-lora-models/${id}`, options);
  }

  /**
   * Retrieves a paginated list of image LoRA models created by the authenticated
   * user, sorted by creation date in descending order. Optionally filter results by
   * name search.
   */
  list(
    query: ImageLoraModelListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ImageLoraModelListResponse> {
    return this._client.get('/image-lora-models', { query, ...options });
  }

  /**
   * Retrieves a signed download URL for a trained Image LoRA model. The model must
   * belong to the authenticated user and must have been trained via the API. The URL
   * expires in 5 minutes.
   */
  retrieveDownloadURL(
    id: string,
    options?: RequestOptions,
  ): APIPromise<ImageLoraModelRetrieveDownloadURLResponse> {
    return this._client.get(path`/image-lora-models/${id}/download`, options);
  }

  /**
   * Retrieves the current training status of a specific image LoRA model. Useful for
   * polling the status of a training job. Returns null if the model is not found or
   * doesn't belong to the authenticated user.
   */
  retrieveStatus(
    id: string,
    options?: RequestOptions,
  ): APIPromise<ImageLoraModelRetrieveStatusResponse | null> {
    return this._client.get(path`/image-lora-models/${id}/status`, options);
  }
}

export interface ImageLoraModelCreateResponse {
  id: string;

  trainingJobId: string;
}

export interface ImageLoraModelRetrieveResponse {
  /**
   * Unique identifier for the LoRA model
   */
  id: string;

  /**
   * Timestamp when the LoRA model was created
   */
  createdAt: string;

  /**
   * Whether the model has been deleted
   */
  isDeleted: boolean;

  /**
   * Whether the model contains NSFW content
   */
  isNSFW: boolean;

  /**
   * Name of the LoRA model
   */
  name: string;

  /**
   * Array of trigger words for the LoRA model
   */
  triggers: Array<string>;

  /**
   * ID of the user who created the LoRA model
   */
  userId: string;

  /**
   * Blurred data URL for the preview image
   */
  blurDataUrl?: string | null;

  /**
   * Description of the LoRA model
   */
  description?: string | null;

  /**
   * URL to the preview image of the LoRA model
   */
  image?: string | null;

  /**
   * Information about the most recent training job
   */
  trainingJob?: ImageLoraModelRetrieveResponse.TrainingJob | null;
}

export namespace ImageLoraModelRetrieveResponse {
  /**
   * Information about the most recent training job
   */
  export interface TrainingJob {
    /**
     * Unique identifier for the training job
     */
    id: string;

    /**
     * Timestamp when the training job was created
     */
    createdAt: string;

    /**
     * Initial position in the training queue
     */
    initialQueuePosition: number | null;

    /**
     * Current status of the training job
     */
    status: 'QUEUED' | 'PROCESSING' | 'ERRORED' | 'SUCCEEDED' | 'CANCELED';

    /**
     * Brief description of the current training status
     */
    shortStatusText?: string | null;
  }
}

export interface ImageLoraModelListResponse {
  models: Array<ImageLoraModelListResponse.Model>;
}

export namespace ImageLoraModelListResponse {
  export interface Model {
    /**
     * Unique identifier for the LoRA model
     */
    id: string;

    /**
     * Timestamp when the LoRA model was created
     */
    createdAt: string;

    /**
     * Whether the model has been deleted
     */
    isDeleted: boolean;

    /**
     * Whether the model contains NSFW content
     */
    isNSFW: boolean;

    /**
     * Name of the LoRA model
     */
    name: string;

    /**
     * Array of trigger words for the LoRA model
     */
    triggers: Array<string>;

    /**
     * ID of the user who created the LoRA model
     */
    userId: string;

    /**
     * Blurred data URL for the preview image
     */
    blurDataUrl?: string | null;

    /**
     * Description of the LoRA model
     */
    description?: string | null;

    /**
     * URL to the preview image of the LoRA model
     */
    image?: string | null;

    /**
     * Information about the most recent training job
     */
    trainingJob?: Model.TrainingJob | null;
  }

  export namespace Model {
    /**
     * Information about the most recent training job
     */
    export interface TrainingJob {
      /**
       * Unique identifier for the training job
       */
      id: string;

      /**
       * Timestamp when the training job was created
       */
      createdAt: string;

      /**
       * Initial position in the training queue
       */
      initialQueuePosition: number | null;

      /**
       * Current status of the training job
       */
      status: 'QUEUED' | 'PROCESSING' | 'ERRORED' | 'SUCCEEDED' | 'CANCELED';

      /**
       * Brief description of the current training status
       */
      shortStatusText?: string | null;
    }
  }
}

export interface ImageLoraModelRetrieveDownloadURLResponse {
  downloadUrl: string | null;
}

export interface ImageLoraModelRetrieveStatusResponse {
  id: string;

  createdAt: string;

  shortStatusText: string | null;

  status: 'QUEUED' | 'PROCESSING' | 'ERRORED' | 'SUCCEEDED' | 'CANCELED';
}

export interface ImageLoraModelCreateParams {
  /**
   * Array of training images (5-30 images required)
   */
  images: Array<ImageLoraModelCreateParams.Image>;

  /**
   * Name of the LoRA model
   */
  name: string;

  /**
   * Trigger word to activate the LoRA model
   */
  triggerWord?: string;
}

export namespace ImageLoraModelCreateParams {
  export interface Image {
    /**
     * URL to the training image
     */
    url: string;

    /**
     * Description of the training image
     */
    description?: string;
  }
}

export interface ImageLoraModelListParams {
  /**
   * Cursor for pagination to get the next page of results - this is the last item's
   * ID from the previous page
   */
  cursor?: string | null;

  /**
   * Number of items to return per page
   */
  limit?: number;

  search?: string;
}

export declare namespace ImageLoraModels {
  export {
    type ImageLoraModelCreateResponse as ImageLoraModelCreateResponse,
    type ImageLoraModelRetrieveResponse as ImageLoraModelRetrieveResponse,
    type ImageLoraModelListResponse as ImageLoraModelListResponse,
    type ImageLoraModelRetrieveDownloadURLResponse as ImageLoraModelRetrieveDownloadURLResponse,
    type ImageLoraModelRetrieveStatusResponse as ImageLoraModelRetrieveStatusResponse,
    type ImageLoraModelCreateParams as ImageLoraModelCreateParams,
    type ImageLoraModelListParams as ImageLoraModelListParams,
  };
}
