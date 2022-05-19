import mongoo from 'mongoose';

const schema = new mongoo.Schema({
    nickname: {
        type: String,
        required: false,
        default: 'User 99'
    },
    fullname: {
        type: String,
        required: false,
        default: ''  
    },
    gender: {
        type: String,
        required: false,
        default: 'Nam'
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: false,
    },
    avatar: {
        type: String,
        required: false,
        default: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
    },
    bio: {
        type: String,
        required: false,
        default: '',
    },
    address: {
        type: String,
        required: false,
        default: 'Viet Nam',
    },
}, {
    timestamps: true
});

export const UserModel = mongoo.model('Users', schema);