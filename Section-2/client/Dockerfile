# Define base image
FROM node:16-alpine

# Add the following line
ENV CI=true

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