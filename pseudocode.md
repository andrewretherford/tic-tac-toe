Phase 1

create a board with 9 squares separated by two vertical lines and two horizontal lines

    HTML
        div container class="message"
           p for communicating with the players
        div container
            text displaying current player
                shows current player
        # div container
            9 divs sorted in a 3 x 3 grid
                class to designate if a square has been clicked
        div container
            button to reset the game
    
    CSS
        position the divs with flexbox
        style divs to create board lines
        style the divs for font etc
        select .hide and display: none;

    JS
        variables
            winCondition array
            player array
            currentPlayer, infoMessage, winMessage
            square array

            player object
                mark
                wins
                name
            
        DOM Elements
            .message
            .current-player-label
            .game-board-container
            .square (select all and store in array)
            .reset-button

        delegated event listener for board container
            check if 
                clicked class exists on the target
                display error message
            else 
                add x or o based on currentPlayer
                // update corresponding state variable
                move to next turn

        event listener for reset button
            handler runs init() to reset the game

Phase 2

    HTML
        div container class="win-message-container"
            h1 for displaying win message class="win-message hide"
                starts with hide class

        add hide class to reset button

        div container class="user-input-container"
            label class="user-input-label hide"
            input box id="user-input hide"
            button class="user-input-button hide"
    CSS

    JS
        add check for win condition in event handler
            displays winning player or tie if no winner
            use an array to hold win conditions to check against

        add toggle hide class on reset button in the handler

        add listener for user input button
            if player one
                read value of input box into playerOne.name
            else
                read value of input box into playerTwo.name

        



    



