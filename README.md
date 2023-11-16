# PokéProbe by Dugon

<p align='center'>
  <img src='https://raw.githubusercontent.com/jyih/pokeprobe/main/assets/readme/landing.png' height='300px'>
</p>

PokéProbe by Dugon is a full-stack web application inspired by Product Hunt. Users can sign up to become Pokémon Trainers can catch and share their Pokemon with other Pokémon Trainers.

[Live Site](https://pokeprobe.onrender.com/)

# Technologies Used

## Backend
* Express
* Sequelize
* PostgresSQL
* JavaScript

## Frontend
* JavaScript
* CSS3
* Pug

# Features
## User authentication
<p align='center'>
  <img src='https://raw.githubusercontent.com/jyih/pokeprobe/main/assets/readme/login.png' height='300px'>
  <img src='https://raw.githubusercontent.com/jyih/pokeprobe/main/assets/readme/signup.png' height='300px'>
</p>
Trainers (users) can register a new account, and log into an existing account. There is also a demo login.

## PokéPages
<p align='center'>
  <img src='https://raw.githubusercontent.com/jyih/pokeprobe/main/assets/readme/catch.png' height='300px'>
  <img src='https://raw.githubusercontent.com/jyih/pokeprobe/main/assets/readme/pokepage.png' height='300px'>
</p>
Trainers can create PokéPages by catching new pokemon. PokéPages show a pokemon's parent species, elemental types, and description. The description can be edited by the trainer who owns that pokemon.

## Profile
<p align='center'>
  <img src='https://raw.githubusercontent.com/jyih/pokeprobe/main/assets/readme/profile.png' height='300px'>
</p>
Trainers can visit each other's profile pages to see their full name and the bio they entered on signup.

## Search
<p align='center'>
  <img src='https://raw.githubusercontent.com/jyih/pokeprobe/main/assets/readme/search.png' height='300px'>
  <br>(Featured: All users and pokemon with the letter 'P' in their name or parent species.)
</p>

Search for pokemon or trainers by username, nickname, parent species, or pokemon element type.

# How to Run Locally

1. Clone this repository.

        git clone https://github.com/jyih/pokeprobe.git

2. Create a PostgeSQL user for PokeProbe with a password. Then set up a database that belongs to that user.

3. Navigate into the project folder and create a .env file that mirrors the .env.example, replacing the username, password, and database with what you used to create your Postgres user and database.

4. Run

        npm install

5. Once that is finished and all dependencies are installed you can boot the server by running
        
        npm start
