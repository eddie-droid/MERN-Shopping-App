import axios from 'axios'

const BASE_URL = "http://localhost:3000/api/";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjI1NWRjMmQ3NmViZDE1NDZlZjM4NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDMxNjQwMSwiZXhwIjoxNjgwNTc1NjAxfQ.ULIKzbor1mwzzsRIgraYAK6d0iDZnv4u0IbI-XCOW2g";

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${token}`}
}); 