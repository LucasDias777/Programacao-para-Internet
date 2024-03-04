function verificarMaiorIdade(idade) {

    return idade < 18 ? 'Maior de idade' : 'Menor de idade';

}


//// complete o códigoFaça com que a variável arra tenha uma lista ordenada de de 10 posições de 0 a 9

function orderArray() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(i);
    }
    return arr;
}

console.log(orderArray()); // Saída: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


/// Substitua os dados do objeto reatribuído  e delete o campo idade sem alterar a declaração do mesmo
function meusDados() {
    let pessoa = {
        nome: 'jhon doe',
        idade: '30',
        cidade: 'New York'
    };
    pessoa.nome = 'John Smith';
    pessoa.cidade = 'Los Angeles';

    delete pessoa.idade;
    return pessoa;
}
console.log(meusDados()); 


// Manipule o Array para que ele traga as informações pedidas no objeto e atribua nas posições do objeto
// ex: ordemAlfabetica: animais.short... 
function manipulaArray() {
    let animais = ['cacohrro', 'gato', 'abelha', 'rato', 'leão', 'galinha'];

    function ordemAlfabetica() {
        return animais.slice().sort();
    }
    function primeiro() {
        return animais[0];
    }
    function ultimo() {
        return animais[animais.length - 1];
    }
    function tamanhoDaLista() {
        return animais.length;
    }
    return {
        ordemAlfabetica,
        primeiro,
        ultimo,
        tamanhoDaLista
    };
}

const resultado = manipulaArray();

console.log(resultado.ordemAlfabetica()); 
console.log(resultado.primeiro()); 
console.log(resultado.ultimo()); 
console.log(resultado.tamanhoDaLista()); 
