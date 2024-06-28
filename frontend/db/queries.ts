import axios from 'axios';
import { cache } from 'react';

export const getCourses = cache(async () => {
    try {
        const response = await axios.get("http://localhost:4000/api/courses");
        return response.data
    } catch (error) {
        console.error("Erro ao obter os cursos:");
        return [];
    }
});

export const getQuestion = cache(async () => {
    try {
        const response = await axios.get("http://localhost:4000/api/question/1");
        return response.data
    } catch (error) {
        console.error("Erro ao obter ao questão:");
        return [];
    }
});