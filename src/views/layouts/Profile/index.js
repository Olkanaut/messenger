import template from './Profile.hbs'
import { AvatarInput, BackButton, InputField, LinkButton, PencilIconButton} from '../../components/index';
import { profileSettingsFormFields } from '../../../mockData';

const Profile = () => {
    const context = {
        AvatarInput: AvatarInput(),
        BackButton: BackButton(),
        InputField: InputField(),
        LinkButton: LinkButton(),
        PencilIconButton: PencilIconButton(),

        fields: profileSettingsFormFields,
    }

    const source = { ...context }

    return template(source)
}

export default Profile;
