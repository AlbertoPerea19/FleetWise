FROM postgres:14

ENV POSTGRES_HOST ${POSTGRES_HOST}
ENV POSTGRES_USER ${POSTGRES_USER}
ENV POSTGRES_PASSWORD ${POSTGRES_PASSWORD}
ENV POSTGRES_DB ${POSTGRES_DB}
ENV POSTGRES_PORT ${POSTGRES_PORT}

RUN echo "**Inicializando PostgreSQL...**"

COPY .env /etc/postgres/.env

RUN echo "**Configurando PostgreSQL...**" && \
    su postgres -c "pg_ctl -D /var/lib/postgresql/data -w initdb"

CMD ["postgres", "-D", "/var/lib/postgresql/data"]