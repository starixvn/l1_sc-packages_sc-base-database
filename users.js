import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    local: {
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true, hide: true },
        ban_pass: { type: Number, default: 0 },
        ban_login: { type: Boolean, default: false },
        token: String,
        lastDate: String,
        lastLogin: String,
        regDate: Date,
        clientId: String,
        memberId: Number,
        memberName: String,
        currency: String,
    },
    facebook: {
        id: String,
        token: String,
        email: String,
        name: String,
        regDate: Date,
    },
    twitter: {
        id: String,
        token: String,
        email: String,
        name: String,
        regDate: Date,
    },
    google: {
        id: String,
        token: String,
        email: String,
        name: String,
        regDate: Date,
    },
});

export default mongoose.model('Users', Schema);
