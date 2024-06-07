import { registerLicao, findLicaoById } from '../services/LicaoService.js';

export async function createLicao(req, res) {
    try {
        const licao = await registerLicao(req.body);
        res.status(201).json(licao);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function getLicao(req, res) {
    try {
        const licao = await findLicaoById(req.params.id);
        if (licao) {
            res.json(licao);
        } else {
            res.status(404).json({ error: 'Lição não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
