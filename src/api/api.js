import get from 'jquery';

let API = {
    fetchLinks() {
        console.log(`In API`)
        get('data.json').done( (res) => console.log(res));
    }
}

export default API;