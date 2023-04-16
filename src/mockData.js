export const loginFormFields = [
    {
        field: 'login',
        type: 'email',
        displayName: 'Login',
        labelFor: 'login',
        placeholder: 'olala@gmail.com',
    },
    {
        field: 'password',
        type: 'text',
        displayName: 'Password',
        labelFor: 'password',
        placeholder: 'your password',
    },
];

export const profileFields = [
    {
        field: 'first_name',
        type: 'text',
        displayName: 'Name',
        labelFor: 'name',
        placeholder: 'your name',
    },
    {
        field: 'second_name',
        type: 'text',
        displayName: 'Surname',
        labelFor: 'surname',
        placeholder: 'your surname',
    },
    {
        field: 'email',
        type: 'email',
        displayName: 'Email',
        labelFor: 'email',
        placeholder: 'olala@gmail.com',
    },
    {
        field: 'phone',
        type: 'tel',
        displayName: 'Telephone number',
        labelFor: 'phone',
        placeholder: '+35 (678)-900-00-00',
    },
];

export const baseFields = [
    ...profileFields,
    ...loginFormFields,
]

export const profileSettingsFormFields = [
    ...profileFields,
    {
        field: 'display_name',
        type: 'text',
        displayName: 'Display name',
        labelFor: 'displayName',
        placeholder: 'display name',
    },
];

export const profilePasswordChangeFormFields = [
    {
        field: 'oldPassword',
        type: 'text',
        displayName: 'Old password',
        labelFor: 'oldPassword',
        placeholder: 'your old password',
    },
    {
        field: 'newPassword',
        type: 'text',
        displayName: 'New password',
        labelFor: 'newPassword',
        placeholder: 'your new password',
    },
    {
        field: 'newPassword',
        type: 'text',
        displayName: 'Repeat password',
        labelFor: 'newPassword_repeat',
        placeholder: 'Repeat password',
    },
];

export const chats = [
    {
        chatName: 'Chat name',
        avatarImage: '',
        unreadCount: 23,
        time: '23:45',
    },
    {
        chatName: 'Interesting chat',
        avatarImage: '',
        unreadCount: 34,
        time: '23:46',
    },
    {
        chatName: 'Chat name',
        avatarImage: '',
        unreadCount: 45,
        time: '23:45',
    },
    {
        chatName: 'Chat name',
        avatarImage: '',
        unreadCount: 56,
        time: '23:45',
    },
]

export const profileInfo = {
    avatar: '',
    displayName: 'Kate@Rocky',
}

export const chatInfo = {
    avatarImage: '',
    chatId: '',
    chatName: 'Interesting chat',
    memberIds: [],
    unreadCount: 42,
    time: '23:45',
}

export const messages = [
    {
        content: 'It was a dark and stormy night...',
        chatId: '',
        messageId: '',
        userId: '',
        time: '23:41',
        seen: true,
    },
    {
        content: 'Yep...',
        chatId: '',
        messageId: '',
        userId: '',
        time: '23:45',
        seen: false,
    },
]

export const actionsObject = {
    edit: {
        displayName: 'attach',
        icon: '',
        action: 'alert("attach!")',
    },
    sticker: {
        displayName: 'sticker',
        icon: '',
        action: 'alert("sticker popup!")',
    },
    uploadImage: {
        displayName: 'image',
        icon: '',
        action: '',
    },
}

export const errors = {
    404: '[ img / 404 ]',
    500: '5**',
    501: '5**',
}
