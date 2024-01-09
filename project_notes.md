# Minemopper

A mobile minesweeper game by Grant Abel, Aaron Meija, Teddy Peterschmidt, Christopher Davila and Henry Oberholtzer

## Technologies

- Expo Go
- TypeScript w some JS as needed
- React Native
- React Toolkit
- Firestore, database

## Minimum Viable Product:
- Includes the ability to play a full game of Minesweeper.
- Includes load/save functionality.

## Features 

Core:
- Randomly generated game board
- Game timer
- Mines remaining count
- Easy ability to set whether a long press sets a flag or clears a square
- Board scales to phone/device UI size
- Selection of difficulty (easy, medium, hard, custom map by users?)


Cloud:
- Boards saved in an archive of games to be "replayable"
- Cloud save feature
- Cloud leaderboard


Stretch:
- Oops mode (allows user to go back on a mine that was hit)
- Two Player (sort of a race to mark the most mines, maybe the other player can't see what squares the other player has cleared?)
- Between games, a pop up add for each contributor (UNSKIPPABLE!!!)
- Selectable themes


## Functions & Components

### Pages
- Game Page
    - Gameboard
    - Game Information
    - Game Controls
- Main Menu
    - Start / Resume Game
        - Can pick from saved minesweeper games or load from database?
    - Difficulty
        - Changes mine density
    - View Leaderboard
    - Settings
        - Oops Mode
        - Player Stats
- Leaderboard
    - Fetches & displays player data from server

### UI Components
- Load Screen (manages loading game on bootup, and saving data)
- Gameboard
    - Renders the minesweeper board based off data recieved from the board generator
    - Has a set size that scales based on the device in question
- Gameboard Tile
    - Tile that either be marked with a flag, or cleared to reveal a number, based on its ID in the board
- Game Controls
    - Allows user to start a new game
    - Flag/Clear Square toggle
- Game Information
    - Timer Component
    - Mines Remaining Component
- Leaderboard Component
    - Fetches data from server showing leaderboards for difficulty or on certain set game maps
- "Ad" Component

### Logic Functions
- Board Generation
    - Generates game board based on chosen difficulty
    - Outputs an object
- Timer
    - Recieves a start, sends out a final time when stopped, sends out updated time as game plays
- Bombs remaining count
    - Determines bombs remaining in the gameboard that have yet to be found

- Overlay Computation
    - Computes the numbers around the grid for bombs
- dbStore
    - Recieves input to store things to database
        - Gameboards 
        - Game statistics
        - User Accounts
        - 
- dbFetch
    - Retrieves data

### Data Structure

#### Board Data
```
{
    boardID: string,
    difficulty: string,
    board: [0, 0, 0, 1, 0, 0, 1, 0, 1] // Contains the number of mines for the given difficulty
    revealedBoard: [0, 0, 0, 1, 0, 0, 1, 0, 1] // Contains what information is displayed to the user about the current board (revealed bombs, flags, etc.)
}
```

#### Game Data
```
{
    userName: string,
    userID: string,
    boardID: string,
    time: number,
    date: Date,
}
```

#### Gameboard State Data
```
{

}
```

#### User Data
```
{
    userName: string,
    userID: string,
    gameHistory: gameData[],
    gamesPlayed: number, based on game data,
    averageDifficulty: number, based on game data,
    averageTime: number, based on game data,
    location?: City, state, who knows at this point!
}
```