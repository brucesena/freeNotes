# freeNotes
Ciração de anotações em linha de comando

Este mini projeto tem por objetivo possibilitar guardar notas via linha de comando, foi criada uma api rest que recebe via GET 3 parâmetros:

collect: Nome da coleção 
title: Título da anotação
text: Texto da anotação


Esta API está hospedada na plataforma webtask https://webtask.io/make

E sua base de dados foi criada com MongoDB e está hopedada na plataforma mlab (https://mlab.com/)

Exemplos de chamada da API:

1. Criando uma anotação:

https://wt-8cc2fe156e8a48729fa093063c022e3c-0.run.webtask.io/freenotes?collect=Comandos&title=LS&text=Lista%20os%20arquivos%20de%20um%20diret%C3%B3rio

2. Listando as anotaçãoes de uma coleção

https://wt-8cc2fe156e8a48729fa093063c022e3c-0.run.webtask.io/freenotes?collect=Comandos

3. Mostrando uma anotação:

https://wt-8cc2fe156e8a48729fa093063c022e3c-0.run.webtask.io/freenotes?collect=Comandos&title=LS&
