# 🤖 Bot WhatsApp — Atendimento Automático com Menu

Bot de **atendimento automático para WhatsApp** com **menu interativo**. Ao receber uma mensagem, responde com opções e guia o cliente por um fluxo de atendimento, mantendo o estado da conversa por usuário. Ideal para pequenos negócios que querem atender clientes 24/7.

<!-- 📸 DICA: adicione um print/GIF do bot respondendo. Salve na raiz e descomente:
![Bot em ação](demo.png)
-->

---

## ✨ Funcionalidades

- 💬 **Menu interativo:** responde com opções e reage à escolha do cliente
- 🧠 **Estado por usuário:** lembra em que ponto do menu cada pessoa está
- 🚫 **Ignora grupos:** responde apenas conversas privadas
- 🔌 **Conexão via QR Code** exibido no terminal
- 📴 Filtra mensagens sem texto para evitar respostas indevidas

## 🛠️ Tecnologias

- **Node.js** (JavaScript, ES Modules)
- **[WPPConnect](https://github.com/wppconnect-team/wppconnect)** — biblioteca de automação do WhatsApp

## 🚀 Como rodar

```bash
# 1. Clone o repositório
git clone https://github.com/jcavalcante88/bot-whatsapp.git
cd bot-whatsapp

# 2. Instale as dependências
npm install

# 3. Inicie o bot
node index.js

# 4. Escaneie o QR Code que aparece no terminal com o WhatsApp
#    (WhatsApp > Aparelhos conectados > Conectar um aparelho)
```

## ⚙️ Como personalizar as respostas

O fluxo do menu e as mensagens ficam na função `start(client)` dentro de `index.js`. Edite os textos e as opções para adaptar ao seu negócio.

## ⚠️ Observação

Este projeto usa uma biblioteca **não-oficial** (WPPConnect), indicada para estudos e automações de baixo volume. Para uso comercial em escala, o recomendado é a **API oficial do WhatsApp Business (Cloud API)**.

## 🧠 O que este projeto demonstra

Integração com biblioteca externa, **programação assíncrona** (eventos de mensagem), **máquina de estados** simples para controlar o fluxo de conversa por usuário e tratamento de casos de borda (grupos, mensagens vazias).

---

## 👤 Autor

**Jerry Cavalcante Camargo Das Dores** — Desenvolvedor Full-Stack

- 🐙 GitHub: [@jcavalcante88](https://github.com/jcavalcante88)
- 💼 LinkedIn: [jerry-camargo](https://www.linkedin.com/in/jerry-camargo)
- 🌐 Portfólio: [portf-lio-xi-ruddy.vercel.app](https://portf-lio-xi-ruddy.vercel.app)
