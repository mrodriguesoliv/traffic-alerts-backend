# 🚦 Traffic Alerts API - Backend

<p align="center">
  <strong>Uma API de alta performance para alertas de tráfego em tempo real, construída com uma arquitetura moderna, escalável e pronta para produção.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-20.x-339933?style=for-the-badge&logo=node.js" alt="Node.js">
  <img src="https://img.shields.io/badge/Hono-4-F6AD3D?style=for-the-badge&logo=hono&logoColor=black" alt="Hono">
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Supabase-Auth-3ECF8E?style=for-the-badge&logo=supabase" alt="Supabase">
  <img src="https://img.shields.io/badge/pnpm-ready-F69220?style=for-the-badge&logo=pnpm" alt="pnpm">
</p>

<br>

Este é o backend do projeto **Traffic Alerts Dashboard**. Ele foi projetado para ser extremamente rápido, seguro e fácil de manter, utilizando o framework [**Hono 🔥**](https://hono.dev/) para rodar em qualquer ambiente JavaScript, desde o Node.js até a Edge.

---

## ✨ Filosofia e Arquitetura

Este projeto não é apenas sobre entregar dados; é sobre construí-lo da maneira certa. A arquitetura foi pensada para seguir os princípios de **Clean Code** e **SOLID**, resultando em um sistema robusto e preparado para o futuro.

-   **🚀 Performance Extrema:** Construído sobre o Hono, um dos frameworks mais rápidos do ecossistema JavaScript, garantindo respostas com latência mínima.
-   **🔐 Segurança em Primeiro Lugar:** Autenticação e gerenciamento de usuários implementados com [**Supabase Auth**](https://supabase.com/auth), oferecendo um sistema de segurança de nível empresarial (Row Level Security, JWT) sem complicações.
-   **🏗️ Arquitetura Modular:** O código é organizado em módulos de domínio (como `Auth` e `Dashboard`), tornando o sistema fácil de entender, escalar e dar manutenção. Cada funcionalidade tem seu próprio espaço, com responsabilidades bem definidas.
-   **💪 Tipagem de Ponta a Ponta:** O uso rigoroso do **TypeScript** em todo o projeto elimina uma classe inteira de bugs em tempo de desenvolvimento, garantindo que a API seja previsível e confiável.
-   **🌐 Fonte de Dados Confiável:** Integração direta com a **API do Waze** para fornecer alertas de tráfego precisos e em tempo real, alimentados por uma das maiores comunidades de motoristas do mundo.

## 🛠️ Tecnologias Utilizadas

| Tecnologia                                       | Descrição                                                                                                                |
| :----------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------- |
| **[Hono](https://hono.dev/)**                    | Um framework web ultrarrápido e leve para qualquer runtime JavaScript.                                                     |
| **[TypeScript](https://www.typescriptlang.org/)**| Garante um código mais seguro, legível e manutenível.                                                                    |
| **[Supabase](https://supabase.com/)**            | Utilizado para uma autenticação robusta e segura via JWT.                                                                |
| **[tsx](https://github.com/esbuild-kit/tsx)**    | Permite rodar e desenvolver o projeto em TypeScript sem a necessidade de compilação manual, acelerando o desenvolvimento. |
| **[dotenv](https://github.com/motdotla/dotenv)** | Gerenciamento seguro e simples de variáveis de ambiente.                                                                 |

## 🚀 Comece a Usar

Para executar este projeto localmente, siga os passos abaixo.

### **Pré-requisitos**

-   [Node.js](https://nodejs.org/) (versão 20.x ou superior)
-   [pnpm](https://pnpm.io/) (recomendado, mas você pode usar `npm` ou `yarn`)

### **Passos de Instalação**

1.  **Clone o repositório e acesse a pasta:**
    ```bash
    git clone https://github.com/seu-usuario/traffic-alerts-backend.git
    cd traffic-alerts-backend
    ```

2.  **Instale as dependências:**
    ```bash
    pnpm install
    ```

3.  **Configure as variáveis de ambiente:**
    
    Crie um arquivo chamado `.env` na raiz do projeto e adicione o seguinte conteúdo:
    ```dotenv
    # Supabase
    SUPABASE_URL="YOUR_SUPABASE_URL"
    SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"

    # Waze/RapidAPI
    RAPIDAPI_KEY="YOUR_RAPIDAPI_KEY"
    RAPIDAPI_HOST="waze-alerts-and-jams.p.rapidapi.com"

    # Application
    PORT=3000
    USE_MOCK=false # Mude para 'true' para usar dados mockados sem a API real
    ```

4.  **Execute o servidor de desenvolvimento:**
    
    O servidor irá iniciar com hot-reload.
    ```bash
    pnpm run dev
    ```

Pronto! A API estará rodando em `http://localhost:3000`.

## 📂 Estrutura do Projeto

```
src
├── config/             # Validação e exportação de variáveis de ambiente
├── modules/            # Módulos principais da aplicação (features)
│   ├── auth/           # Lógica de autenticação (login, guard, etc.)
│   └── dashboard/      # Lógica de negócio do dashboard
└── shared/             # Código compartilhado entre módulos
    ├── lib/            # Clientes de bibliotecas (ex: Supabase)
    └── types/          # Tipos e interfaces globais
```

## 📜 Endpoints da API

### Autenticação

- `POST /auth/login`
  - Realiza a autenticação do usuário.
  - **Body:** `{ "email": "user@email.com", "password": "your_password" }`
  - **Retorno:** `{ "token": "jwt_access_token" }`

### Dashboard

- `GET /dashboard`
  - Retorna a lista de alertas de tráfego.
  - **Autenticação:** Requer um token JWT no header `Authorization: Bearer <token>`.
  - **Retorno:** Uma lista de alertas e congestionamentos.

---

<p align="center">
  Feito com ❤️ e as melhores tecnologias do ecossistema JS.
</p>
