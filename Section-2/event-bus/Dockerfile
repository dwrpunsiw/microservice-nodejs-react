# Define base image
FROM node:alpine

# Define app working directory
WORKDIR /app

# Copy dependency configuration
COPY package.json ./

# Run dependency installation
RUN npm install

# Copy all our application files
COPY ./ ./

# Define general command
CMD ["npm", "start"]