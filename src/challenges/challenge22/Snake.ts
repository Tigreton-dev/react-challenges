const NUM_COL = 20;
const NUM_ROW = 20;
const SNAKE_START_SIZE = 5;

/**
 *
 * @returns
 */
export const createGrid = () =>
    Array(NUM_COL)
        .fill(null)
        .map(() => Array(NUM_ROW).fill("cell"));

/**
 *
 * @returns
 */
export function setSnakePosition() {
    const snake = [];
    let Xpos =
        Math.floor(Math.random() * (19 - SNAKE_START_SIZE + 1)) +
        SNAKE_START_SIZE;
    let Ypos =
        Math.floor(Math.random() * (19 - SNAKE_START_SIZE + 1)) +
        SNAKE_START_SIZE;
    snake.push({ Xpos, Ypos, head: true });
    const direction = "right";
    for (let i = 1; i < SNAKE_START_SIZE; i++) {
        direction === "right" ? (Ypos = Ypos - 1) : (Xpos = Xpos - 1);
        snake.push({ Xpos, Ypos });
    }

    return snake;
}

/**
 *
 * @param snake
 * @param currentDirection
 * @returns
 */
export function moveSnake(snake: Array<any>, currentDirection: string) {
    const result = [];
    switch (currentDirection) {
        case "left":
            snake[0].Xpos <= 0
                ? result.push({
                      Xpos: 19,
                      Ypos: snake[0].Ypos,
                      head: true,
                  })
                : result.push({
                      Xpos: snake[0].Xpos - 1,
                      Ypos: snake[0].Ypos,
                      head: true,
                  });
            break;
        case "up":
            snake[0].Ypos <= 0
                ? result.push({
                      Xpos: snake[0].Xpos,
                      Ypos: 19,
                      head: true,
                  })
                : result.push({
                      Xpos: snake[0].Xpos,
                      Ypos: snake[0].Ypos - 1,
                      head: true,
                  });
            break;
        case "down":
            snake[0].Ypos >= 19
                ? result.push({ Xpos: snake[0].Xpos, Ypos: 0, head: true })
                : result.push({
                      Xpos: snake[0].Xpos,
                      Ypos: snake[0].Ypos + 1,
                      head: true,
                  });
            break;
        case "right":
            snake[0].Xpos >= 19
                ? result.push({
                      Xpos: 0,
                      Ypos: snake[0].Ypos,
                      head: true,
                  })
                : result.push({
                      Xpos: snake[0].Xpos + 1,
                      Ypos: snake[0].Ypos,
                      head: true,
                  });
            break;
        default:
    }

    for (let i = 1; i < snake.length; i++) {
        result.push({
            Xpos: snake[i - 1].Xpos,
            Ypos: snake[i - 1].Ypos,
        });
    }

    return result;
}

/**
 *
 * @param keyCode
 * @param currentDirection
 * @returns
 */
export function handleKeyDown(keyCode: number, currentDirection: string) {
    let newDirection = "";
    switch (keyCode) {
        case 32:
            // this.resetGame();
            break;
        case 37:
        case 65:
            currentDirection === "right"
                ? (newDirection = "right")
                : (newDirection = "left");
            break;
        case 38:
        case 87:
            currentDirection === "down"
                ? (newDirection = "down")
                : (newDirection = "up");
            break;
        case 39:
        case 68:
            currentDirection === "left"
                ? (newDirection = "left")
                : (newDirection = "right");
            break;
        case 40:
        case 83:
            currentDirection === "up"
                ? (newDirection = "up")
                : (newDirection = "down");
            break;
        default:
    }

    return newDirection;
}

/**
 *
 * @param snake
 * @returns
 */
export function setFoodPosition(snake: Array<any>) {
    let XFoodpos = Math.floor(Math.random() * 19) + 1;
    let YFoodpos = Math.floor(Math.random() * 19) + 1;
    for (let i = 0; i < snake.length; i++) {
        while (XFoodpos === snake[i].Xpos && YFoodpos === snake[i].Ypos) {
            XFoodpos = Math.floor(Math.random() * 19) + 1;
            YFoodpos = Math.floor(Math.random() * 19) + 1;
        }
    }

    return { XFoodpos, YFoodpos };
}

/**
 *
 * @param snake
 * @param foodPosition
 * @param direction
 * @returns
 */
export const eatFood = (
    snake: Array<any>,
    foodPosition: Object,
    direction: string
) => {
    const { Xpos, Ypos } = snake[0];
    const { XFoodpos, YFoodpos } = foodPosition;
    if (Xpos === XFoodpos && Ypos === YFoodpos) {
        const tail = snake[snake.length - 1];
        switch (direction) {
            case "left":
                tail.Xpos = tail.Xpos + 1;
                break;
            case "right":
                tail.Xpos = tail.Xpos - 1;
                break;
            case "up":
                tail.Ypos = tail.Ypos + 1;
                break;
            case "down":
                tail.Ypos = tail.Ypos - 1;
                break;
        }

        return {
            Xpos: tail.Xpos,
            Ypos: tail.Ypos,
        };
    }
    return null;
};

/**
 *
 * @param head
 * @param snake
 * @returns
 */
export const isSnkeEat = (head: Object, snake: Array<any>) => {
    for (let i = 1; i < snake.length; i++) {
        if (head.Xpos === snake[i].Xpos && head.Ypos === snake[i].Ypos) {
            return true;
        }
    }

    return false;
};

/**
 *
 * @param board
 * @param snake
 * @param direction
 * @param foodPosition
 * @returns
 */
export const updateBoard = (
    board: Array<any>,
    snake: Array<any>,
    direction: string,
    foodPosition: Object
) => {
    const newBoard = structuredClone(board);
    const newPosSnake = moveSnake(snake, direction);
    newPosSnake.map((pos) => {
        const x = pos.Xpos;
        const y = pos.Ypos;
        newBoard[x][y] = "cellGreen";
    });
    const { XFoodpos, YFoodpos } = foodPosition;
    newBoard[XFoodpos][YFoodpos] = "cellYellow";

    return { newBoard, newPosSnake };
};
