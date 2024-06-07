import { createUsuario, getUsuarioById } from '../models/Usuario.js';

export async function registerUsuario(data) {
    return createUsuario(data);
}

export async function findUsuarioById(id) {
    return getUsuarioById(id);
}
