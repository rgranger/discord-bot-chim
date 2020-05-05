# discord-bot-chim
A discord bot for Chim

# Usage

* Clone or download repository :

`git clone https://github.com/rgranger/discord-bot-chim.git`

* Install dependencies :

`npm install`

* Add a ".env" file at the root of the project (for personal settings).
* Add the following content to the ".env" file :

```
DISCORD_TOKEN=your_private_discord_bot_token
REDIS_PORT=6379
REDIS_HOST=127.0.0.1
REDIS_PASSWORD=
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=database_username
MYSQL_PASSWORD=password_for_database_username
MYSQL_DATABASE=name_of_the_database
```

* Start bot :

`npm start`
