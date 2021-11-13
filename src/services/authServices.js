import axiosInstance from "../axios";

let path = "users/"

const authServices = {

    login: (username, password) =>{

    },
    register: (username, password, email) => 
    {
        var formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);
        formData.append("email", email);
        return axiosInstance.post(path, formData)
    }
}
export default authServices