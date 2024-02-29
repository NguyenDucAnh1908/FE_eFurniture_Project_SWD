import axios from '../customize-axios'

const loginUser = (email, password) => {
    return axios.post("/auth/login", { email, password });
};
export { loginUser };