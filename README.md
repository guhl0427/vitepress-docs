# vitepress-doc

## add ci
```yaml
# deploy.yml
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 7

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 16
          cache: pnpm

      - name: Install Dependencies
        run: pnpm install

      - name: Build
        run: pnpm vitepress build docs --base /${{ github.event.repository.name }}/

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist
```