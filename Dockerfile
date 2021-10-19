FROM fauria/lap:latest
#WORKDIR /var/www/html
COPY html/ /var/www/html
EXPOSE 80