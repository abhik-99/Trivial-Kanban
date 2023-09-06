
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class AddBoardUserInput {
    userId: string;
    boardId: string;
}

export class RemoveBoardUserInput {
    userId: string;
    boardId: string;
}

export class CreateColumnInput {
    exampleField?: Nullable<number>;
}

export class UpdateColumnInput {
    id: number;
}

export class CreateBoardInput {
    boardName: string;
    boardDescription: string;
}

export class UpdateBoardInput {
    boardName?: Nullable<string>;
    boardDescription?: Nullable<string>;
    id: string;
}

export class CreateCardInput {
    exampleField: number;
}

export class UpdateCardInput {
    exampleField?: Nullable<number>;
    id: number;
}

export class BoardUser {
    userId: string;
    board: Board;
}

export abstract class IQuery {
    abstract boardUsers(): BoardUser[] | Promise<BoardUser[]>;

    abstract columns(): Nullable<Column>[] | Promise<Nullable<Column>[]>;

    abstract column(id: number): Nullable<Column> | Promise<Nullable<Column>>;

    abstract boards(): Board[] | Promise<Board[]>;

    abstract board(id: string): Board | Promise<Board>;

    abstract cards(): Card[] | Promise<Card[]>;

    abstract card(id: number): Card | Promise<Card>;
}

export abstract class IMutation {
    abstract addBoardUser(addBoardUserInput: AddBoardUserInput): BoardUser | Promise<BoardUser>;

    abstract removeBoardUser(removeBoardUserInput: RemoveBoardUserInput): BoardUser | Promise<BoardUser>;

    abstract createColumn(createColumnInput: CreateColumnInput): Column | Promise<Column>;

    abstract updateColumn(updateColumnInput: UpdateColumnInput): Column | Promise<Column>;

    abstract removeColumn(id: number): Nullable<Column> | Promise<Nullable<Column>>;

    abstract createBoard(createBoardInput: CreateBoardInput): Board | Promise<Board>;

    abstract updateBoard(updateBoardInput: UpdateBoardInput): Board | Promise<Board>;

    abstract removeBoard(id: string): Board | Promise<Board>;

    abstract createCard(createCardInput: CreateCardInput): Card | Promise<Card>;

    abstract updateCard(updateCardInput: UpdateCardInput): Card | Promise<Card>;

    abstract removeCard(id: number): Card | Promise<Card>;
}

export class Column {
    exampleField?: Nullable<number>;
}

export class Card {
    exampleField: number;
    exampleField2: string;
}

export class Board {
    id: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    boardName: string;
    boardDescription: string;
    createdBy: string;
}

export type DateTime = any;
type Nullable<T> = T | null;
