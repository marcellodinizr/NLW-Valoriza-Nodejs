# NLW Valoriza

## Regras

- Cadastro de usuário

  [ x ] Não é permitido cadastrar mais de um usuário com o mesmo e-mail

  [ x ] Não é permitido cadastrar usuário sem e-mail

- Cadastro de TAG

  [ ] Não é permitido cadastrar mais de uma tag com o mesmo nome

  [ ] Não é permitido cadastrar tag sem nome

  [ ] Não é permitido o cadastro por usuários que não sejam administradores

- Cadastro de elogios

  [ ] Não é permitido um usuário cadastrar um elogio para si

  [ ] Não é permitido cadastrar elogios para usuários inválidos

  [ ] O usuário precisa estar autenticado na aplicação

* yarn add typescript -D
* yarn tsc --init
* yarn add express
* yarn add @types/express -D
* yarn add ts-node-dev -D
* yarn add typeorm reflect-metadata sqlite3
* yarn typeorm migration:create -n CreateUsers
* yarn typeorm migration:run
* yarn typeorm entity:create -n User
* yarn add uuid
* yarn add @types/uuid -D
