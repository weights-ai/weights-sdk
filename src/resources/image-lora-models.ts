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

  /**
   * Searches through all public image LoRA models in the database. Results are
   * sorted by creation date. This endpoint does not require authentication.
   */
  search(
    query: ImageLoraModelSearchParams,
    options?: RequestOptions,
  ): APIPromise<ImageLoraModelSearchResponse> {
    return this._client.get('/image-lora-models/search', { query, ...options });
  }
}

export interface ImageLoraModelCreateResponse {
  id: string;

  trainingJobId: string;
}

export interface ImageLoraModelRetrieveResponse {
  id: string;

  createdAt: string;

  isDeleted: boolean;

  isNSFW: boolean;

  name: string;

  triggers: Array<string>;

  userId: string;

  blurDataUrl?: string | null;

  description?: string | null;

  image?: string | null;

  trainingJob?: ImageLoraModelRetrieveResponse.TrainingJob | null;
}

export namespace ImageLoraModelRetrieveResponse {
  export interface TrainingJob {
    id: string;

    createdAt: string;

    initialQueuePosition: number | null;

    status: 'QUEUED' | 'PENDING_WORKER' | 'PROCESSING' | 'ERRORED' | 'SUCCEEDED' | 'CANCELED';

    shortStatusText?: string | null;
  }
}

export interface ImageLoraModelListResponse {
  models: Array<ImageLoraModelListResponse.Model>;
}

export namespace ImageLoraModelListResponse {
  export interface Model {
    id: string;

    createdAt: string;

    isDeleted: boolean;

    isNSFW: boolean;

    name: string;

    triggers: Array<string>;

    userId: string;

    blurDataUrl?: string | null;

    description?: string | null;

    image?: string | null;

    trainingJob?: Model.TrainingJob | null;
  }

  export namespace Model {
    export interface TrainingJob {
      id: string;

      createdAt: string;

      initialQueuePosition: number | null;

      status: 'QUEUED' | 'PENDING_WORKER' | 'PROCESSING' | 'ERRORED' | 'SUCCEEDED' | 'CANCELED';

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

  queuePosition: number | null;

  shortStatusText: string | null;

  status: 'QUEUED' | 'PENDING_WORKER' | 'PROCESSING' | 'ERRORED' | 'SUCCEEDED' | 'CANCELED';
}

export interface ImageLoraModelSearchResponse {
  models: Array<ImageLoraModelSearchResponse.Model>;
}

export namespace ImageLoraModelSearchResponse {
  export interface Model {
    id: string;

    createdAt: string;

    isDeleted: boolean;

    isNSFW: boolean;

    name: string;

    triggers: Array<string>;

    userId: string;

    blurDataUrl?: string | null;

    description?: string | null;

    image?: string | null;

    trainingJob?: Model.TrainingJob | null;
  }

  export namespace Model {
    export interface TrainingJob {
      id: string;

      createdAt: string;

      initialQueuePosition: number | null;

      status: 'QUEUED' | 'PENDING_WORKER' | 'PROCESSING' | 'ERRORED' | 'SUCCEEDED' | 'CANCELED';

      shortStatusText?: string | null;
    }
  }
}

export interface ImageLoraModelCreateParams {
  images: Array<ImageLoraModelCreateParams.Image>;

  name: string;

  triggerWord?: string;

  validationPrompt?: string;
}

export namespace ImageLoraModelCreateParams {
  export interface Image {
    url: string;

    description?: string;
  }
}

export interface ImageLoraModelListParams {
  cursor?: string | null;

  limit?: number;

  search?: string;
}

export interface ImageLoraModelSearchParams {
  search: string;

  cursor?: string | null;

  limit?: number;
}

export declare namespace ImageLoraModels {
  export {
    type ImageLoraModelCreateResponse as ImageLoraModelCreateResponse,
    type ImageLoraModelRetrieveResponse as ImageLoraModelRetrieveResponse,
    type ImageLoraModelListResponse as ImageLoraModelListResponse,
    type ImageLoraModelRetrieveDownloadURLResponse as ImageLoraModelRetrieveDownloadURLResponse,
    type ImageLoraModelRetrieveStatusResponse as ImageLoraModelRetrieveStatusResponse,
    type ImageLoraModelSearchResponse as ImageLoraModelSearchResponse,
    type ImageLoraModelCreateParams as ImageLoraModelCreateParams,
    type ImageLoraModelListParams as ImageLoraModelListParams,
    type ImageLoraModelSearchParams as ImageLoraModelSearchParams,
  };
}
