import axios from "axios";
import {BASE_URL, FILTER_URL} from "../constants/apiUrls";

function generateFilterUrl({price, pages, author}) {
    let url = '';
    url += price !== '' ? `?price=${price}` : '?';
    url += pages !== '' ? `&pages=${pages}` : '';
    url += author !== '' ? `&author=${author}` : '';
    return url;
}

export async function getAllBooksRequest() {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getFilteredBooks({price, pages, author}) {
    const url = generateFilterUrl({price, pages, author})
    console.log(FILTER_URL+url)
    try {
        const response = await axios.get(FILTER_URL + url)
        return response.data;
    } catch (error) {
        console.error(error)
    }
}