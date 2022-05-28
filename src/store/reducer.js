const initialState = {
    galleryItems: [],
    isLoading: false,
    error: null,
    idImage: null,
    hamburgerOpen: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_IMAGES_STARTED': {
            return { ...state, isLoading: true }
        }
        case 'ADD_IMAGES_FINISHED': {
            return { ...state, isLoading: false }
        }
        case 'ADD_ALL_IMAGES': {
            return { ...state, galleryItems: action.payload.images, isLoading: false, error: null }
        }
        case 'ADD_IMAGES_FAILURE': {
            return { ...state, isLoading: false, error: action.payload.error }
        }
        case 'SET_CURRENT_ID_IMAGE': {
            return { ...state, idImage: action.payload.id }
        }
        case 'SET_HAMBURGER_OPEN': {
            return { ...state, hamburgerOpen: action.payload.value }
        }
        default: {
            return state;
        }
    }
}

export default reducer;