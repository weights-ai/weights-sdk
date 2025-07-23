// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class User extends APIResource {
  /**
   * Returns the profile information of the currently authenticated user, including
   * their ID, email, name, role, and profile image.
   */
  retrieve(options?: RequestOptions): APIPromise<UserRetrieveResponse> {
    return this._client.get('/user', options);
  }
}

export interface UserRetrieveResponse {
  user: UserRetrieveResponse.User;
}

export namespace UserRetrieveResponse {
  export interface User {
    id: string;

    email?: string | null;

    image?: string | null;

    name?: string | null;

    role?: string | null;
  }
}

export declare namespace User {
  export { type UserRetrieveResponse as UserRetrieveResponse };
}
