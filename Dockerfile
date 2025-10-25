    # Use uma imagem base adequada para seu site
    FROM nginx:alpine

    # Copie os arquivos do seu site para o diretório de web server padrão
    COPY . /usr/share/nginx/html

    # Exponha a porta padrão do Nginx
    EXPOSE 80
