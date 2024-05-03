FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

# Remova node_modules e package-lock.json, e reinstale as dependências
RUN rm -rf node_modules package-lock.json && npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]

#docker run -p 5173:5173 app
