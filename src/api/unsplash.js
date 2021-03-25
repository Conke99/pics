import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
         'Client-ID RWNGEZ_cYKdVyspIjwi8SOB0l7rGroBwpkUg9XGyiUw'
    }
});





