import template from './Login.hbs'
import { InputField, LinkButton } from '../../components/index';
import { loginFormFields } from '../../../mockData';

const Login = () => {
    const context = {
        InputField: InputField(),
        LinkButton: LinkButton(),

        fields: loginFormFields,
    }

    const source = { ...context }

    return template(source)
}

export default Login;
