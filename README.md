# SystemBotPays

Plataforma própria de hospedagem de bots para Discord.

## Status

Fundação inicial do monorepositório. O bot ainda não executa provisionamento de hospedagens nem operações comerciais.

## Requisitos

- Node.js 22 LTS
- pnpm 10+

## Começar

```bash
corepack enable
pnpm install
cp apps/bot/.env.example apps/bot/.env
```

Preencha `DISCORD_TOKEN` e `DISCORD_CLIENT_ID` em `apps/bot/.env` e execute:

```bash
pnpm dev:bot
```

## Estrutura

- `apps/bot`: aplicação Discord.
- `apps/api`: futura API central.
- `apps/web`: futuro painel web.
- `apps/worker`: futuras tarefas agendadas.
- `packages`: código compartilhado.

## Painel de hospedagem escolhido

Pterodactyl (linha estável 1.x inicialmente). É gratuito, open source e possui suporte comunitário para aplicações como bots Discord. O software do painel é gratuito, mas sua instalação exige um servidor Linux próprio com acesso administrativo, banco de dados e outros serviços. Portanto, painel gratuito não significa infraestrutura gratuita.

- Site: https://pterodactyl.io/
- Documentação: https://docs.pterodactyl.io/v1/

A versão 2.x está em beta; não será usada na primeira implantação de produção.

## Hospedagem da plataforma

Vamos desenvolver e testar localmente primeiro. Render e Railway gratuitos têm limites de execução e suspensão; não serão tratados como garantia de bot 24/7. A escolha de execução permanente será feita somente depois de medir os requisitos e verificar as opções realmente gratuitas disponíveis.

## Segurança

Nunca envie tokens, senhas, chaves privadas ou arquivos `.env` para o Git. Use somente variáveis de ambiente. O arquivo `.env.example` contém nomes de variáveis e valores fictícios. A integração com o Pterodactyl usará credenciais somente no servidor e permissões mínimas necessárias.

## Qualidade

O projeto será implementado em etapas, com validação de tipos, testes e revisão de segurança. Nenhum software pode ser prometido como 100% livre de bugs.
