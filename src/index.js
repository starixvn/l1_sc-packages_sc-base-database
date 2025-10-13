import mongoose from "mongoose";
import { middlewares } from "sc-common";
import Currencies from "./currencies";
import CurrencyGroupGames from "./currency-group-games";
import CurrencyGroups from "./currency-groups";
import ExchangeRates from "./exchange-rates";
import gameConfigs from "./game-configs.js";
import gameNotifications from "./game_notifications.js";
import PartnerConfigs from "./partner-config.js";
import userInfos from "./user-infos.js";
import userSessions from "./user-sessions.js";
import users from "./users.js";

const init = async (configs) => {
    await middlewares.database.configureDatabase(mongoose, configs);
};

export {
    Currencies,
    CurrencyGroupGames,
    CurrencyGroups,
    ExchangeRates,
    PartnerConfigs,
    gameConfigs,
    gameNotifications,
    init,
    userInfos,
    userSessions,
    users
};

