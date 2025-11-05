# Hospedagem no GitHub Pages

## Passos para hospedar seu projeto:

### 1. Prepare seu repositório
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/festival-a-moda.git
git push -u origin main
```

### 2. Ative o GitHub Pages
- Vá para as configurações do repositório (Settings)
- Procure por "Pages" no menu à esquerda
- Em "Source", selecione "Deploy from a branch"
- Branch: `main` (ou `master`)
- Pasta: `/root` (ou `/ (root)`)
- Clique em "Save"

### 3. Build e Deploy automático (Opcional - GitHub Actions)

Crie um arquivo `.github/workflows/deploy.yml`:

```yaml
name: Build and Deploy

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          cname: festival-a-moda.com (opcional - apenas se tiver domínio próprio)
```

### 4. URL do seu site
Após ativar GitHub Pages, seu site estará disponível em:
```
https://SEU_USUARIO.github.io/festival-a-moda/
```

## Alternativa: Deploy Manual

```bash
npm run build
# Cria a pasta 'dist'
# Faça commit e push
git add dist
git commit -m "Build para GitHub Pages"
git push
```

## Notas importantes

- ✅ O `vite.config.ts` já está configurado com `base: '/festival-a-moda/'`
- ✅ A pasta `dist` contém tudo que precisa
- ✅ Imagens estão no `public/`
- ✅ Sem dependências do backend necessárias

Pronto! Seu site estará ao vivo em poucos minutos!
