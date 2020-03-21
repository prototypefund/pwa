import {st} from "springtype/core";
import {inject} from "springtype/core/di";
import {component} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface/ilifecycle";
import {ErrorMessage} from "../../component/error-message/error-message";
import {ref} from "springtype/core/ref";
import {IonicJSX} from "st-ionic";
import {AuthService} from "../../service/auth";
import tpl from "./login.tpl";
import "./login.scss";
import {Form} from "springtype/web/form";

@component({
  tpl
})
export class LoginPage extends st.component implements ILifecycle {

  static ROUTE = "login";

  @inject(AuthService)
  authService: AuthService;

  @ref
  formRef: Form;

  @ref
  password: IonicJSX.IonInput;

  @ref
  errorMessage: ErrorMessage;

  onLoginClick = async () => {

    try {
      if(await this.formRef.validate()){
          const data = this.formRef.getState() as {email: string, password: string} ;
          await this.authService.login(data.email, data.password);
      }

      console.log('login accomplished')

    } catch (e) {
      this.errorMessage.message = e.message;
    }
  };

  onRegisterClick = async () => {

    try {
      if(await this.formRef.validate()){
        const data = this.formRef.getState() as {email: string, password: string} ;
        await this.authService.register(data.email, data.password);
      }

      console.log('register accomplished')

    } catch (e) {
      this.errorMessage.message = e.message;
    }
  };

  onAfterInitialRender() {
    this.authService.autoLogin();
  }

  onForgotPassword = () => {
    console.log('onForgotPassword')
  };
}
