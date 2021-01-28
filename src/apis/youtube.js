import axios from 'axios';

const KEY = 'AIzaSyABUk3vF2tM1c2gNaqOzDeVC7cWC_4eDRc';


export default axios.create({

    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
