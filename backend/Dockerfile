# Use the official Node.js 18 Alpine image as the base image for production
FROM node:18-alpine as production

# Set the working directory inside the container
WORKDIR /app

# Copy only package.json and package-lock.json to leverage Docker layer caching
COPY . ./

# Install runtime dependencies (without dev/test dependencies) using npm ci
RUN npm install

# Build the Nest.js application in production mode
RUN npm run build

# Copy .env file from local to Docker image
COPY .env ./

# Expose the port that the Nest.js application will be running on
EXPOSE 3000

# Command to start the Nest.js application in production mode
CMD [ "node", "dist/main.js" ]
