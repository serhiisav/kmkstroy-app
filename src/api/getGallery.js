import axios from "axios";


export const getGallery = () => {
    return axios.get('./gallery.json')
        .then(res => res)
        .catch(err => console.log(err.message))
}