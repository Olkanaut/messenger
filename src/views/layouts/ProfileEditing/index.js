import template from './ProfileEditing.hbs'
import { BackButton, InputField, LinkButton, PencilIconButton} from '../../components/index';
import { profileSettingsFormFields } from '../../../mockData';

const ProfileEditing = () => {
    const context = {
        BackButton: BackButton(),
        InputField: InputField(),
        LinkButton: LinkButton(),
        PencilIconButton: PencilIconButton(),

        fields: profileSettingsFormFields,
    }

    const source = { ...context }

    return template(source)
}

export default ProfileEditing;
