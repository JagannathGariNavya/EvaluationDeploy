// src/types/trello.ts
export interface Board {
  id: string;
  name: string;
  dateLastActivity: string;
}

export interface List {
  id: string;
  name: string;
  idBoard: string;
}

export interface Card {
  id: string;
  name: string;
  desc: string;
  due: string;
  idList: string;
}
