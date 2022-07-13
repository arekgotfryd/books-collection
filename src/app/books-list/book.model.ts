export interface Book {
  id: string;
  volumeInfo: {
    name: string;
    authors: Array<string>;
  };
}
