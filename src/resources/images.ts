// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Images extends APIResource {
  /**
   * Creates a new image generation job using the provided prompt. The job will be
   * queued for processing.
   */
  create(body: ImageCreateParams, options?: RequestOptions): APIPromise<ImageCreateResponse> {
    return this._client.post('/images/create', { body, ...options });
  }

  /**
   * Creates a new image edit job using the provided prompt and input image. The job
   * will be queued for processing.
   */
  edit(body: ImageEditParams, options?: RequestOptions): APIPromise<ImageEditResponse> {
    return this._client.post('/images/edit', { body, ...options });
  }
}

export interface ImageCreateResponse {
  id: string;

  createdAt: string;

  dimensions: 'SQUARE' | 'PORTRAIT' | 'LANDSCAPE';

  lora: ImageCreateResponse.Lora | null;

  numImages: number;

  prompt: string;

  secondaryLora: ImageCreateResponse.SecondaryLora | null;

  status: 'QUEUED' | 'PENDING_WORKER' | 'PROCESSING' | 'ERRORED' | 'SUCCEEDED' | 'CANCELED';

  type: 'IMAGE' | 'VIDEO' | 'EDIT' | 'REMIX' | 'INPAINT' | 'UPSCALE';

  updatedAt: string;

  outputUrls?: Array<string>;
}

export namespace ImageCreateResponse {
  export interface Lora {
    id: string;

    name: string;
  }

  export interface SecondaryLora {
    id: string;

    name: string;
  }
}

export interface ImageEditResponse {
  id: string;
}

export interface ImageCreateParams {
  prompt: string;

  dimensions?: 'SQUARE' | 'PORTRAIT' | 'LANDSCAPE';

  numImages?: number;

  secondStyleId?: string;

  styleId?: string;

  tertiaryStyleId?: string;
}

export interface ImageEditParams {
  inputImageUrl: string;

  prompt: string;
}

export declare namespace Images {
  export {
    type ImageCreateResponse as ImageCreateResponse,
    type ImageEditResponse as ImageEditResponse,
    type ImageCreateParams as ImageCreateParams,
    type ImageEditParams as ImageEditParams,
  };
}
