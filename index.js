import mongoose from 'mongoose';
import { middlewares } from 'sc-common';
import gameConfigs from './game-configs.js';
import userInfos from './user-infos.js';
import userSessions from './user-sessions.js';
import users from './users.js';

const init = async (config) => {
    await middlewares.database.configureDatabase(mongoose, config);
};

export { init, gameConfigs, userInfos, users, userSessions };
