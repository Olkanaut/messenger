const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

const handlebars = require('express-handlebars');

app.set('view engine', 'hbs');

app.engine('hbs', handlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    extname: '.hbs',
    defaultLayout: 'defaultLayout',
    partialsDir: __dirname + '/views/partials'
}));

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('login', {layout : 'index', fields: loginFormFields});
});

app.get('/signup', (req, res) => {
    res.render('signup', {layout : 'index', fields: baseFields});
});

app.get('/messages', (req, res) => {
    res.render('messages', {layout : 'index', chats, profileInfo, chatInfo, messages, actionsObject});
});

app.get('/profile', (req, res) => {
    res.render('profile', {layout : 'index', fields: profileSettingsFormFields, fieldsDisabled: true});
});

app.get('/profile-editing', (req, res) => {
    res.render('profile-editing', {layout : 'index', fields: profileSettingsFormFields});
});

app.get('/profile-password-editing', (req, res) => {
    res.render('profile-password-editing', {layout : 'index', fields: profilePasswordChangeFormFields});
});

app.get('/404', (req, res) => {
    res.render('404', {layout : 'index', image: errors[404]});
});

app.get('/500', (req, res) => {
    res.render('500', {layout : 'index', image: errors[500]});
});

app.listen(PORT, () => console.log(`App listening to port ${PORT}`));


const loginFormFields = [
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

const profileFields = [
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

const baseFields = [
    ...profileFields,
    ...loginFormFields,
]

const profileSettingsFormFields = [
    ...profileFields,
    {
        field: 'display_name',
        type: 'text',
        displayName: 'Display name',
        labelFor: 'displayName',
        placeholder: 'display name',
    },
];

const profilePasswordChangeFormFields = [
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

const chats = [
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

const profileInfo = {
    avatar: '',
    displayName: 'Kate@Rocky',
}

const chatInfo = {
    avatarImage: '',
    chatId: '',
    chatName: 'Interesting chat',
    memberIds: [],
    unreadCount: 42,
    time: '23:45',
}

const messages = [
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

const actionsObject = {
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

const errors = {
    404: '[ img / 404 ]',
    500: '5**',
    501: '5**',
}
