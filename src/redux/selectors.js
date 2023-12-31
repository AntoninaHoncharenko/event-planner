export const selectEvents = state => state.events.events;

export const selectAllEvents = state => state.events.allEvents;

export const selectOneEvent = state => state.events.oneEvent;

export const selectLoading = state => state.events.isLoading;

export const selectError = state => state.events.error;

export const selectFilter = state => state.filter;
