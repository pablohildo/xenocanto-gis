# Xenocanto GIS Coordinates

<p align="center">
  <a href="https://github.com/pablohildo/xenocanto-gis/tree/master/#xenocanto-gis-coordinates">English</a> |
  <span>Português</span> |
</p>

Extraia dados de qualquer pássaro no [Xenocanto](https://www.xeno-canto.org) e gere um arquivo de coordenadas pronto para ser usado com GIS (ex.: DivaGIS) usando um simples comando.

## Uso

Se você estiver usando Windows, você pode usar a última release baixada da página [Releases](https://github.com/nexe/nexe/releases/), como dado:
```
xenocanto-gis.exe 'NOME DA ESPECIE' 'TIPO EXCLUIDO'

xenocanto-gis.exe 'formicivora iheringi' 'call' // Buscar formicivora iheringi, mas excluir todos tipos `call` (chamado)
xenocanto-gis.exe 'formicivora iheringi' 'song' // Buscar formicivora iheringi, mas excluir todos tipos `song` (canto)
xenocanto-gis.exe 'formicivora iheringi' // Buscar formicivora iheringi, não excluir nenhum tipo
```
Toda exclusão é feita através de inclusão de palavras. Isso significa que se você excluir 'call', **sons contendo call e song simultaneamente serão excluídos**.

**O arquivo será parseado como** `gisCoordinates-NOME DA ESPÉCIE.csv`.

Em qualquer outra plataforma (ex.: Linux/Mac) ou se você estiver usando o código fonte, o mesmo pode ser feito usando `node`.

1. Baixe [Node.js](https://nodejs.org/en/download/)
2. Rode um dos comandos acima, substituindo o nome do software por `node index.js`, como visto:

```
node index.js 'NOME DA ESPECIE' 'TIPO EXCLUIDO'
node index.js 'formicivora iheringi' 'call' // Buscar formicivora iheringi, mas excluir todos tipos `call` (chamado)
node index.js 'formicivora iheringi' 'song' // Buscar formicivora iheringi, mas excluir todos tipos `song` (canto)
node index.js 'formicivora iheringi' // Buscar formicivora iheringi, não excluir nenhum tipo
```

## Licença

Xenocanto GIS é um software de domínio público gratuito, livre e desimpedido. Para mais informações, veja http://unlicense.org/ ou o arquivo UNLICENSE que o acompanha.
