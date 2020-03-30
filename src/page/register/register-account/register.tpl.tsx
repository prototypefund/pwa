import { tsx } from "springtype/web/vdom";
import { MatInput } from "../../../component/mat/mat-input";
import { email, minLength, required } from "springtype/core/validate";
import { Form } from "springtype/web/form";
import { RegisterPage } from "./register";
import { LogoRow } from "../../../component/logo-row/logo-row";
import { ErrorMessage } from "../../../component/error-message/error-message";
import { TERMS_OF_USE_URL, PRIVACY_STATEMENT_URL } from "../../../config/website-urls";

export default (component: RegisterPage) => (
    <fragment>
        <div class="container">
            <LogoRow />
            <Form ref={{ formRef: component }} class="col s12">
                <div class="row">
                    <MatInput name="email" label="E-Mail"
                        class={['col', 's12', 'm6', 'offset-m3', 'l6', 'offset-l3']}
                        helperText="Deine E-Mail-Adresse"
                        validators={[required, email]}
                        errorMessage={{
                            required: 'Das ist ein Pflichtfeld',
                            'email': 'Keine gültige E-Mail'
                        }}>
                    </MatInput>
                    <MatInput name="password" label="Passwort" type="password"
                        class={['col', 's12', 'm6', 'offset-m3', 'l6', 'offset-l3']}
                        helperText="Bitte wähle ein Passwort"
                        validators={[required, minLength(7)]}
                        errorMessage={{
                            required: 'Das ist ein Pflichtfeld',
                            'min-length': 'Bitte mindestens 7 Zeichen'
                        }}>
                    </MatInput>
                </div>

                <div class="row">
                    <div class={['col', 's12', 'm6', 'offset-m3', 'l6', 'offset-l3']}>
                        Bitte beachte unsere <a href={TERMS_OF_USE_URL} target="_blank">AGB</a> und <a href={PRIVACY_STATEMENT_URL} target="_blank">Datenschutzerklärung</a>.
                    </div>
                </div>

                <div class="row">
                    <ErrorMessage ref={{ errorMessage: component }}
                        class={['col', 's12', 'm6', 'offset-m3', 'l6', 'offset-l3']} />
                </div>
                <div class="row">
                    <a class={['waves-effect', 'waves-light', 'btn', 'col', 's5', 'offset-m3', 'm2', 'offset-l3', 'l2']}
                        onClick={() => component.onBackClick()}>Zurück</a>
                    <div class="col s2 m2 l2"></div>
                    <a class={['waves-effect', 'waves-light', 'btn', 'col', 's5', 'm2', 'l2']}
                        onClick={() => component.onNextClick()}>Weiter</a>
                </div>
            </Form>
        </div>
    </fragment>
)

export interface IRegisterFormState {
    email: string;
    password: string;
    accepted_privacy_policy: boolean;
    accepted_terms_of_use: boolean;
}
