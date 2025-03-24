🇺🇸 [English version available here](README.en.md)

Explicação em vídeo sobre o projeto: [Clique aqui](https://youtu.be/nH-ekaII3zo)

# 🧪 Automação de Testes com Playwright — SauceDemo

Este projeto é um teste técnico de automação end-to-end utilizando [Playwright](https://playwright.dev/).  
O objetivo é validar o comportamento da aplicação **SauceDemo**, com foco nos fluxos de login, carrinho de compras, ordenação de produtos e checkout.

---

## ✅ Tecnologias utilizadas

- [Playwright](https://playwright.dev/)
- TypeScript
- Test Runner nativo do Playwright
- Page Object Model (POM)
- Fixtures personalizadas

---

## 🧠 Funcionalidades testadas

### 🔐 Login
- Login com credenciais válidas
- Login com credenciais inválidas
- Logout com sucesso

### 🛒 Carrinho
- Adição de produto ao carrinho
- Remoção de produto do carrinho
- Validação do contador de itens no ícone do carrinho
- ⚠️ **Teste negativo**: Validação de que o sistema permite prosseguir para o checkout com carrinho vazio (comportamento incorreto identificado)

### 🔃 Ordenação
- Ordenação dos produtos por preço (do menor para o maior)

### ✅ Checkout
- Validação dos campos obrigatórios no formulário de checkout
- Validação dos valores de subtotal, taxa e total final na tela de resumo do pedido

---

## 📁 Estrutura do projeto

```
├── pages/                  # Implementação dos objetos de página utilizados nos testes
├── selectors/              # Seletores separados por página
├── fixtures/               # Fixtures customizadas
├── tests/                  # Arquivos de execução dos testes
├── playwright.config.ts    # Configuração do Playwright
└── README.md
```

---

## 🧩 Diferenciais implementados

- Fixtures customizadas para controle de contexto (ex: já logado, já no checkout)
- Separação clara de responsabilidades (Page Objects, Selectors, Fixtures, Tests)
- Cobertura de cenários negativos e validação de regras de negócio
- Cálculo e verificação manual dos valores exibidos na interface
- Uso de boas práticas como `.toBeCloseTo()` para comparação precisa de valores monetários

---
