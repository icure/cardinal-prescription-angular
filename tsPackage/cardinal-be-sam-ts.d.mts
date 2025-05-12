import * as options from './options.mjs'
import * as utils from './utils.mjs'
import * as sdk from './sdk.mjs'
import * as model from './model.mjs'
import * as api from './api.mjs'
type Nullable<T> = T | null | undefined
/** @deprecated  */
export declare const initHook: { get(): any; };
export declare class RevisionConflictException extends Error {
    constructor();
}
export declare const InternalSdkInitializers: {
    getInstance(): {
        initializeSdk(applicationId: Nullable<string>, apiUrl: string, credentials: options.Credentials): Promise<sdk.CardinalBeSamApi>;
    };
};
export declare function base32Encode(bytes: Int8Array): string;
export declare function base32Decode(base32String: string): Int8Array;
export declare function hexEncode(bytes: Int8Array): string;
export declare function hexDecode(hexString: string): Int8Array;
export declare function base64Encode(bytes: Int8Array): string;
export declare function base64Decode(base64String: string): Int8Array;
export declare interface PaginatedListIterator<T extends any> {
    hasNext(): Promise<boolean>;
    next(limit: number): Promise<Array<T>>;
    readonly __doNotUseOrImplementIt: {
        readonly "com.icure.cardinal.sdk.js.utils.pagination.PaginatedListIterator": unique symbol;
    };
}
export * from './options.mjs'
export * from './utils.mjs'
export * from './sdk.mjs'
export * from './model.mjs'
export * from './api.mjs'
