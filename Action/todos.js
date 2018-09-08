import axios from 'axios';
import { API_URL } from '../consta';

export function allTodos() {
    return {
        type: "ALL_TODOS",
        payload: axios.get(`${API_URL}`)
    }
}