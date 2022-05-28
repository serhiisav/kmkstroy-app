import {
    ADD_ALL_IMAGES,
    ADD_IMAGES_FAILURE,
    ADD_IMAGES_STARTED,
    SET_CURRENT_ID_IMAGE,
    SET_HAMBURGER_OPEN,
    ADD_IMAGES_FINISHED
} from './types'

export const addAllImagesSuccess = (images) => {
    return {
        type: ADD_ALL_IMAGES,
        payload: { images }
    }
}

export const addImagesFailure = (error) => {
    return {
        type: ADD_IMAGES_FAILURE,
        payload: { error }
    }
}
export const addImagesStarted = () => {
    return {
        type: ADD_IMAGES_STARTED,
    }
}

export const addImagesFinished = () => {
    return {
        type: ADD_IMAGES_FINISHED,
    }
}

export const setIdImage = (id) => {
    return {
        type: SET_CURRENT_ID_IMAGE,
        payload: { id }
    }
}

export const setHamburgerOpen = (value) => {
    return {
        type: SET_HAMBURGER_OPEN,
        payload: { value }
    }
}