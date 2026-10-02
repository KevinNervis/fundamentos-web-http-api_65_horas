

1. max-width: aplica o estilo quando a tela tem até determinada largura. É muito usado para adaptar o layout para telas menores.

@media (max-width: 768px) { /\* telas de até 768px \*/ }

min-width: aplica o estilo quando a tela tem pelo menos determinada largura. É comum na abordagem mobile first.

@media (min-width: 768px) {  /\* telas a partir de 768px \*/}



2. px é considerado fixo porque representa uma medida definida em pixels.

.titulo {font-size: 32px;}

rem é relativo ao tamanho da fonte do elemento raiz (html).

vw é relativo à largura da janela: 1vw = 1% da largura da tela.

.titulo {font-size: 5vw;}

Em uma tela de 1000px → 5vw = 50px
Em uma tela de 500px → 5vw = 25px


3. É criar primeiro o CSS pensando em telas pequenas e depois adicionar adaptações para telas maiores usando min-width.

.menu { display: block;}

@media (min-width: 768px) {.menu { display: flex; } }


4. Sim. Breakpoints não precisam obrigatoriamente ser 768px, 1024px etc. Se o layout apresenta problemas em determinada largura, usar 820px pode ser totalmente adequado:

@media (min-width: 820px) {/\* ajustes para o layout \*/}

O importante é escolher o breakpoint de acordo com o momento em que o conteúdo realmente precisa mudar.
Por exemplo, se em 780px os elementos ainda ficam apertados e só ficam bons a partir de 820px, 820px faz sentido.

