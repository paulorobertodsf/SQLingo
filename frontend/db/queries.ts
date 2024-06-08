import axios from 'axios';
import { cache } from 'react';

export const getCourses = cache(async () => {
    try {
        const response = await axios.get("http://localhost:4000/courses");
        return response.data
    } catch (error) {
        console.error("Erro ao obter os cursos:", error);
        return null;
    }
});
