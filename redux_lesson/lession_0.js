/**
 * Created by yzsoft on 16/4/12.
 */
import React from 'react';
import {createStore} from 'redux';
import {Provider,connect} from 'react-redux';

import Index from './../component/index';
import reducers from './../redux/reducer';

let store =createStore(reducers);

let mapStateToProps=(state)=>{
    return{count:state.count}
};

let Content =connect(mapStateToProps)(Index);

let {Component}=React;

class  App extends  Component{
    render(){
        return (
            <Provider store={store}>
                <Content/>
            </Provider>
        )
    }
}

export  default App;