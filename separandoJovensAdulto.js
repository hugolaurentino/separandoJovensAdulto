const usuarios = [
    {
        nome: "João",
        idade: 25
    },
    {
        nome: "Ana",
        idade: 18
    },
    {
        nome: "Beatriz",
        idade: 15
    },
    {
        nome: "Carlos",
        idade: 16
    },
    {
        nome: "Antonio",
        idade: 32
    },
]

const jovens = [];
const adultos = [];
for (const novoUsuario of usuarios) {
    novoUsuario.idade < 18 ? jovens.push(novoUsuario) : adultos.push(novoUsuario)
}

console.log(`
Usuários menores de 18:`, jovens);
console.log(`
Usuários maiores de 18:`, adultos);