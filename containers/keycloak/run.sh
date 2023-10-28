docker run --name vincent-keycloak \
            --publish 8443:8443 \
            --env KEYCLOAK_ADMIN=admin \
            --env KEYCLOAK_ADMIN_PASSWORD=admin \
            vincent/keycloak start --optimized \
                    --db=postgres --features=token-exchange \
                    --db-url=<JDBC-URL> --db-username=<DB-USER> --db-password=<DB-PASSWORD> \
                    --https-key-store-file=<file> --https-key-store-password=<password>
