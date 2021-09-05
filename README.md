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

