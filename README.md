# Codeleap Network

Codeleap Network é uma aplicação web que tem o intuito de ser um pequeno blog com CRUD, aonde o usuário pode ter total controle sobre seus posts
e também visualizar de outros usuários.

Link da aplicação: https://codeleap-front-end-test.web.app/signup

## Instalação

```bash
Recomendo o uso das seguintes tecnologias
nvm - Node Version Manager.
https://github.com/coreybutler/nvm-windows

git-bash - Versionamento de código e git-flow.
https://git-scm.com/downloads

Obrigatório o uso de:
node >= 11.14.0 : Dê preferência a mesma ou uma LTS.
npm >= 6.7.0 : Dê preferência a mesma.
yarn >= qualquer versão LTS.
``` 

## Desenvolvimento
Após a instalação e verificação das tecnologias citadas, é preciso ter em mente alguns scripts para iniciar o ambiente de desenvolvimento:
```bash
yarn install          : Instalar dependências no repositório;
yarn start            : Ambiente de desenvolvimento com o webpack e o servidor;
yarn build            : Para compilação dos arquivos apenas;

Realizar deploy
firebase login        : Inicializar o login para o firebase;
yarn prod             : Gerar arquivos de produção
firebase deploy       : Efetuar o deploy
```

## Fluxo de alterações no código
Este repositório utiliza git como ferramenta para versionamento e manutenção de código, então é obrigatório o uso de git-flow. https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow.

Tendo isso em mente, é usado o padrão de uma branch ramificada separada da master para uso apenas de desenvolvimento.

## Padrões

O repositório contém o husky.js como tecnologia para manter padrão de commit, então é necessário se atentar ao commitar alterações para sempre manter o histórico atualizado.

Recomendado o uso da extensão do VSCODE para Eslint, assim facilitando o desenvolvimento e evitando problemas porque o código também deve estar conforme regras do Eslint padrão. Também uso o PUG como template para HTML, que também possui seu próprio linter.

Realizar commits ou push fora do padrão e ou com arquivos errados sem seguir o linter, o repositório irá automaticamente cancelar seu commit ou push.

## Notas
Este repositório segue um boilerplate criado por mim e está disponível no meu github no privado, sinta-se livre de entrar em contato comigo se lhe
interessar.

## Tecnologias
### Javascript
### React.js
### Pug
### Redux
### Styled-Components
### Git
### Webpack
### Firebase
### CRUD
### Linters