import React from 'react';

class App extends React.Component{
  
  state = {
    favorites: []
  }

  componentDidMount(){
    fetch('http://localhost:8080/favorites')
      .then(res => res.json())
      .then( favorites => {
        this.setState({ favorites })
      })
  }
  
  render(){
    return (
      <div>
        {this.state.favorites.map( favorite => (
          <li>{favorite.userName}: {favorite.food}</li>
        ))}
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name</label>
            <input type="text" name="userName" />
          </div>
          <div>
            <label>Food</label>
            <input type="text" name="food" />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }


  handleSubmit = (e) =>{
    this.setState({ 
      favorites: [ ...this.state.favorites, {
        userName: e.target.userName.value,
        food: e.target.food.value
      }]
    })
    e.preventDefault()
    fetch('http://localhost:8080/favorites', {
      method:'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        userName: e.target.userName.value,
        food: e.target.food.value
      })
    })
  }


}

export default App;
