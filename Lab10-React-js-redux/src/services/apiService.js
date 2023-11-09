import axios from "axios";
import {BASE_URL, FILTER_URL} from "../constants/apiUrls";



export async function getAllBooksRequest() {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getBookById(bookId) {
    try {
        const response = await axios.get(BASE_URL + `/${bookId}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getFilteredBooks(urlWithParams) {

    try {
        const response = await axios.get(FILTER_URL + urlWithParams)
        return response.data;
    } catch (error) {
        console.error(error)
    }
}