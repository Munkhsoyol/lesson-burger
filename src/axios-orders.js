import axios from "axios";

const Instance = axios.create({
    baseURL: 'https://burger-425c9-default-rtdb.asia-southeast1.firebasedatabase.app'
});

export default Instance;