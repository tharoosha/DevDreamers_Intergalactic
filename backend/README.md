# rootcode-be
Backend of Intergalactic

## Setting Up the Project

### 1. Clone The Repository
You can clone the repository using following command.
```
git clone https://github.com/mushrafmim/rootcode-be.git
```
### 2. MySQL Database Setup
We have added two .sql scripts in the main workspace which contains schema and the dummy data the app needs. First setup the schema and then run the two scripts.

### 3. Setting Up the Environment
Create a file called `.env` and place 3 variables as follows,
```
INTERGALACTIC_DB_URI=mysql://<username>:<password>@<host>:<port>/intergalactic
SECRET_KEY=<any string>  
PORT=5000
```

### 4. Package Installation
Install the necessary packages.

```
npm install
```

### 5. Start the build
```
npm run dev
```


