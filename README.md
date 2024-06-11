# Tab News

Clone do tabnews do curso.dev

npm run test:watch
docker compose -f infra/compose.yaml up -d
npm run dev

subir o container e ver as variáveis:
docker compose -f infra/compose.yaml up -d
docker inspect <container_id>

para ler dentro do postgress

docker exec -it <container_id> psql -U postgres
\du

reiniciar o container
docker compose -f infra/compose.yaml down
docker compose -f infra/compose.yaml up -d
