import * as actions from "./types";

export const startLoader = () => {
    return {
        type: actions.START_LOADER
    };
};

export const finishedLoader = () => {
    return {
        type: actions.FINISHED_LOADER
    };
};
