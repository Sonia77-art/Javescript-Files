function Button (props) {
    function handleClick(event){
      console.log("button hover");
      alert ("button was clicked");
    }
   
    return <button onClick = {handleClick}>Click me </button>;
}


export default Button