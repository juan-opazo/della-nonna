import axios from 'axios';

export default axios.create({
    baseUrl: 'https://whin2.p.rapidapi.com/whin',
    data: {
        'phone': '969014909',
        'token': '7e5b0da4d49374d25e27c1270f5134d800bb0b3c',
        'text': 'Hello from the other side'
    }
})