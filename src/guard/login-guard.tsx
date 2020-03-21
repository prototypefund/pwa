import {inject, injectable} from "springtype/core/di";
import {tsx} from "springtype/web/vdom";
import {AuthService} from "../service/auth";
import {IRouteMatch} from "springtype/web/router/interface/iroute-match";
import {IRouterGuardResponse} from "springtype/web/router/interface/irouter-guard-response";
import {ConsumerOrderListPage} from "../page/consumer-order-list/consumer-order-list";
import {st} from "springtype/core";
import {RegisterUserAddressPage} from "../page/register-user-address/register-user-address";
import {RegisterService} from "../service/register";
import {LoginPage} from "../page/login/login";
import {FirebaseService} from "../service/firebase";
import {FIREBASE_CONFIG} from "../config/firebase";

@injectable
export class LoginGuard {


    @inject(AuthService)
    authService: AuthService;

    @inject(FirebaseService, FIREBASE_CONFIG)
    firebaseService: FirebaseService;

    @inject(RegisterService)
    registerService: RegisterService;


    autoLogin = async (match: IRouteMatch): Promise<IRouterGuardResponse> => {
        if (await this.authService.autoLogin()) {
            return ConsumerOrderListPage.ROUTE
        }
        return true;
    };

    loggedIn = async (match: IRouteMatch): Promise<IRouterGuardResponse> => {
        if (!await this.authService.isLoggedIn()) {
            return LoginPage.ROUTE;
        }
        const loggedInUserId = this.firebaseService.getLoggedInUserId();
        st.debug('guardLoggedIn loggedInUserId', loggedInUserId);

        const userProfile = await this.registerService.isUserProfileCompleted(loggedInUserId);
        if (!userProfile) {
            return RegisterUserAddressPage.ROUTE;
        }
        return true;
    };
}

