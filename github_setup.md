# Guia de Configuração GitHub + Vercel

Para que as suas alterações sejam publicadas automaticamente na Vercel ao fazer um `git push`, siga os passos abaixo:

## 1. Criar o Repositório no GitHub
1. Vá para [github.com/new](https://github.com/new).
2. Dê um nome ao seu repositório (ex: `anita-galdames-arquitetura`).
3. Mantenha como **Public** ou **Private** (Vercel funciona com ambos).
4. **Não** inicialize com README, .gitignore ou licença (já temos esses arquivos).
5. Clique em **Create repository**.

## 2. Inicializar o Git Localmente e Fazer o Push
Abra o seu terminal na pasta do projeto e execute os seguintes comandos:

```bash
# Inicializa o git
git init

# Adiciona os arquivos
git add .

# Faz o primeiro commit
git commit -m "Initial commit: Projeto preparado para Vercel"

# Adiciona o link do repositório remoto (Substitua SEU-USUÁRIO e NOME-DO-REPO)
git remote add origin https://github.com/SEU-USUÁRIO/NOME-DO-REPO.git

# Renomeia a branch para main (padrão GitHub)
git branch -M main

# Faz o push para o GitHub
git push -u origin main
```

## 3. Conectar o GitHub à Vercel
1. Acesse o [Dashboard da Vercel](https://vercel.com/dashboard).
2. Clique no seu projeto `anita-galdames-arquitetura`.
3. Vá em **Settings** > **Git**.
4. Procure por **Connected Repository** e clique em **Connect** ou **Switch Repository**.
5. Selecione o repositório que você acabou de criar no GitHub.

## 4. Como atualizar o site agora?
Sempre que você terminar uma alteração importante, basta rodar:

```bash
git add .
git commit -m "Descrição da sua alteração"
git push origin main
```

A Vercel vai detectar o novo código e iniciar o deploy automaticamente! 🚀
