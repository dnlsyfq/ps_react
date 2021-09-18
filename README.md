# React 

## Install

* via CDN 
```
<body>
    <script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
</body>
```

### React Element
* React.createElement(<html>,<attribute> | null , <text>)

```
const title = React.createElement(
    'h1',
    {
        id:'main-title',
        title:'This is a title.'
    },
    'My First React Element'
)


ReactDOM.render(
    title,
    document.getElementById('root')
)
```

```
const title = React.createElement(
    'h1',
    {
        id:'main-title',
        title:'This is a title.'
    },
    'My First React Element'
)

const desc = React.createElement(
    'p',
    null,
    'I just learned how to create a React node and render to DOM'
)

const header = React.createElement(
    'header',
    null,
    title,
    desc
)


ReactDOM.render(
    header,
    document.getElementById('root')
)

```

### JSX 
//babel to createElement
```
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<script type="text/babel" src="./app.js"></script>
```

```
const header = (
    <header>
        <h1> My First React Element! </h1>
        <p> I just learned how to create a React node and render it into the DOM. </p>
    </header>
);

ReactDOM.render(
    header,
    document.getElementById('root')
)
```

// another method 

```
const title = 'My First React Element';
const desc = 'I just learned how to create a React node and render it into the DOM.';
const header = (
    <h1>{title}</h1>
    <p>{desc}</p>
);

ReactDOM.render(
    header,
    document.getElementById('root')
)
```

```
const title = 'My First React Element';
const desc = 'I just learned how to create a React node and render it into the DOM.';
const myTitleID = 'main-title';
const name = 'Guil';

const header = (
    <header>
        <h1 id={myTitleID}>{name}'s First React Element</h1>
        <p>{desc}</p>
    </header>
);

ReactDOM.render(
    header,
    document.getElementById('root')
)

```

// comment in jsx 
```
{/* comment */}
```

// class in HTML
```
<div className=""></div>
```

### JSX 2 
// create component with function
```
function Header(){
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1</span>
        </header>
    );
}

ReactDOM.render(
    <Header />,
    document.getElementById('root')
)
```

* arrow function component
```
const Header = () => (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1</span>
        </header>
    );


ReactDOM.render(
    <Header />,
    document.getElementById('root')
)

```

* composition function component

```


const Header = () => (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1</span>
        </header>
    );

const Player = () => {
    return (
        <div className="player">
            <span className="player-name">
                Guil
            </span>

            <Counter />
        </div>
    );
}

const Counter = () => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">35</span>
            <button className="counter-action increment"> + </button>
        </div>
    )
}


ReactDOM.render(
    <Player />,
    document.getElementById('root')
)

```

* composition component with top component
```
// import * as ReactDOM from "react-dom";


const Header = () => (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1</span>
        </header>
    );

const Player = () => {
    return (
        <div className="player">
            <span className="player-name">
                Guil
            </span>

            <Counter />
        </div>
    );
}

const Counter = () => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">35</span>
            <button className="counter-action increment"> + </button>
        </div>
    )
}

const App = () => {
    return (
        <div className="scoreboard">
            <Header />

        {/*    Players List */}
            <Player />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)


```

### react props 

Every React component and element can receive a list of attributes called properties (or props). Props are a core concept in React because it's how you get data into a component. Most of the components in your UI will be configured with props. For example, you'll add functionality to a component, have it behave a certain way, and display its contents with props.


props

* list of properties used to pass data to component
```
<Component propName="propValue" />
```

```
<Header 
  title="My Scoreboard" 
  totalPlayers={5}
  isFun={true}
/>
```

* props 
```
const Header = (props) => {
    console.log(props)
    return (
        <header>
            <h1>{ props.title}</h1>
            <span className="stats">Players: {props.totalPlayers + 1}</span>
        </header>
    );
}

const App = () => {
    return (
        <div className="scoreboard">
            <Header title="Scoreboard" totalPlayers={1}/>
            <Player />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

```

* props with function
```
const Header = (props) => {
    console.log(props)
    return (
        <header>
            <h1>{ props.title}</h1>
            <span className="stats">Players: {props.totalPlayers(5)}</span>
        </header>
    );
}

const App = () => {
    return (
        <div className="scoreboard">
            <Header title="Scoreboard" totalPlayers={n => n + 1}/>
            <Player />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)


```

* props with composite component
```
const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                {props.name}
            </span>

            <Counter score={props.score}/>
        </div>
    );
}

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment"> + </button>
        </div>
    )
}

const App = () => {
    return (
        <div className="scoreboard">
            <Header title="Scoreboard" totalPlayers={n => n + 1}/>
            <Player name="Guil" score={50}/>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
```

* JS array methods with React JSX 

```
const players = [
    {
        name: "Guil",
        score: 50
    },
    {
        name: "Treasure",
        score: 85
    },
    {
        name: "Ashley",
        score: 95
    },
    {
        name: "James",
        score: 80
    }
]

const Header = (props) => {
    // console.log(props)
    return (
        <header>
            <h1>{ props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    );
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                {props.name}
            </span>

            <Counter score={props.score}/>
        </div>
    );
}

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment"> + </button>
        </div>
    )
}

const App = (props) => {
    return (
        <div className="scoreboard">
            <Header title="Scoreboard" totalPlayers={props.initialPlayers.length}/>

            {/*<Player name="Guil" score={50}/>*/}
            {/*<Player name="Treasure" score={90}/>*/}
            {/*<Player name="Ashley" score={85}/>*/}
            {/*<Player name="James" score={80}/>*/}

            {props.initialPlayers.map( player =>
                <Player name={player.name} score={player.score}/>
            )}
        </div>
    )
}

ReactDOM.render(
    <App initialPlayers={players} />,
    document.getElementById('root')
)

```

* react key , quick way to identify element in the list

### react state

In React, state stores information about a component that can change over time. State determines how a component renders and behaves, and is what makes components interactive, allowing them to update and react to changes by updating DOM elements.

Data gets handle in react 
    1. props ( but props are read only / immutable) - function
    2. state (dynamic, change over time ) - class

class component offer more powerful way to build , class allow to use state

state
1. component state - state that is specific to a component and not share outside of component
2. application state - data available to entire application

* convert function to class 
```
// before 

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment"> + </button>
        </div>
    )
}
```
```
// after 


```

* stateful component 
state change over time with user action / response

score change 

* method 1
```
class Counter extends React.Component{
    
    
    constructor() {
        super();
        this.state = {
            score:0
        };
    }

    render(){
        return(
            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <span className="counter-score">{ this.state.score }</span>
                <button className="counter-action increment"> + </button>
            </div>
        )
    }
}
```
* method 2 with babel 
```
class Counter extends React.Component{


    // constructor() {
    //     super();
    //     this.state = {
    //         score:0
    //     };
    // }

    state = {
        score:0
    }

    render(){
        return(
            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <span className="counter-score">{ this.state.score }</span>
                <button className="counter-action increment"> + </button>
            </div>
        )
    }
```

* state is local to component, meaning component can maintain its own state 
* state events 

```
class Counter extends React.Component{

    state = {
        score:0
    }

    incrementScore(){
        console.log('Hi');
    }

    render(){
        return(
            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <span className="counter-score">{ this.state.score }</span>
                <button className="counter-action increment" onClick={this.incrementScore}> + </button>
            </div>
        )
    }
}

```

* bind state 

// method 1
```
class Counter extends React.Component{

    state = {
        score:0
    }

    incrementScore(){
        this.setState({
           score: this.state.score + 1
        });
    }

    render(){
        return(
            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <span className="counter-score">{ this.state.score }</span>
                <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button>
            </div>
        )
    }
}

```

// method 2

```
class Counter extends React.Component{

    state = {
        score:0
    }

    incrementScore(){
        this.setState({
           score: this.state.score + 1
        });
    }

    render(){
        return(
            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <span className="counter-score">{ this.state.score }</span>
                <button className="counter-action increment" onClick={() => this.incrementScore()}> + </button>
            </div>
        )
    }
}

```

// method 3
```
class Counter extends React.Component{

    state = {
        score:0
    }

    incrementScore = () => {
        this.setState({
           score: this.state.score + 1
        });
    }

    render(){
        return(
            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <span className="counter-score">{ this.state.score }</span>
                <button className="counter-action increment" onClick={this.incrementScore}> + </button>
            </div>
        )
    }
}

```

```
// import * as ReactDOM from "react-dom";

const players = [
    {
        name: "Guil",
        score: 50,
        id:1
    },
    {
        name: "Treasure",
        score: 85,
        id:2
    },
    {
        name: "Ashley",
        score: 95,
        id:3
    },
    {
        name: "James",
        score: 80,
        id:4
    }
]

const Header = (props) => {
    // console.log(props)
    return (
        <header>
            <h1>{ props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    );
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                {props.name}
            </span>

            <Counter />
        </div>
    );
}

// const Counter = (props) => {
//     return (
//         <div className="counter">
//             <button className="counter-action decrement"> - </button>
//             <span className="counter-score">{props.score}</span>
//             <button className="counter-action increment"> + </button>
//         </div>
//     )
// }

class Counter extends React.Component{

    state = {
        score:0
    }

    incrementScore = () => {
        this.setState({
           score: this.state.score + 1
        });
    }

    decrementScore = () => {
        this.setState({
            score: this.state.score - 1
        });
    }

    render(){
        return(
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
                <span className="counter-score">{ this.state.score }</span>
                <button className="counter-action increment" onClick={this.incrementScore}> + </button>
            </div>
        )
    }
}




const App = (props) => {
    return (
        <div className="scoreboard">
            <Header title="Scoreboard" totalPlayers={props.initialPlayers.length}/>

            {/*<Player name="Guil" score={50}/>*/}
            {/*<Player name="Treasure" score={90}/>*/}
            {/*<Player name="Ashley" score={85}/>*/}
            {/*<Player name="James" score={80}/>*/}

            {props.initialPlayers.map( player =>
                <Player name={player.name} key={player.id.toString()}/>
            )}
        </div>
    )
}

ReactDOM.render(
    <App initialPlayers={players} />,
    document.getElementById('root')
)


```

### update state based on previous state 

* method 1
```
    incrementScore = () => {
        this.setState( prevState => {
            return {
                score: prevState.score + 1
            };
        });
    }

    decrementScore = () => {
        this.setState( prevState => {
           return {
               score: prevState.score - 1
           }
        });
    }
```

* method 2
```
    incrementScore = () => {
        this.setState(
            prevState => ({
                score: prevState.score + 1
            })
        );
    }


    decrementScore = () => {
        this.setState(
            prevState => ({
                score:prevState.score - 1
            })
        );
    }
```

### create application state

// remove item from state
```
1. convert from function to class (stateful component)
2. state is an object that stores all data component need


```

* props what react uses to pass data from component to component, pass function thru props even data from state
