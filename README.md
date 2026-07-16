# Reserva de Mesas — Espaço Beira-Rio

MVP em Next.js (JavaScript) + Tailwind para consulta pública da disponibilidade
de mesas em 4 áreas: **Quiosque**, **Lanchonete**, **Espaço Família** e
**Estacionamento** (vagas).

Não tem backend nem banco de dados: o site é 100% estático. Quem visita
consegue apenas **ver** o status das mesas. Quem atualiza é você, editando um
arquivo e publicando o site de novo — exatamente como combinamos.

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Como atualizar as reservas (o dia a dia)

1. Abra o arquivo `data/tables.js`.
2. Ache a mesa pelo número, dentro da área certa.
3. Troque `status: 'livre'` por `status: 'reservado'` (ou o contrário).
4. Opcionalmente preencha `reservadoPara` e `horario` — isso é só uma anotação
   sua, **não aparece** para quem visita o site.
5. Atualize a linha `ultimaAtualizacao` no topo do arquivo com a data/hora
   atual.
6. Publique o site de novo (veja "Como publicar" abaixo).

Todo o arquivo tem comentários em português explicando cada parte. Você não
precisa mexer em mais nenhum arquivo para o uso do dia a dia.

### Adicionar ou remover mesas

Dentro da área desejada, copie um bloco assim:

```js
{ numero: 7, status: 'livre' },
```

e cole na lista `mesas`, ajustando o número. Para remover uma mesa, apague o
bloco inteiro. O mapa se reorganiza sozinho conforme a quantidade de mesas.

## Como publicar (deploy)

Este projeto já está configurado para gerar um site 100% estático (pasta
`out/`), então você pode hospedar em qualquer serviço de arquivos estáticos.

**Opção mais simples — Vercel (gratuito):**
1. Suba este projeto para um repositório no GitHub.
2. Crie uma conta em vercel.com e importe o repositório.
3. A Vercel detecta o Next.js automaticamente. Clique em "Deploy".
4. Toda vez que você editar `data/tables.js` e enviar (`git push`) para o
   GitHub, a Vercel publica a atualização sozinha em 1–2 minutos.

**Alternativa — gerar arquivos manualmente e subir em qualquer host:**
```bash
npm run build
```
Isso cria a pasta `out/`. Envie o conteúdo dessa pasta para qualquer serviço
de hospedagem de arquivos estáticos (Netlify, GitHub Pages, cPanel, etc.).

## Estrutura do projeto

```
app/
  layout.js        layout raiz (fontes, metadados)
  page.js           página principal (junta mapa, lista, legenda etc.)
  globals.css       estilos globais e fontes
data/
  tables.js         <<< ARQUIVO QUE VOCÊ EDITA PARA ATUALIZAR AS MESAS
components/
  AerialMap.jsx     mapa aéreo interativo (SVG) com as 4 áreas
  TableList.jsx      visão em lista (alternativa ao mapa, mais simples)
  TableModal.jsx     janela de detalhes ao clicar em uma mesa
  Legend.jsx          legenda de cores (livre / reservada)
  ViewToggle.jsx       botão para alternar entre Mapa e Lista
```

## Decisões de design (por que ficou assim)

- **Mapa 2D estilizado, não 3D real**: escolhido de propósito. Um mapa 3D
  (com bibliotecas como three.js) fica bonito, mas exige mais cliques,
  arrastar e girar câmera — algo que atrapalha o público de meia-idade e
  idosos que você mencionou. O mapa aéreo em 2D mostra tudo de uma vez,
  sem manipulação nenhuma, e ainda assim é interativo (clique nas mesas).
- **Visão "Lista" como alternativa**: para quem preferir não usar o mapa,
  há um botão que troca para uma lista simples com botões grandes.
- **Cores com bastante contraste** (verde = livre, terracota = reservada) e
  **fontes grandes e arredondadas**, pensadas para boa legibilidade.
- **Telefone para contato** no rodapé e no modal de cada mesa — como não há
  reserva automática pelo site, o próximo passo do visitante precisa ficar
  óbvio.

## Próximos passos possíveis (fora do escopo deste MVP)

- Se no futuro você quiser que a atualização apareça **sem precisar publicar
  de novo** (por exemplo, você mesmo atualizando pelo celular e o público
  vendo na hora), dá para trocar `data/tables.js` por um serviço como Firebase
  Firestore (gratuito) — me avise se quiser essa evolução.
- Reserva automática pelo próprio site (formulário) também pode ser
  adicionada depois, mas exige algum tipo de armazenamento compartilhado.
