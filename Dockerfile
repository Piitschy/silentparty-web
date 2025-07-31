FROM nginx:alpine
COPY html/ /usr/share/nginx/html/
RUN chown -R nginx:nginx /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
