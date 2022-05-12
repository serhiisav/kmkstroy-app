const initialState = {
    galleryItems: [],
    isLoading: false,
    error: null,
    idImage: null,

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_IMAGES_STARTED': {
            return { ...state, isLoading: true }
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
        default: {
            return state;
        }
    }
}

export default reducer;