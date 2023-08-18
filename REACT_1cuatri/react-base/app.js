const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

//renderizar una app de react
root.render(
    React.createElement(
        "div"
    , null, 
    "Hello World")  // JSX is transpiled to createElement calls by Babel
);


//
const HolaMundo = () =>{
    return (
        <div>
            <h1> NAME hola mundo</h1>
        </div>
        );
}