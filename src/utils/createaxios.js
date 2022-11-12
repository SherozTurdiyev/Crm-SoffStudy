import axios from "axios";

export const BaseUrl = 'https://ibragimovxusan01.pythonanywhere.com'

const client =  axios.create({
    BaseUrl
})
export default client 