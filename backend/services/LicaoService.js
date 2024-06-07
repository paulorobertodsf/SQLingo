import { createLicao, getLicaoById } from '../models/Licao.js';

export async function registerLicao(data) {
    return createLicao(data);
}

export async function findLicaoById(id) {
    return getLicaoById(id);
}
