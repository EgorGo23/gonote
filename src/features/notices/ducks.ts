import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotificationsTypes } from '@korus/leda';

// Получаем глобальные настройки приложения
import { config } from '@common/config';

const initialState: NotificationsTypes.Item[] = [];

export type NoticeState = typeof initialState;

const toPushNotice = (
  _: NoticeState,
  { payload }: PayloadAction<NotificationsTypes.Item>,
): NoticeState => [payload];

const toClearNotices = (): NoticeState => initialState;

const noticeSlice = createSlice({
  name: config.modules.notices,
  initialState,
  reducers: {
    pushNotice: toPushNotice,
    clearNotices: toClearNotices,
  },
});

export const noticeReducer = noticeSlice.reducer;

export const actions = {
  ...noticeSlice.actions,
};
