# Relatório de avaliação — AmpliSense Bio V2

Data da análise: 31/08/2026 · Ambiente: `staging.amplisensebio.com` · Confiança: média.

## Escopo e evidências

A avaliação foi feita somente por leitura HTTP do staging. A raiz redireciona para `/landing?login=1`; a aplicação é Next.js, servida por Caddy. A landing atual reúne hero, mock do produto, explicação, formulário de demonstração, login, blocos B2B e pricing.

Fluxos identificados no código público:

- Demonstração: cadastro de lead e abertura de sessão isolada com dados sintéticos.
- Assinatura: seleção de plano e fluxo de cadastro; há integração declarada com Mercado Pago.
- Acesso: login por email e senha.

Não foi criada conta, lead, pedido, pagamento ou cobrança. O navegador automatizado estava indisponível; portanto, não foi possível aplicar o cupom `ISP`, participar da demonstração ou produzir screenshot fiel dessa jornada. Não é seguro substituir esses passos por chamadas HTTP diretas que podem criar cobrança ou dados comerciais.

Foram geradas evidências visuais do conceito V2 em desktop e mobile após validação local (HTTP 200): `evidencias/conceito-v2-desktop.png` e `evidencias/conceito-v2-mobile.png`. Elas documentam a proposta, não o produto atual nem o fluxo de compra.

## Diagnóstico

**O que está bom.** A proposta de valor é clara, o produto aparece cedo, a landing contém uma demonstração e o pricing é inteligível. A camada HTTP também expõe boas práticas básicas: HSTS, CSP, `frame-ancestors none`, `nosniff` e política de referrer restritiva.

**O problema principal.** A landing coloca, em uma única página, aquisição, demonstração, login, planos e proposta B2B. O mock de interface é visualmente bonito, mas ainda é mais decoração de marketing que ferramenta de decisão. O usuário precisa primeiro interpretar números; só depois encontra o que fazer.

## Recomendação visual e funcional

Adotar um design system **editorial-clínico premium**:

1. Superfícies claras, grafite profundo e verde reservado exclusivamente para sinais positivos ou ação recomendada. Reduzir glow, gradientes e bordas decorativas.
2. No produto, começar pelo veredito: “o que faço hoje?”; métricas entram abaixo como evidência explicável.
3. Tornar o plano diário uma timeline de energia, com janelas ideais, não uma agenda genérica.
4. Cada insight deve ter “por que estou vendo isso?” e ligação direta a histórico, dados de origem e ação recomendada.
5. Separar navegação pública de aplicação autenticada. Landing vende; app orienta decisão.
6. Projetar estados vazios, carregamento, dispositivo desconectado e dados insuficientes desde o início.

## Modelo implementado

O protótipo local em `index.html` materializa a tela `/app/hoje`:

- hero de prontidão com recomendação explícita;
- três KPIs compactos: recuperação, sono e carga;
- plano inteligente em ordem temporal;
- insight contextual com próximo passo;
- tendência semanal de energia e recuperação;
- sidebar com futura expansão para plano, histórico, relatórios e configurações.

Após revisão técnica, o conceito recebeu navegação móvel equivalente à sidebar, descrição acessível do gráfico, destino válido para relatório semanal e feedback explícito para CTAs ainda não integrados. A tela não simula conexão, edição de plano ou leitura clínica.

## Roadmap sugerido

| Fase | Entrega | Resultado |
| --- | --- | --- |
| 1 | Validar fluxo real de demo e checkout | mapa de fricção, cupom ISP e evidência visual |
| 2 | Medir o funil: CTA → cadastro → cupom → pagamento → conexão → primeira leitura | priorização baseada em abandono e ativação |
| 3 | Design system, contrato de dados e estados de sistema | linguagem consistente, origem/consentimento e decisão explicável |
| 4 | Construir shell autenticado, tela Hoje e onboarding de 3 passos | primeira entrega utilizável e ativada |
| 5 | Plano, Insights, Histórico e Relatórios | ciclo completo de acompanhamento |
| 6 | Time/B2B com agregação de privacidade | expansão comercial sem expor dado individual |

## Publicação pendente

O diretório já é um repositório Git local, com arquivos preparados para commit. Não foi criado repositório remoto nem GitHub Pages porque não há CLI/autenticação GitHub disponível neste ambiente; também não foi feito commit porque a identidade Git de autoria não está configurada. Quando houver acesso, publicar em `amplisensebio-sitev2` por GitHub Pages (branch `main`, diretório raiz), sem build para este protótipo estático.
