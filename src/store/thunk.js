import { getGallery } from '../api/getGallery';
import { addAllImagesSuccess, addImagesFailure, addImagesStarted } from "./actions"


export const addAllImages = () => (dispatch, getState) => {
    const { galleryItems } = getState();
    if (galleryItems.length === 0) {
        dispatch(addImagesStarted());
        getGallery()
            .then(response => {
                const sortResult = response.data.sort((a, b) => {
                    if (a.id > b.id) {
                        return -1;
                    }
                    if (a.id < b.id) {
                        return 1;
                    }
                    return 0;
                });
                dispatch(addAllImagesSuccess(sortResult));
            })
            .catch(error => dispatch(addImagesFailure(error.message)));
    }
}

