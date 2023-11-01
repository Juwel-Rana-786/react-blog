const reducerName = (state, { type, payload }) => {

    if (type == "HOME_UPDATE") {
        return {
            ...state,
            name: payload.name,
            image: payload.image,
        }
    }
    if (type == "ABOUT_UPDATE") {
        return {
            ...state,
            name: payload.name,
            image: payload.image,
        }
    }
    if (type == "GET_SERVICES") {
        return {
            ...state,
            services: payload
        }
    }
    return state
}

export default reducerName;