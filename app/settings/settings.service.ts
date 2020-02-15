import { SettingsModel } from '../db/models';

export const getSettings = () => SettingsModel.findOne();

export const updateAvailableSizes = (availableSizes: [string]) => SettingsModel
    .updateOne({}, availableSizes)

