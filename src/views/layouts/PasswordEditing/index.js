import template from './PasswordEditing.hbs'
import { BackButton, InputField, LinkButton } from '../../components/index';
import { profilePasswordChangeFormFields } from '../../../mockData';

const PasswordEditing = () => {
    const context = {
        BackButton: BackButton(),
        InputField: InputField(),
        LinkButton: LinkButton(),

        fields: profilePasswordChangeFormFields,
    }

    const source = { ...context }

    return template(source)
}

export default PasswordEditing;
