import { SplashscreenPage } from "./splashscreen";
import { tsx } from "springtype/web/vdom";
import { LogoRow } from "../../component/logo-row/logo-row";

export default (component: SplashscreenPage) => (
    <fragment>
        <div class="page-splashscreen">
            <img src={require("../../../assets/images/logo_white_transparent.png")} />
        </div>
    </fragment>
)