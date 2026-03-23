// Variáveis de controle da animação dos quadros
let quadroAtual = 1; // começa no quadro 1
const totalQuadros = 4; // total de quadros disponíveis

// Seleciona elementos do DOM
const setas = document.querySelectorAll(".seta"); // setas de navegação
const braquiossauro = document.querySelectorAll(".braquiossauro"); // dinosaurios
const triceratop = document.querySelectorAll(".triceratop");
const anquilossauro = document.querySelectorAll(".anquilossauro");
const espinhossauro = document.querySelectorAll(".espinhossauro");
const estegossauro = document.querySelectorAll(".estegossauro");

// Função para animar ou desanimar elementos
function animacao(elementos, mode = true, classeativo = "ativo", classedesativo = "desativo") {
    for (elemento of elementos){
    
        if(mode === true){ // ativa animação
            elemento.forEach(s => {
                if(classedesativo){ 
                    s.classList.remove(classedesativo); // remove classe de desativado se existir
                }
                s.classList.remove(classeativo); // remove classe ativo para reset
                void s.offsetWidth; // força o navegador a reiniciar a animação (reflow)
                s.classList.add(classeativo); // adiciona novamente classe ativo para animar
                            });
        }
        if(mode === false){ // desativa animação
            elemento.forEach(s => {
                s.classList.remove(classeativo); // remove animação
                s.classList.add(classedesativo); // adiciona classe de desativado
                            });
        }
    }    
}

// Função genérica para adicionar ou remover classes em elementos
function execucao(name, classed = null, mode = true){
    name.forEach(s => {
        if(mode === true && classed){
            s.classList.add(classed); // adiciona classe
        }
        if(mode === false && classed){
            s.classList.remove(classed); // remove classe
        }
    });
}

// Função para abrir o presente (passa do quadro 1 para o 2)
function abrirPresente() {
    // Esconde o quadro 1
    document.getElementById("quadro1").classList.remove("ativo");
    // Mostra o quadro 2
    quadroAtual = 2;
    document.getElementById(`quadro${quadroAtual}`).classList.add("ativo");
    // Mostra as setas de navegação
    execucao(setas,"ativo");
}

// Função para avançar para o próximo quadro
function proximo() {
    if (quadroAtual < totalQuadros) {
        // Esconde o quadro atual
        document.getElementById(`quadro${quadroAtual}`).classList.remove("ativo");
        // Incrementa o quadro atual
        quadroAtual++;
        // Mostra o próximo quadro
        document.getElementById(`quadro${quadroAtual}`).classList.add("ativo");
    }
    // Se estiver no último quadro, ativa animação dos dinossauros
    if (quadroAtual === totalQuadros){
         animacao(  [braquiossauro,
                    triceratop,
                    anquilossauro,
                    espinhossauro,
                    estegossauro
                    ]);
    }
}

// Função para voltar para o quadro anterior
function voltar() {
    if (quadroAtual > 2) { 
        // volta normalmente para quadros anteriores (3 → 2)
        document.getElementById(`quadro${quadroAtual}`).classList.remove("ativo");
        quadroAtual--;
        document.getElementById(`quadro${quadroAtual}`).classList.add("ativo");
    } else if (quadroAtual === 2) { 
        // se estiver no quadro 2 e clicar voltar, retorna ao quadro 1
        document.getElementById(`quadro${quadroAtual}`).classList.remove("ativo");
        quadroAtual = 1;
        document.getElementById(`quadro${quadroAtual}`).classList.add("ativo");
        // Esconde as setas novamente
        execucao(setas,"ativo", false);
    }
    
    // Se não estiver no último quadro, desativa animação dos dinossauros
    if(quadroAtual < totalQuadros){
         animacao(  [braquiossauro,
                    triceratop,
                    anquilossauro,
                    espinhossauro,
                    estegossauro
                    ],false);
    }
}
