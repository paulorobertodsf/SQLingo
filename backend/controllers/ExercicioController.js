import { registerExercicio, findExercicioById } from '../services/ExercicioService.js';

export async function createExercicio(req, res) {
    try {
        const exercicio = await registerExercicio(req.body);
        res.status(201).json(exercicio);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function getExercicio(req, res) {
    try {
        const exercicio = await findExercicioById(req.params.id);
        if (exercicio) {
            res.json(exercicio);
        } else {
            res.status(404).json({ error: 'Exercício não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
