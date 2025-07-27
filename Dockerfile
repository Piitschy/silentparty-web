FROM nginx:alpine
COPY html/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off", "-c", "/etc/nginx/nginx.conf"]
