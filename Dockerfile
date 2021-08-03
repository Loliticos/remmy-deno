FROM denoland/deno:latest
EXPOSE 1993
WORKDIR /app
USER deno
COPY mod.ts .
ADD . .
RUN deno cache mod.ts
CMD ["run", "--allow-env", "--allow-read", "--allow-net", "mod.ts"]
