import { SamV2Api } from "../api/SamV2Api.mjs";
import { Credentials } from "../options/Credentials.mjs";
export interface CardinalBeSamApi {
    readonly sam: SamV2Api;
}
export declare namespace CardinalBeSamSdk {
    function initialize(applicationId: string | undefined, apiUrl: string, credentials: Credentials): Promise<CardinalBeSamApi>;
}
