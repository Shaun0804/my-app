# Use a Node.js image to install dependencies and build the React project
FROM node:latest

WORKDIR /app

# Copy package files, index.html, and vite.config.js, then install dependencies

COPY ./package*.json ./
COPY ./app.json ./
COPY ./babel.config.js ./

RUN npm install -g expo-cli@latest
# RUN npx expo install
# RUN npx expo-cli install expo
RUN npm install
RUN npx expo install --fix

COPY ./App.js ./
COPY ./screens ./screens
COPY ./components ./components
COPY ./assets ./assets

# RUN npx expo install

# Expose port 80
EXPOSE 19000
EXPOSE 19001
EXPOSE 19002
EXPOSE 3002

# Command to run nginx
CMD ["expo", "start"]
