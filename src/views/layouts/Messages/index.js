import template from './Messages.hbs'
import { InputSearch, ChatListItem, ChatHeader, ChatBody, ChatFooter } from '../../components/index';
import { chats, profileInfo, chatInfo, messages, actionsObject } from '../../../mockData';

const Messages = () => {
    const context = {
        InputSearch: InputSearch(),
        ChatListItem: ChatListItem(),
        ChatHeader: ChatHeader(),
        ChatBody: ChatBody(),
        ChatFooter: ChatFooter(),

        chats,
        profileInfo,
        chatInfo,
        messages,
        actionsObject,
    }

    const source = { ...context }

    return template(source)
}

export default Messages;
