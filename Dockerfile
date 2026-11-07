# Static site: no build step, nginx serves the files as-is.
# Unprivileged variant runs as uid 101 on port 8080, so the pod can use
# runAsNonRoot + readOnlyRootFilesystem (nginx writes only to /tmp).
FROM nginxinc/nginx-unprivileged:1.27.4-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --chown=101:101 *.html /usr/share/nginx/html/
COPY --chown=101:101 assets /usr/share/nginx/html/assets

EXPOSE 8080
