// DIFERENTES FORMAS DE CRIAR UM OBJETO:

// FORMA 1:
let aluno1 = new Object();
aluno1.ra = "00304824";
aluno1.nome = "Maria";
alert(`Forma 1: \nRA: ${aluno1.ra} | Nome: ${aluno1.nome}`);


// FORMA 2:
let aluno2 = {};
aluno2.ra = "00304925";
aluno2["nome"] = "Olívia";
aluno2["Email do aluno"] = "olivia@gmail.com";
alert("Forma 2:" + " \nRA: " + aluno2.ra + " | Nome: " + aluno2.nome + " | Email do aluno(a): " + aluno2["Email do aluno"]);


// FORMA 3 (MAIS COMUM):
let aluno3 = {
    ra: "00305026",
    nome: "Stela", //essa vírgula é opcional
};
alert("Forma 3: \nRA: " + aluno3.ra + " | Nome: " + aluno3.nome);


//FORMA 4:
function Aluno(ra, nome) {
    this.ra = ra;
    this.nome = nome;
    this.MostraDados = function() {
        return("Forma 4: \nRA: " + this.ra + " | Nome: " + this.nome);
    }
}
 
let aluno4 = new Aluno("00306051", "Sophia");
alert(aluno4.MostraDados());


// FORMA 5 - FUNÇÃO CONSTRUTORA SEM PARÂMETROS:
function Aluno2() {
    var ra;
    var nome;
    this.setRa = function(ra) {
        this.ra = ra;
    }
    this.getRa = function() {
        return this.ra;
    }
    this.setNome = function(nome) {
        this.nome = nome;
    }
    this.getNome = function() {
        return this.nome;
    }
}
let aluno5 = new Aluno2();
aluno5.setNome("Lívia");
aluno5.setRa("00304829");
alert("Forma 5: \nRA: " + aluno5.getRa() + " | Nome: " + aluno5.getNome());


// FORMA 6 COM HERENÇA:
function AlunoADS() {
    var numLab;
    this.setNumLab = function(nl) {
        this.numLab = nl;
    }
    this.getNumLab = function() {
        return this.numLab;
    }
}

AlunoADS.prototype = new Aluno2();
let aluno6 = new AlunoADS();
aluno6.setRa("00304887");
aluno6.setNome("Alice");
aluno6.setNumLab(5);
alert("Forma 6: \nRA: " + aluno6.getRa() + " | Nome: " + aluno6.getNome() + " | Número do Lab: " + aluno6.getNumLab());


// FORMA 7 - USANDO CLASS:
class Aluno1 {
    constructor() {
        this._ra; // o "_" na frente do "ra" é uma boa prática
        this._nome;
    }
    setNome(n) {
        this._nome = n;
    }
    getNome() {
        return this._nome;
    }
    setRa(r) {
        this._ra = r;
    }
    getRa() {
        return this._ra;
    }
}
let objAluno = new Aluno1();
objAluno.setNome("Meredith");
objAluno.setRa("00304965");
alert(`Forma 7: \nRA: ${objAluno.getRa()} | Nome: ${objAluno.getNome()}`);

//HERANÇA:
class AlunoADS1 extends Aluno1 { // BEM PARECIDO COM JAVA
    constructor() {
        super();
        this._numLab;
    }
    setNumLab(nlab) {
        this._numLab = nlab;
    }
    getNumLab() {
        return this._numLab;
    }
}
let objAlunoADS = new AlunoADS1();
objAlunoADS.setRa("00304723");
objAlunoADS.setNome("Aurora");
objAlunoADS.setNumLab(6);
alert(`Forma 8: \nRA: ${objAlunoADS.getRa()} | Nome: ${objAlunoADS.getNome()} Número do Lab: ${objAlunoADS.getNumLab()}`);


