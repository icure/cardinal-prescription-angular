export declare namespace Credentials {
    enum ThirdPartyProvider {
        GOOGLE = "GOOGLE"
    }
    class UsernamePassword {
        /**
         * A public identifier of the user logging in. This could be:
         * - {@link User.id}
         * - {@link Group.id}:{@link User.id}
         * - {@link User.login}
         * - {@link User.email}
         */
        readonly username: string;
        /**
         * The password of the user
         */
        readonly password: string;
        constructor(
        /**
         * A public identifier of the user logging in. This could be:
         * - {@link User.id}
         * - {@link Group.id}:{@link User.id}
         * - {@link User.login}
         * - {@link User.email}
         */
        username: string, 
        /**
         * The password of the user
         */
        password: string);
    }
    class UsernameLongToken {
        /**
         * A public identifier of the user logging in. This could be:
         * - {@link User.id}
         * - {@link Group.id}:{@link User.id}
         * - {@link User.login}
         * - {@link User.email}
         */
        readonly username: string;
        /**
         * A long-lived token of the user
         */
        readonly token: string;
        constructor(
        /**
         * A public identifier of the user logging in. This could be:
         * - {@link User.id}
         * - {@link Group.id}:{@link User.id}
         * - {@link User.login}
         * - {@link User.email}
         */
        username: string, 
        /**
         * A long-lived token of the user
         */
        token: string);
    }
    class ThirdPartyAuth {
        /**
         * A token used to perform the third party authentication
         */
        readonly token: string;
        /**
         * The authentication provider
         */
        readonly provider: ThirdPartyProvider;
        constructor(
        /**
         * A token used to perform the third party authentication
         */
        token: string, 
        /**
         * The authentication provider
         */
        provider: ThirdPartyProvider);
    }
    class JwtCredentials {
        /**
         * A refresh token of the user
         */
        readonly refresh: string;
        /**
         * An initial bearer token of the user, optional.
         */
        readonly bearer?: string | undefined;
        constructor(
        /**
         * A refresh token of the user
         */
        refresh: string, 
        /**
         * An initial bearer token of the user, optional.
         */
        bearer?: string | undefined);
    }
}
export type Credentials = Credentials.UsernamePassword | Credentials.UsernameLongToken | Credentials.ThirdPartyAuth | Credentials.JwtCredentials;
