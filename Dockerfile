FROM  node:latest AS builder

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

#Solve the problem reinstaling bcrypt
RUN npm uninstall bcrypt
RUN npm i bcrypt

# Expose port and start the application
EXPOSE 4000
CMD ["npm", "run", "start:dev","db:studio"]