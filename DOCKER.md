# Docker

This file describe how to run and use the dockerized version of
speculos-exchanges-poloniex. To run the entire speculos stack, view [TODO].


## Development environment

All sources files are mounted as volumes, and the application is launched with
`nodemon`. This allow to edit files without rebuilding the docker image.

[TODO port config]

#### Build

    docker-compose build

#### Run

    docker-compose up
    docker-compose up -d  //daemon

#### Attaching a terminal to the container

    docker-compose exec speculos-poloniex /bin/bash



## Production environment

Only `config`, `keys`, `logs` and `db` folders are mounted as volumes.

[TODO launch app with a process manager]

#### Build

    docker-compose -f docker-compose.prod.yml build

#### Run

    docker-compose -f docker-compose.prod.yml up

#### Deploy

    [TODO (with docker-machine)]
