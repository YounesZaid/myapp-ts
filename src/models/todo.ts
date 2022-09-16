
export interface ITodo{
  id:number,
  todo: string,
  isDone: boolean
}

export type Actions = {type:'Add', payload:string} | {type:'Remove', payload:number}| {type:'Done', payload:number}

export const TodoReducer = (state: ITodo[], action: Actions) => {
  console.log('action ', action)
  switch (action.type) {
    case 'Add':
      return[
        ...state,
        { id: Date.now(), todo:action.payload, isDone: false }
      ]
    case 'Remove':
      console.log('inside Remove',state)
      return state.filter((todo) => todo.id !== action.payload)
      case 'Done':
        console.log('inside Done',state)
      return state.map((todo) =>
      todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
    )
    default:
      return state
  }
}



