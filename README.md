# AmpliSense Bio V2 — conceito navegável

Protótipo estático de uma reformulação visual do produto, preparado para publicação em GitHub Pages.

## O que muda

- Landing e produto deixam de competir: este conceito foca a experiência pós-login.
- A leitura do estado vira uma decisão clara, seguida pelo plano acionável do dia.
- Métricas ficam como evidência, não como o centro da tela.
- Insights ganham contexto e conexão com tendência histórica.

## Protótipo navegável

Além da composição visual, a tela agora demonstra dois comportamentos críticos da proposta V2:

- **Explicabilidade:** “Por que essa recomendação?” abre a evidência que sustenta o veredito do dia, em vez de pedir confiança cega no score.
- **Estado de integração:** “Conectar dispositivo” deixa claro que o fluxo depende de dispositivo elegível — não simula uma integração que ainda não existe.

Os dados são deliberadamente demonstrativos. A interface não chama APIs, não coleta dados e não representa uma leitura clínica.

## Evidências de revisão visual

- Desktop: `evidencias/conceito-v2-desktop.png`
- Mobile: `evidencias/conceito-v2-mobile.png`

As imagens foram geradas a partir deste protótipo local e são evidência da V2, não da jornada atual do staging.

## Upgrade para Next.js (plano exato)

1. Criar `app/(authenticated)/hoje/page.tsx` a partir da hierarquia desta tela e mover os blocos para `components/dashboard/`.
2. Definir o contrato de leitura diária antes do layout: `readiness`, `recovery`, `sleep`, `recentLoad`, `recommendation`, `evidence[]` e `planItems[]`.
3. Buscar dados no servidor; manter gráfico e modal como componentes client-side somente quando houver interação. Exibir skeleton, dados insuficientes e dispositivo desconectado como estados de primeira classe.
4. Aplicar autorização no layout autenticado e registrar consentimento/origem dos dados. Nunca expor métricas individuais em views B2B agregadas sem regra explícita de privacidade.
5. Validar acessibilidade (teclado, foco no modal, contraste) e responsividade antes de ligar dados reais.

Para GitHub Pages, mantenha este protótipo estático. Uma aplicação Next.js autenticada com API não deve depender de Pages: use uma plataforma com runtime servidor (por exemplo, Vercel) ou separe front-end estático e API autenticada.

## Publicação no GitHub Pages

Após criar o repositório remoto `amplisensebio-sitev2`, enviar estes arquivos para a branch `main` e habilitar **Settings → Pages → Deploy from a branch → main / root**. Inclua `script.js` junto do HTML e CSS.

Por ser HTML estático, não requer build. A URL resultante será `https://<organização>.github.io/amplisensebio-sitev2/`.

## Limites da avaliação atual

O navegador automatizado estava desativado nesta execução. Portanto, a análise de aquisição, cupom e demonstração foi limitada ao HTML público entregue pelo staging; nenhuma conta, pedido ou pagamento foi criado.
