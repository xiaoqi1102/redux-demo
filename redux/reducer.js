/**
 * Created by yzsoft on 16/4/12.
 */

let reducer=(state={count:0},action)=>{
  let count=state.count;
    switch (action.type){
        case 'increase':
            return {count:count+1};
        default:
            return state
    }
};

export  default reducer;