import React, {Component} from "react";

class Profile extends Component{
constructor(props){
    super(props);
    //CREATE STATE
    this.state = {
        userInfo : {
            name: "Dummy Name",
            location :  "Dummy Location",
        },
    }
    console.log("Child Constructor" + this.props.name);
}
async componentDidMount(){ //ASYNC OPERATION WILL SHOW RESULT AFTER ALL CONSOLE AND RESULTS
   this.timer = setInterval(()=>{
        console.log("Namaste React OP");
    },1000)
    // const data = await fetch("https://api.github.com/users/jitendermalik17");
    // const json = await data.json();
    // console.log(json);
    // this.setState({
    //   userInfo: json
    // });
    //console.log("Child componentDidMount" + this.props.name);
    console.log("Child componentDidMount");
    
}
componentDidUpdate(prevProps,prevState){
    if(this.state.count !== prevState.count){
            // code
    }

    if(this.state.count2 !== prevState.count2){
        // code
}
    console.log("Component Did Update!");

}

componentWillUnmount(){
    clearInterval(this.timer);
    console.log("Component Will Unmount!");


}
    render(){
        console.log("Child render" + this.props.name);
        const {count} = this.state;
        return(
            <>
        <div>
        <h1>Profile Class Component</h1>
        <h2>Login: {this.state.userInfo?.login}</h2>
        <div><img src={this.state.userInfo?.avatar_url} alt="" /></div>
        <h2>Created At: {this.state.userInfo?.created_at}</h2>
        </div>
        </>
        )
    }
}
export {Profile};