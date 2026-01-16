import { Component } from "react";

class ClassBasedComponent extends Component {
  state = {
    showText: false,
    changeColor: true,
    count: 0,
    changeCountStyle : false
  };

  handleClick = () => {
    console.log("Button clicked");

    const { showText, changeColor } = this.state;
    // Now showText contains this.state.showText

    // Basically here we are toggling the variable value on click
    this.setState({
      showText: !showText,
      changeColor: !changeColor,
    });
  };

  handleCount = () => {
    let { count } = this.state;
    console.log(count);

    this.setState({
      count : count + 1,
    })
  };


  handleCountReachedTen = () => {
    this.setState({
      ...this.state,
      changeCountStyle : !this.state.changeCountStyle
    })
  }
  // componentDidMount -> we use this to do the things on page load

  // componentDidUpdate
  // componentWillMount

  componentDidMount() {
    console.log(
      "This method is called on page load, whatever we do here happens when the page is loaded. Also if we do any changes in the state variables it will re-render them"
    );
    // Also re-rendering doesnt means reloading the whole page, it simply display the changes, Dont reload the whole page
    const { showText } = this.state;

    this.setState({
      showText: !showText,
    });
  }


  // Whenever the update happens this method is called
  componentDidUpdate(prevProps, prevState){
    if(prevState && prevState.count !== this.state.count && this.state.count === 10){
      this.setState({
        ...this.state,
        changeCountStyle :true,
      })
    }
  }


  componentWillUnmount(){
    console.log('Component is unmounted/ destroyed');
  }


  render() {
    console.log(this.state);

    const { showText, changeColor, count, changeCountStyle} = this.state;

    return (
      <div>
        {showText ? (
          <h1 style={{ color: changeColor ? "red" : "white" }}>
            Class based Component
          </h1>
        ) : (
          ""
        )}

        <button onClick={this.handleClick}>Click to Toggle</button>
        <br />
        <br />
        <button onClick={this.handleCount}>Increase count value</button>
        
        <h3 style={{color : changeCountStyle ? 'green' : 'white', fontSize : changeCountStyle ? '30px' : '16px'}}>Count : {count}</h3>
        
        {/* {count === 10 ? this.handleCountReachedTen() : ""}  */}

        {/*Above thing gives infinite loop: We should never call the this.setState() function directly in render method, this will result in infinite loop */}
        {/* Because when setState() is called it re-renders the page by calling render() method again, and if the condition is met to call this.setState() it will call render function again and again*/} 

      </div>
    );
  }
}

export default ClassBasedComponent;
