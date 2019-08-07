/**
 * Item Types
 */
export const itemTypes = {
    SAVE: "item/SAVE",
    SAVE_SUCCESS: "item/SAVE_SUCCESS",
    SAVE_ERROR: "items/SAVE_ERROR",

    UPDATE: "item/UPDATE",
    UPDATE_SUCCESS: "item/UPDATE_SUCCESS",
    UPDATE_ERROR: "item/UPDATE_ERROR",

    REMOVE: "item/REMOVE",
    REMOVE_SUCCESS: "item/REMOVE_SUCCESS",
    REMOVE_ERROR: "item/REMOVE_ERROR",

    FIND_ALL: "item/FIND_ALL",
    FIND_ALL_SUCCESS: "item/FIND_ALL_SUCCESS",
    FIND_ALL_ERROR: "item/FIND_ALL_ERROR"
};

/**
 * Item Actions
 */
export const itemActions = {
    saveItem: item => ({
        type: itemTypes.SAVE,
        payload: item
    }),
    saveItemSuccess: () => ({
        type: itemTypes.SAVE_SUCCESS
    }),
    saveItemError: error => ({
        type: itemTypes.SAVE_ERROR,
        payload: error
    }),

    updateItem: item => ({
        type: itemTypes.UPDATE,
        payload: item
    }),
    updateItemSuccess: () => ({
        type: itemTypes.UPDATE_SUCCESS
    }),
    updateItemError: error => ({
        type: itemTypes.UPDATE_ERROR,
        payload: error
    }),

    removeItem: uuid => ({
        type: itemTypes.REMOVE,
        payload: uuid
    }),
    removeItemSuccess: data => ({
        type: itemTypes.REMOVE_SUCCESS,
        payload: data
    }),
    removeItemError: error => ({
        type: itemTypes.REMOVE_ERROR,
        payload: error
    }),

    findAllItems: () => ({
        type: itemTypes.FIND_ALL
    }),
    findAllItemsSuccess: data => ({
        type: itemTypes.FIND_ALL_SUCCESS,
        payload: data
    }),
    findAllItemsError: error => ({
        type: itemTypes.FIND_ALL_ERROR,
        payload: error
    })
};

/**
 * Item Reducer
 */
const initialState = {
    data: [],
    loading: false,
    error: false
};

export const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case itemTypes.SAVE:
            return { ...state, loading: true };
        case itemTypes.SAVE_SUCCESS:
            return { ...state, loading: false };
        case itemTypes.SAVE_ERROR:
            return { ...state, loading: false, error: action.payload };

        case itemTypes.UPDATE:
            return { ...state, loading: true };
        case itemTypes.UPDATE_SUCCESS:
            return { ...state, loading: false };
        case itemTypes.UPDATE_ERROR:
            return { ...state, loading: false, error: action.payload };

        case itemTypes.REMOVE:
            return { ...state, loading: true };
        case itemTypes.REMOVE_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case itemTypes.REMOVE_ERROR:
            return { ...state, loading: false, error: action.payload };

        case itemTypes.FIND_ALL:
            return { ...state, loading: true };
        case itemTypes.FIND_ALL_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case itemTypes.FIND_ALL_ERROR:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
