[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Tic-Tac-Toe

Make the game Tic-Tac-Toe using HTML, CSS, and JavaScript!

## Prerequisites

- Semantic HTML
- CSS styling and layout
- CSS Grid
- JavaScript programming
- Working with the DOM
- JavaScript events

## Instructions

1. Read through and fulfill the listed requirements.
1. You will create a new repo on your GitHub account for this project.
1. Submit this project with an issue on this repo.

## Requirements

Your goal is to build a working version of Tic-Tac-Toe. This is to get you ready
to build out your project 1 so in addition to practicing
the technical skills you've learned in class, you'll practice scoping out a
large project, breaking it into smaller pieces, and working towards those goals
in sequence.

You're going to build your Tic-Tac-Toe game in two phases! We'll define the
goals for each phase, but you should break these down into even smaller steps.

### Phase 1: Player-scored Version

- Build out a 3x3 grid with clickable squares.
- When a user clicks on a square, mark the square with the current user's token
  (alternating with each click). You can add an `X` or an `O` or some other
  marker that corresponds to the current player.
- Once a square has been marked, a user should not be able to click it again to
  change it.
- Have a message somewhere in your UI to show who the current player is (i.e.
  `Player 1 turn` or `Player 2 turn`)
- Below your 3x3 grid, you should have a 'reset' button that will reset the
  game.

**Bonus:**

- Have a message appear if the current player clicks an invalid square (one that
  is already occupied with a marker).

### Phase 2: Computer-scored Version

The goal of this phase is to make it so that players don't have to manually
score the game. Instead, you're going to write some code that will check the
board with every turn:

- If a player has won, display a message with which player won the game (i.e.
  player 1 or player 2)
- If all the squares are filled in and no player has won yet, display a message
  saying it's a tie
- In both cases, the users should be able to reset the game

In games where there are a limited number of winning combinations, a great
first-step to auto-calculating the winner is to hold those winning combinations
in some format (maybe an array) and check the current game against those winning
combinations. If one of the winning combinations matches the gameboard, then you
know a player has won!

However, doing so requires modeling the current state of the gameboard in your
code. So, in addition to updating your UI whenever a player makes a move, you'll
also have to update some representation of the gameboard in your game code.

**Bonus:**

- Hide the reset button so it only displays if there is a win or a tie.
- Keep a record of how many games each player has won
- Use a form to get each user's name before the round and substitute the user's
  name in the game messaging (i.e., display something like "Chris' turn" or "Pam
  won").

## Plagiarism

Take a moment to refamiliarize yourself with the
[Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md).
Plagiarized work will not be accepted.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
