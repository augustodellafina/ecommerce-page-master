<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# E-commerce Página de Produtos Premium

LuxeEssence é uma aplicação de e-commerce moderna desenvolvida com Next.js, TypeScript, Material UI e integração com API. Este projeto demonstra boas práticas de desenvolvimento front-end, incluindo animações fluidas, gerenciamento de estado, e design responsivo.

## 🌟 Funcionalidades

- **Catálogo de Produtos Premium** - Visualização elegante de produtos de luxo
- **Detalhes do Produto** - Expansão de cards com animação usando Framer Motion
- **Favoritos** - Sistema de favoritos persistente com localStorage
- **Integração com API** - Consumo de dados dinâmicos via Apidog
- **Design Responsivo** - Experiência otimizada para todos os dispositivos

<div align="center">
  <img src="https://user-images.githubusercontent.com/12345678/example-screenshot-1.png" alt="Catálogo de Produtos" width="45%">
  <img src="https://user-images.githubusercontent.com/12345678/example-screenshot-2.png" alt="Detalhes do Produto" width="45%">
</div>

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática para código mais seguro
- **Tailwind CSS** - Estilização moderna e responsiva
- **Framer Motion** - Animações fluidas e interativas
- **Heroicons** - Ícones elegantes e consistentes
- **Apidog** - Mock API para desenvolvimento


## 📋 Pré-requisitos

- Node.js 18.x ou superior
- npm ou yarn


## 🛠️ Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/luxe-essence.git
cd luxe-essence
```

2. Instale as dependências:

```bash
npm install
# ou
yarn
```

3. Configure as variáveis de ambiente:

```bash
cp .env.example .env.local
```

Edite `.env.local` com suas configurações.
4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

5. Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🔧 Configuração da API

O projeto utiliza o Apidog como serviço de mock API. Para configurar:

1. Crie uma conta no [Apidog](https://apidog.com)
2. Importe a coleção de API do diretório `/docs/apidog-collection.json`
3. Atualize o token de API em `.env.local`:

```
NEXT_PUBLIC_API_URL=https://mock.apidog.com/m1/911013-893347-default
NEXT_PUBLIC_API_TOKEN=TVQmaFxwDYIu3W7jcCUHV
```


## 📱 Demonstração

<div align="center">
  <img src="https://user-images.githubusercontent.com/12345678/example-demo.gif" alt="Demonstração da aplicação" width="70%">
</div>

## 🧪 Testes

Execute os testes automatizados:

```bash
npm test
# ou
yarn test
```


## 📦 Build de Produção

Para gerar uma build de produção:

```bash
npm run build
# ou
yarn build
```


## 🌐 Deploy

O projeto está configurado para deploy na Vercel. Basta conectar seu repositório GitHub à sua conta Vercel.

[

## 🗂️ Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── components/         # Componentes reutilizáveis
│   │   ├── Header.tsx      # Cabeçalho da aplicação
│   │   ├── Footer.tsx      # Rodapé da aplicação
│   │   └── Product/        # Componentes relacionados a produtos
│   ├── layout.tsx          # Layout principal
│   └── page.tsx            # Página inicial
├── data/                   # Mocks da API
├── types/                  # Definições de tipos TypeScript
└── utils/                  # Funções utilitárias
```

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

1. Fork o projeto
2. Crie sua branch de feature (`git checkout -b feature/amazing-feature`)
3. Commit suas mudanças (`git commit -m 'Add some amazing feature'`)
4. Push para a branch (`git push origin feature/amazing-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👏 Agradecimentos

- [Next.js](https://nextjs.org) - Framework React
- [Tailwind CSS](https://tailwindcss.com) - Framework CSS
- [Framer Motion](https://www.framer.com/motion/) - Biblioteca de animações
- [Apidog](https://apidog.com) - Plataforma de mock API

---

<div align="center">
  <p>Desenvolvido por <a href="https://github.com/seu-usuario">Seu Nome</a></p>
  <p>
    <a href="https://twitter.com/seu-usuario">
      <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter">
    </a>
    <a href="https://linkedin.com/in/seu-usuario">
      <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
    </a>
  </p>
</div>
