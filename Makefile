# Makefile pour le projet Symfony et React

# Variables
DOCKER_COMPOSE = docker-compose
PHP_SERVICE = php
NODE_SERVICE = node

# Cibles

.PHONY: all up down build install-php install-node start-php start-node test

# Cible par défaut
all: up

# Démarrer les conteneurs
up:
	$(DOCKER_COMPOSE) up -d

# Arrêter et supprimer les conteneurs
down:
	$(DOCKER_COMPOSE) down

# Construire les conteneurs
build:
	$(DOCKER_COMPOSE) build

# Installer les dépendances PHP
install-php:
	$(DOCKER_COMPOSE) run --rm $(PHP_SERVICE) composer install

# Installer les dépendances Node.js
install-node:
	$(DOCKER_COMPOSE) run --rm $(NODE_SERVICE) npm install

# Démarrer le serveur PHP
php:
	$(DOCKER_COMPOSE) exec php bash

# Démarrer le serveur Node.js
node:
	$(DOCKER_COMPOSE) exec node bash

# Afficher les logs du conteneur PHP
php-logs:
	$(DOCKER_COMPOSE) logs php

# Afficher les logs du conteneur PHP
node-logs:
	$(DOCKER_COMPOSE) logs node

# Exécuter les tests
test:
	$(DOCKER_COMPOSE) run --rm $(PHP_SERVICE) php bin/phpunit

# Lance ESLint
front-lint:
	$(DOCKER_COMPOSE) exec $(NODE_SERVICE) npm run lint