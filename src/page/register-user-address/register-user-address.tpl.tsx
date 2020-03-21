import { tsx } from "springtype/web/vdom";
import { MatInput } from "../../component/mat/mat-input";
import { email, minLength, required } from "springtype/core/validate";
import { Form } from "springtype/web/form";
import { RegisterUserAddressPage } from "./register-user-address";
import { MatTextarea } from "../../component/mat/mat-textarea";
import { MatCheckbox } from "../../component/mat/mat-checkbox";
import { LogoRow } from "../../component/logo-row/logo-row";

export default (component: RegisterUserAddressPage) => (
    <fragment>
        <div class="container">

            <LogoRow />
            <Form ref={{ formRef: component }} class="col s12">
                <div class="row">
                    <MatInput name="username" label="Username"
                        class={['col', 's12', 'm6', 'offset-m3', 'l4', 'offset-l4']}
                        helperText="Enter your full name here"
                        validators={[required]}
                        successMessage={'right'}
                        errorMessage={{
                            required: 'This field is required'
                        }}>
                    </MatInput>
                    <MatTextarea name="address" label="Address"
                        class={['col', 's12', 'm6', 'offset-m3', 'l4', 'offset-l4']}
                        helperText="Enter your full address here"
                        validators={[required]}
                        successMessage={'right'}
                        errorMessage={{
                            required: 'This field is required'
                        }}>
                    </MatTextarea>
                    <div class={['col', 's12', 'm6', 'offset-m3', 'l4', 'offset-l4']}>
                        <p>Since there are a lot of old people in this country who are not so afine with computers, people will need you to answer the phone calls. </p>
                    </div>
                    <div class={['col', 's12', 'm6', 'offset-m3', 'l4', 'offset-l4']}>
                        <MatCheckbox name="acceptedPoneCalls" label="Accept phone calls" />
                    </div>
                </div>
                <div class="row">
                    <a class={['waves-effect', 'waves-light', 'btn', 'col', 's12', 'm6', 'offset-m3', 'l4', 'offset-l4']}
                        onClick={() => component.onNextClick()}>Next</a>
                </div>
            </Form>
        </div>
    </fragment>
)

export interface IRegisterUserAddressForm {
    username: string;
    address: string,
    acceptedPoneCalls: boolean;
}
