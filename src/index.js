import ErrorPage from './views/layouts/ErrorPage'
import Handlebars from 'handlebars';
import Login from './views/layouts/Login/index.js'
import Messages from './views/layouts/Messages'
import PasswordEditing from './views/layouts/PasswordEditing'
import Profile from './views/layouts/Profile'
import ProfileEditing from './views/layouts/ProfileEditing'
import SignUp from './views/layouts/SignUp'

import * as components from './views/components/index'

Handlebars.registerPartial('AvatarInput', components.AvatarInput);
Handlebars.registerPartial('BackButton', components.BackButton);
Handlebars.registerPartial('ChatBody', components.ChatBody);
Handlebars.registerPartial('ChatHeader', components.ChatHeader);
Handlebars.registerPartial('ChatFooter', components.ChatFooter);
Handlebars.registerPartial('ChatListItem', components.ChatListItem);
Handlebars.registerPartial('ChatMessage', components.ChatMessage);
Handlebars.registerPartial('ErrorPageContent', components.ErrorPageContent);
Handlebars.registerPartial('InputField', components.InputField);
Handlebars.registerPartial('InputSearch', components.InputSearch);
Handlebars.registerPartial('LinkButton', components.LinkButton);
Handlebars.registerPartial('PencilIconButton', components.PencilIconButton);

Handlebars.partials = {
    'AvatarInput': components.AvatarInput,
    'BackButton': components.BackButton,
    'ChatBody': components.ChatBody,
    'ChatFooter': components.ChatFooter,
    'ChatHeader': components.ChatHeader,
    'ChatListItem': components.ChatListItem,
    'ChatMessage': components.ChatMessage,
    'ErrorPageContent': components.ErrorPageContent,
    'InputField': components.InputField,
    'InputSearch': components.InputSearch,
    'LinkButton': components.LinkButton,
    'PencilIconButton': components.PencilIconButton,
}

const root = document.querySelector('#root')

if (!root) {
    throw new Error("no root")
}

const path = window.location.pathname;

switch (path) {
    case ('/'):
        root.innerHTML = Login();
        break;
    case ('/signup'):
        root.innerHTML = SignUp();
        break;
    case ('/profile'):
        root.innerHTML = Profile();
        break;
    case ('/profile-editing'):
        root.innerHTML = ProfileEditing();
        break;
    case ('/password-editing'):
        root.innerHTML = PasswordEditing();
        break;
    case ('/messages'):
        root.innerHTML = Messages();
        break;
    case ('/404'):
        root.innerHTML = ErrorPage(404);
        break;
    case ('/500'):
        root.innerHTML = ErrorPage(500);
        break;
    default:
        root.innerHTML = ErrorPage(404);
        break;
}
