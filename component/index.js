/**
 * Created by yzsoft on 16/4/12.
 */
import React from 'react';
import {connect} from 'react-redux';
import {increaseAction} from '../redux/actions';

let {Component,PropTypes} = React;

class Index extends Component{

    constructor(props){
        super(props)
    }
    handleClick(){
        console.log(this.props);

        let {dispatch} =this.props;
        dispatch(increaseAction);
    }
    render(){
        let {count}=this.props;
        return <div onClick={this.handleClick.bind(this)} style={styles.circle}>
            {count}
        </div>
    }
}
let styles = {
    circle:{
        width:'100px',
        height:'100px',
        position:'absolute',
        left:'50%',
        top:'50%',
        margin:'-50px 0 0 -5px',
        borderRadius:'50px',
        fontSize:'60px',
        color:'#fff',
        lineHeight:'100px',
        textAlign:'center',
        backgroundColor:'#000'
    }
};
Index.propTypes={
    count:PropTypes.number.isRequired
}
export default Index;