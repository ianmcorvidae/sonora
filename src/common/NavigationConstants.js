/**
 * Constants that define navigation routes.
 * Warning: server/index.js expects each value to be a string.
 */
export default {
    ADMIN: "admin",
    ANALYSES: "analyses",
    APPS: "apps",
    ERROR: "error",
    DASHBOARD: "dashboard",
    DATA: "data",
    DETAILS: "details",
    HELP: "help",
    LOGIN: "login",
    LOGOUT: "logout",
    MORE: "more",
    NOTIFICATIONS: "notifications",
    NOTIFICATION_WS: "/websocket/notifications",
    REF_GENOMES: "refgenomes",
    RELAUNCH: "relaunch",
    SEARCH: "search",
    SETTINGS: "settings",
    TOOLS: "tools",
    VICE: "vice",
    YOUTUBE_EMBED_BASE: "https://youtu.be",
};

export const NavigationParams = {
    // This could be updated with more options in the future,
    // such as CONTENTS, DETAILS, or LISTING.
    VIEW: { METADATA: "metadata" },
};
