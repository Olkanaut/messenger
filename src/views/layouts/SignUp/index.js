import template from './SignUp.hbs'
import { InputField, LinkButton } from '../../components/index';
import { baseFields } from '../../../mockData';

const SignUp = () => {
    const context = {
        InputField: InputField(),
        LinkButton: LinkButton(),

        fields: baseFields,
    }

    const source = { ...context }

    return template(source)
}

export default SignUp;
