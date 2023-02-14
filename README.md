# E-Commerce Back End

## Description

This is a program meant to replicate back end interactions with a store's inventory. The program keeps track of individual items along with their corresponding categories and tags. New products, categories, and tags can be viewed, added, updated, and deleted invidually, and all of one particular subject can be viewed at once.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Contribution](#contribution)
- [Questions](#questions)

## Installation

1. After navigating to the program folder in the command line, type ```npm install``` into the command line, then press Enter to install all necessary dependencies.
2. In the main program folder, create a file named ".env" and input the following code, replacing the space between each '' with the appropriate information.

        DB_NAME=''
        DB_USER=''
        DB_PASSWORD=''

3. Type ```mysql -u root -p < ./db/schema.sql``` into the command line, then press Enter. If prompted, enter your MySQL password, then press Enter. This will set up the database.
4. (Optional) Type ```npm run seed``` into the command line, then press Enter to seed the database with sample data.


## Usage

<br>![screenshot of program in-use](./assets/screenshot.PNG)

A video of the program in use, with all of its components, can be found [here](https://drive.google.com/file/d/159G0fMx-hT-neTGgEBfE3lVhoW9X-Ova/view?usp=sharing)

## Credits
Made with given starting code.
<br>Made in part with [MySQL2](https://www.npmjs.com/package/mysql2)
<br>Made in part with [Sequelize](https://www.npmjs.com/package/sequelize)
<br>Made in part with [dotenv](https://www.npmjs.com/package/dotenv)
<br>Made in part with [Express](https://www.npmjs.com/package/express)

## Contribution

Currently, this is a solo developer project.

## Questions

Any questions about this software can be directed to the author via
Github: https://github.com/joshmusto