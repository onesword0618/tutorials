export type ISquare = 'X' | 'O' | null;
export type History = {
  squares: ISquare[],
  location: {
    col: number,
    row: number
  }

}
