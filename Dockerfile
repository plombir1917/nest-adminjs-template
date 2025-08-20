# Используем образ Node.js
FROM node:22

# Директория внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci
RUN npm cache clean --force

# Копируем весь проект
COPY . .

# Генерируем клиенты prisma
RUN npm run generate

# Сборка проекта
RUN npm run build

# Указываем порт
EXPOSE 3002

# Запуск приложения
CMD ["npm","run","migrate"]
