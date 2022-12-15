export interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
}

// type Actions =
//     | {type: 'add'; payload:string}
//     | {type: 'remove'; payload:number}
//     | {type: 'done'; payload:number} ;

//     const TodoReducer = (state: Todo[], action:Actions) => {
//         switch (action.type) {
//             case 'add':
//                 return [
//                     ...state,
//                     {id : Date.now(), todo: action.payload, isCompleted:false}
//                 ];

//             case 'remove':
//                 return state.filter(todo => todo.id !== action.payload);
//                 case 'done':
//                     return state.map(todo => todo.id !== action.payload ? {...todo, isCompleted: !todo.isCompleted : todo})

//             default:
//                 return state;
//         }
//     }

// import { useReducer } from "react";
// const Reducer = () => {

// const [state, dispatch] = useReducer(TodoReducer, [])

//   return <div></div>;
// };

// export default Reducer;
