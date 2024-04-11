# Use the official Node.js 18 Alpine image as the base image for production
FROM node:18-alpine as production

# Set the working directory inside the container
WORKDIR /app

# Copy only package.json and package-lock.json to leverage Docker layer caching
COPY package*.json ./

# Install runtime dependencies (without dev/test dependencies) using npm ci
RUN npm ci --only=production

# Copy the production build from local 'dist' directory to the container
COPY ./dist/ ./dist/

# Copy .env file from local to Docker image
COPY .env ./

# Expose the port that the Nest.js application will be running on
EXPOSE 3000

# Command to start the Nest.js application in production mode
CMD [ "node", "dist/main.js" ]
