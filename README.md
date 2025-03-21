# Delivery Manager 🚚📦

Um projeto **React.js & Next.js** para gerenciar pedidos de entrega. O objetivo do case é construir uma interface para exibir uma lista de pedidos e permitir que os usuários filtrem e visualizem detalhes de cada pedido. 😃✨

## Sobre o Projeto 📋

O **Delivery Manager** foi criado com [Next.js](https://nextjs.org/) e **TypeScript** para oferecer uma base robusta e escalável para gerenciamento de entregas.  
Este projeto segue boas práticas de desenvolvimento, com ênfase na componentização, tratamento de erros e carregamento assíncrono, garantindo uma ótima experiência para o usuário final. 🚀

## Tecnologias Utilizadas 🛠️

### Frameworks e Bibliotecas

- **Next.js** (v15.2.3) – Framework React para renderização do lado do servidor e geração de sites estáticos. ⚡
- **React** (v19.0.0) & **React DOM** – Biblioteca para construção de interfaces de usuário. ⚛️
- **React Router DOM** (v7.3.0) – Gerenciamento de rotas na aplicação. 🛣️
- **React Icons** (v5.5.0) – Ícones prontos para uso na interface.

### Estilização e Utilitários

- **Tailwind CSS** (v4.0.14) – Framework utilitário para estilização rápida e responsiva. 🎨
- **PostCSS** (v8.5.3) & **Autoprefixer** (v10.4.21) – Processamento e otimização dos estilos CSS.

### Desenvolvimento e Qualidade de Código

- **TypeScript** (v5) – Superset do JavaScript com tipagem estática para maior robustez. 🔒
- **ESLint** (v9.22.0) com configurações específicas para Next.js e React – Garantia de padrões de código e melhores práticas. ✅
- **Prettier** (v3.5.3) – Formatação automática do código para manter a consistência. 💅

## Funcionalidades 🌟

- **Desenvolvimento Moderno**: Utilização de Next.js e TypeScript para maior performance e escalabilidade. ⚡
- **Interface Intuitiva**: Layout limpo e responsivo que melhora a experiência do usuário. 🖥️📱
- **Organização e Componentização**: Estrutura modular que facilita a manutenção e evolução do código. 🛠️
- **Tratamento de Erros**: Mecanismos de captura de erros e feedbacks amigáveis para o usuário. 🔄
- **Carregamento Assíncrono**: Uso de async/await e Promises para operações sem travar a aplicação. ⏱️

## Como executar o proejto ⚙️

```bash
# Clone este repositório
$ git clone https://github.com/livbrandao/delivery-manager.git

# Acesse a pasta do projeto no terminal
$ cd devsStage-event

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# Abra o navegador em [http://localhost:3000] e veja a aplicação em ação! 🌐
```

## Estrutura do Projeto 🗂️

```plaintext
src/
  app/
    layout.tsx       # Layout global
    page.tsx         # Página inicial ("/")
    not-found.tsx    # Página de erro
    globals.css      # Estilos globais

    pedidos/
      page.tsx       # Página de listagem de pedidos
    detalhes/
        [id]/
          page.tsx  # Detalhes do pedido por ID

  assets/           # Arquivos estáticos (imagens, fontes, etc.)

  components/
    common/
      Button.tsx       # Componente de botão
      Card.tsx         # Componente de cartão
      Input.tsx        # Componente de input
      Select.tsx       # Componente de seleção
      Spinner.tsx      # Indicador de carregamento
      StatusBadge.tsx  # Indicador de status
    layout/
      Header.tsx       # Cabeçalho da aplicação
      Footer.tsx       # Rodapé da aplicação
      Layout.tsx       # Layout padrão da aplicação
    orders/
      OrderCard.tsx      # Cartão para exibir resumo do pedido
      OrderClient.tsx    # Lógica para renderizar a página de detalhes
      OrderDetails.tsx   # Detalhes do pedido
      OrderFilters.tsx   # Filtros para listagem de pedidos
      OrderList.tsx      # Lista de pedidos

  hooks/
    useOrders.ts       # Hook para gerenciamento de pedidos

  types/
    Order.ts           # Tipos e interfaces relacionados aos pedidos

  utils/
    api.ts             # Configurações e chamadas à API
    formatters.ts      # Funções de formatação de dados

  mockData.ts          # Dados fictícios para simular API
```

##

Feito com ❤️ por [livbrandao](https://github.com/livbrandao) e a comunidade de colaboradores! 🎉

---

Este README foi pensado para ser claro, objetivo e acolhedor para usuários. 😊
