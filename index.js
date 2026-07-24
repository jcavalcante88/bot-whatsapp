import wppconnect from '@wppconnect-team/wppconnect';

// Cria a sessão do WhatsApp
wppconnect.create({
  session: 'menu-bot',
  headless: false, // Mostra o navegador (útil para QR Code)
  useChrome: true,
  debug: true,
  logQR: true,
  catchQR: (base64Qrimg, asciiQR) => {
    console.log('📲 Escaneie o QR Code abaixo para conectar:');
    console.log(asciiQR);
  },
  statusFind: (statusSession, session) => {
    console.log(`🟢 Status da sessão [${session}]: ${statusSession}`);
  }
})
.then((client) => start(client))
.catch((error) => console.error('❌ Erro ao iniciar WPPConnect:', error));

function start(client) {
  console.log('✅ Bot iniciado com sucesso! Aguardando mensagens...');

  // Armazena estado do menu por usuário
  const userState = {};

  client.onMessage(async (message) => {
    try {
      // 🚫 Ignora mensagens de grupos
      if (message.isGroupMsg === true) {
        return;
      }

      const user = message.from;

      // Ignora mensagens sem corpo de texto
      if (!message.body) return;

      const texto = message.body.trim().toLowerCase();

      // 📋 MENU INICIAL
      if (!userState[user] || texto.includes('menu')) {
        userState[user] = 'menu';
        await client.sendText(user, 
`🤖 *Menu de Opções*
1️⃣ - Ver horário atual
2️⃣ - Chaveiro Residencial e Automotivo com certificado
3️⃣ - Entrarei em contato o mais breve possível, me envie em que posso estar te ajudando
0️⃣ - Encerrar conversa

Digite o número da opção desejada:`);

        return;
      }

      // ⚙️ RESPOSTAS DO MENU
      if (userState[user] === 'menu') {
        switch (texto) {
          case '1':
            const hora = new Date().toLocaleTimeString('pt-BR');
            await client.sendText(user, `🕒 Agora são ${hora}`);
            break;

          case '2':
            await client.sendText(user, '🔑 Chaveiro Residencial e Automotivo com certificado.');
            break;

          case '3':
            await client.sendText(user, '📞 Entrarei em contato o mais breve possível. Me envie em que posso te ajudar.');
            break;

          case '0':
            await client.sendText(user, '✅ Conversa encerrada. Digite *menu* para começar novamente.');
            delete userState[user];
            break;

          default:
            await client.sendText(user, '❌ Opção inválida! Digite *menu* para ver as opções.');
        }
      }
    } catch (err) {
      console.error('⚠️ Erro ao processar mensagem:', err);
    }
  });
}

