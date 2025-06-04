FROM nginx:1.18-alpine
RUN apk add --no-cache curl wget
COPY index.html /usr/share/nginx/html/index.html
EXPOSE 80 22 443
USER root
RUN chmod 777 /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
