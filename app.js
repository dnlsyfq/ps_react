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

