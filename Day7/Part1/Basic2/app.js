const domroot = document.getElementById("root");

const reactdom = ReactDOM.createRoot(domroot);

//This is the easiest way to render a react component but not suitable for large scale applications
// reactdom.render(
//     <div>
//         <h1>React DOM</h1>
//         <div>
//             <h2>React DOM</h2>
//             <p>This is a paragraph</p>
//         </div>
//     </div>
// )

//This is the best way to render a react component
const card1 = (
  <div className="card">
    <h1>Invitation</h1>
    <p>Description</p>
  </div>
);
const card2 = (
  <div className="card">
    <h1>Warning!!</h1>
    <p>Description</p>
  </div>
);
const card3 = (
  <div className="card">
    <h1>Title</h1>
    <p>Description</p>
  </div>
);

const card4 = () =>{
    return(<div className="card">
        <h1>Title</h1>
        <p>Description</p>
    </div>
    )
}

const container = (
  <div>
    {card1}
    {card2}
    {card3}
    {card4}
  </div>
);
reactdom.render(container);
