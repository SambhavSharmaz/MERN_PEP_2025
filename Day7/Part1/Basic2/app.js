const domroot = document.getElementById("root");

const reactroot = ReactDOM.createRoot(domroot);

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
// const card1 = (
//   <div className="card">
//     <h1>Invitation</h1>
//     <p>Description</p>
//   </div>
// );

// const card2 = (
//   <div className="card">
//     <h1>Warning!!</h1>
//     <p>Description</p>
//   </div>
// );
// const card3 = (
//   <div className="card">
//     <h1>Title</h1>
//     <p>Description</p>
//   </div>
// );

const Card1 = (obj) =>{
    return(<div className="card">
        <h1>{obj.title}</h1>
        <p>Description</p>
    </div>
    )
}

const card2 = (title) =>{
    return(<div className="card">
        <h1>-----FIN------</h1>
        <p>Description</p>
    </div>
    )
}

const container = (
  <div>
    {Card1({title:"hello"})}
    {/* The const Card1 needs to be capital instead of card1 for the creation of tag beacuse its case sensitive */}
    <Card1 title="bye-bye"></Card1>
    {card2("The End")}
    {/* {card2}
    {card3} */}
  </div>
);
reactroot.render(container);
