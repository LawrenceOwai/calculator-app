import React, { Component } from 'react';
class Counter extends Component {
    state={                                                 //state here is an objesct
        count:0                                        //count here is a property of the state object
    };

     handleIncrement= () =>{
        this.setState({ count:this.state.count + 1 });
        };

    render() {                                            //render here is a method
        return(                                                   //we need to call the method this.formatCount in the return field
            <div>  
               <span className={this.getBadgeClasses()}> {this.formatCount()}   </span>      
                <button onClick={this.handleIncrement} className="btn btn-secondary" >Increment</button>   
            </div>
        );
    }

    getBadgeClasses(){
        let classes= "badge bg-"
        classes += this.state.count===0? "warning" : "primary";
        return classes;
    }
    formatCount(){
        const{count}=this.state;
        return count ===0 ? "ZERO" : count
    }
}
 
export default Counter;