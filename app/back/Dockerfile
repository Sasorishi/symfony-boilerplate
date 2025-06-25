FROM php:8.3-fpm

WORKDIR /var/www/html

# Installer Symfony CLI
RUN curl -sS https://get.symfony.com/cli/installer | bash && \
    mv /root/.symfony5/bin/symfony /usr/local/bin/symfony

# Copier l'application Symfony
COPY . .

# Installer les dépendances système
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libicu-dev \
    libzip-dev \
    libpq-dev \
    libxml2-dev

# Installer les extensions PHP
RUN docker-php-ext-install intl opcache zip pdo pdo_mysql pdo_pgsql

# Installer Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Installer les dépendances Composer
RUN composer install --no-interaction --optimize-autoloader --no-scripts

# Exposer le port pour php-fpm
EXPOSE 9000

CMD ["php-fpm"]
