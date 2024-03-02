import axios from '../customize-axios'

const loginUser = (email, password) => {
    return axios.post("/login", { email, password });
};

const registerUser = (fullName, phoneNumber, email, password, active, dateOfBirth, role) => {
    return axios.post("/createUser", { fullName, phoneNumber, email, password, active, dateOfBirth, role });
};
export { loginUser, registerUser };