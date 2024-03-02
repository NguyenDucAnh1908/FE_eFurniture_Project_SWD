import axios from '../customize-axios'

const loginUser = (email, password) => {
    return axios.post("/login", { email, password });
};
export { loginUser };