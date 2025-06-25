const domroot = document.getElementById("root");
const reactroot = ReactDOM.createRoot(domroot);

const arr = [
  { names: "rajesh", ages: 25 },
  { names: "ram", ages: 40 },
  { names: "raj", ages: 39 },
  { names: "ravi", ages: 51 },
  { names: "rani", ages: 34 },
];

const Card = (props) => {
  const { names, ages } = props;
  return (
    <div className="card">
      <h1>{names}</h1>
      <h2>{ages}</h2>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1 className="title">Hello World</h1>
      {arr.map((item) => (
        <Card names={item.names} ages={item.ages}/>
      ))}
    </div>
  );
};

reactroot.render(App());
