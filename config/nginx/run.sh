
docker run -it -v $(pwd)/nginx.conf:/etc/nginx/nginx.conf:ro -p 4200:80 nginx
