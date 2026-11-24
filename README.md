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

## Segurança

Nunca envie tokens, senhas, chaves privadas ou arquivos `.env` para o Git. Use somente variáveis de ambiente. O arquivo `.env.example` contém nomes de variáveis e valores fictícios.

## Hospedagem

A escolha do provedor de execução ainda está em avaliação. Serviços gratuitos com suspensão por inatividade não são adequados para garantir que um bot Discord permaneça online 24/7. Não há promessa de disponibilidade sem custos ou de ausência total de bugs.
