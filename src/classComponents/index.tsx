import React, { Component } from 'react'

export interface IProps {
    initialValue : number;
}

export interface IState {
    count : number;
}

export default class ClassComponent extends Component<IProps , IState> {
constructor(props: IProps){  
     super(props);  
       this.state={
        
        
        
        count: this.props.initialValue,


  };


} 



componentDidMount(){
  console.log("componentDidMount");
  this.setState({count: this.state.count + 1})
}

componentDidUpdate(prevProps: IProps, prevState: IState){
  console.log("componentDidUpdate",prevProps,prevState );
  
}


// shouldComponentUpdate(){
//   console.log("shouldComponentUpdate" );
//   return false
  
// }

onClickButton = ()=>{
  this.setState(pre=>({

    ...pre,
    count: this.state.count + 1,
  }))
}



  render() {
    return (
      <div><h2>{this.state.count}</h2>
      
      
      <button onClick={this.onClickButton}>Increase</button>
      </div>
    )
  }
}
