# TECHSMART

Site estático, sem instalação de dependências nem etapa de compilação.

## Publicar no GitHub Pages

1. Extraia o ZIP e copie o conteúdo para a raiz do repositório, incluindo o arquivo oculto `.nojekyll`.
2. No GitHub, em **Settings → Pages**, selecione **Deploy from a branch**, a branch usada pelo repositório e a pasta **/ (root)**.
3. Abra o endereço publicado. Para testar no computador antes de publicar, sirva a pasta por HTTP, por exemplo com `python -m http.server 8000`, e abra `http://localhost:8000/`.

## Arquivos

- `index.html` — página inicial.
- `style.css` — estilos e responsividade.
- `main.js` — navegação, configuração e conteúdo.
- `scene.js` — cenas 3D do iPhone e do notebook.
- `assets/` — fotos, ícones e fonte Manrope.
- `vendor/` — Three.js e Lenis, com licenças.
- `404.html` e pastas de política de privacidade e termos de uso — páginas independentes.
- `robots.txt` — acesso de mecanismos de busca.
- `sitemap.xml.example` — substitua `https://SEU-DOMINIO` pela URL pública completa, incluindo o nome do repositório quando ele fizer parte do endereço, e renomeie para `sitemap.xml`.

Os arquivos da seção `CONFIG` em `main.js` permitem configurar o conteúdo e os dados de atendimento.
