import { registerUsuario, findUsuarioById } from '../services/UsuarioService.js';

export async function createUsuario(req, res) {
    try {
        const usuario = await registerUsuario(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function getUsuario(req, res) {
    try {
        const usuario = await findUsuarioById(req.params.id);
        if (usuario) {
            res.json(usuario);
        } else {
            res.status(404).json({ error: 'Usuário não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
