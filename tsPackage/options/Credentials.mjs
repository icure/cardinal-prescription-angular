export var Credentials;
(function (Credentials) {
    let ThirdPartyProvider;
    (function (ThirdPartyProvider) {
        ThirdPartyProvider["GOOGLE"] = "GOOGLE";
    })(ThirdPartyProvider = Credentials.ThirdPartyProvider || (Credentials.ThirdPartyProvider = {}));
    class UsernamePassword {
        constructor(
        /**
         * A public identifier of the user logging in. This could be:
         * - {@link User.id}
         * - {@link Group.id}:{@link User.id}
         * - {@link User.login}
         * - {@link User.email}
         */
        username, 
        /**
         * The password of the user
         */
        password) {
            this.username = username;
            this.password = password;
        }
    }
    Credentials.UsernamePassword = UsernamePassword;
    class UsernameLongToken {
        constructor(
        /**
         * A public identifier of the user logging in. This could be:
         * - {@link User.id}
         * - {@link Group.id}:{@link User.id}
         * - {@link User.login}
         * - {@link User.email}
         */
        username, 
        /**
         * A long-lived token of the user
         */
        token) {
            this.username = username;
            this.token = token;
        }
    }
    Credentials.UsernameLongToken = UsernameLongToken;
    class ThirdPartyAuth {
        constructor(
        /**
         * A token used to perform the third party authentication
         */
        token, 
        /**
         * The authentication provider
         */
        provider) {
            this.token = token;
            this.provider = provider;
        }
    }
    Credentials.ThirdPartyAuth = ThirdPartyAuth;
    class JwtCredentials {
        constructor(
        /**
         * A refresh token of the user
         */
        refresh, 
        /**
         * An initial bearer token of the user, optional.
         */
        bearer) {
            this.refresh = refresh;
            this.bearer = bearer;
        }
    }
    Credentials.JwtCredentials = JwtCredentials;
})(Credentials || (Credentials = {}));
//# sourceMappingURL=Credentials.mjs.map