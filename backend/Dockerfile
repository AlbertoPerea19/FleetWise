# Use the official PostgreSQL image as the base image
FROM postgres:latest

# Set the environment variables
ENV POSTGRES_USER=${DB_USERNAME}
ENV POSTGRES_PASSWORD=${DB_PASSWORD}
ENV POSTGRES_DB=${DB_DATABASE}

# Copy the .env file to the container
COPY .env /usr/src/app/.env

# Expose the PostgreSQL port
EXPOSE 5432

# Start the PostgreSQL server
CMD ["postgres"]