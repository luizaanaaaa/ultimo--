const nomes = ["Vinicius", "Pricila", "Gabriella", "Matilde", "Ana Luiza", "josele", "Ana Laura"];
export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}
export const nome = aleatorio(nomes);