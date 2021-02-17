// action = {
// 	type: 'CREATE_EVENT',
// 	title:'でもテスト',
// 	body:'これはでもです。'
// }

// before①：stateが空の場合
// state = []

//after①：stateが空の場合
// state = [
// 	id:1,
// 	type: 'CREATE_EVENT',
// 	title:'でもテスト',
// 	body:'これはでもです。'
// ]

//before②：stateに値が入っている場合
// state = [
//   { id: 1, title: "デモ1", body: "デモ1です。" },
//   { id: 2, title: "デモ2", body: "デモ2です。" },
//   { id: 3, title: "デモ3", body: "デモ3です。" },
// ];

//after②：stateに値が入っている場合
// state = [
//   { id: 1, title: "デモ1", body: "デモ1です。" },
//   { id: 2, title: "デモ2", body: "デモ2です。" },
//   { id: 3, title: "デモ3", body: "デモ3です。" },
//   { id: 4, title: "デモ4", body: "デモ4です。" }
// ];

import { CREATE_EVENT, DELETE_EVENT, DELETE_ALL_EVENTS } from "../actions";

const events = (state = [], action) => {
  switch (action.type) {
    case CREATE_EVENT:
      const event = { title: action.title, body: action.body };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, ...event }];
    case DELETE_EVENT:
      return state.filter((event) => event.id !== action.id);
    case DELETE_ALL_EVENTS:
      return [];
    default:
      return state;
  }
};

export default events;
