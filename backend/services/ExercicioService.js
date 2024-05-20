import { createExercicio, getExercicioById } from '../models/Exercicio.js';

export async function registerExercicio(data) {
    return createExercicio(data);
}

export async function findExercicioById(id) {
    return getExercicioById(id);
}
