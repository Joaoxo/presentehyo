let quadroAtual = 1; // começa no quadro 1
const totalQuadros = 4;

const setas = document.querySelectorAll(".seta");
const braquiossauro = document.querySelectorAll(".braquiossauro")

function animacao(elemento, classeativo, classedesativo = null,mode = "on"){
    if(mode=== "on"){
        
        elemento.forEach( s =>  {
            if(classedesativo){s.classList.remove(classedesativo)} // se tiver o desativo no lugar 
            s.classList.remove(classeativo); // reset
            void s.offsetWidth; // FORÇA o navegador reiniciar animação
            s.classList.add(classeativo); // anima de novo
        });
    }
    if (mode === "off"){
        
        elemento.forEach( s =>  {
            s.classList.remove(classeativo); // anima para tirar
            s.classList.add(classedesativo);
        });
    }
}
function execucao(name,classed = null,mode = "on"){
    name.forEach( s => {
        if(mode === "on" && classed){
            s.classList.add(classed);  
        }
        if (mode === "off" && classed){
            s.classList.remove(classed);
        }
    });
}

function abrirPresente() {
    // Esconde o primeiro quadro
    document.getElementById("quadro1").classList.remove("ativo");
    // Mostra o segundo quadro
    quadroAtual = 2;
    document.getElementById(`quadro${quadroAtual}`).classList.add("ativo");

    // Mostra setas
    execucao(setas,"ativo");
}

function proximo() {
    if (quadroAtual < totalQuadros) {
        document.getElementById(`quadro${quadroAtual}`).classList.remove("ativo");
        quadroAtual++;
        document.getElementById(`quadro${quadroAtual}`).classList.add("ativo");
    }
    if (quadroAtual === totalQuadros){
        animacao(braquiossauro,"ativo");
    }
    
}

function voltar() {
    if (quadroAtual > 2) { 
        // volta normalmente para quadros anteriores (3→2)
        document.getElementById(`quadro${quadroAtual}`).classList.remove("ativo");
        quadroAtual--;
        document.getElementById(`quadro${quadroAtual}`).classList.add("ativo");
    } else if (quadroAtual === 2) {
        // se estiver no quadro 2 e clicar voltar, retorna ao quadro 1
        document.getElementById(`quadro${quadroAtual}`).classList.remove("ativo");
        quadroAtual = 1;
        document.getElementById(`quadro${quadroAtual}`).classList.add("ativo");
        // Esconde as setas novamente
        execucao(setas,"ativo", "off");
       
        
    } 
    if(quadroAtual < totalQuadros){
            animacao(braquiossauro,"ativo","desativo","off");}
    
}
