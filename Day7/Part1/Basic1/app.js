// console.log("Hello World")

{/* <ul>
    <li>Item1</li>
    <li>Item2</li>
</ul> */}
// we need to display the above list in the html code using react and without using InnerHtml

//One way to do this is by using the createElement method of the document object
// const root = document.getElementById("root");
// const li1 = document.createElement("li");
// li1.innerText = "Item1";
// const li2 = document.createElement("li");
// li2.innerText = "Item2";
// const ul = document.createElement("ul");
// ul.appendChild(li1);
// ul.appendChild(li2);
//M1:
// root.appendChild(ul);
//M2:
// root.innerHTML = ul.outerHTML;

// //Another way of doing this is by using the React.createElement method
// const Item1 = React.createElement("li",{},"Maurya")
// console.log("Item: ",Item1)
// const Item2 = React.createElement("li",{},"Sambhav")
// console.log("Item: ",Item2)
// // why we write the items in array is because the createElement method takes an array of children as a parameter since order of the children matters in react
// const ul = React.createElement("ul",{},[Item1,Item2])
// const rootelem = document.getElementById("root");
// // we are using reactdom.createroot because we are trying to render the react element in the html file
// const reactRoot = ReactDOM.createRoot(rootelem);
// console.log("React Root: ",reactRoot)
// reactRoot.render(ul);
// console.log("List :",ul)

// const getstud = (names,classes,subject1,subject2)=>{
//     const obj = {
//         name:names,
//         class:classes,
//         subject1:subject1,
//         subject2:subject2,
//     }
//     return obj;
// }
// const stud1 = getstud("Maurya","12th","100","100")
// console.log("Student1: ",stud1)

// another method to add children to the ul element is by using the React.createElement method
// const item3 = {
//   $$typeof: Symbol.for("react.element"),
//   type: "li",
//   key: null,
//   ref: null,
//   props: {
//     children: [
//       {
//         $$typeof: Symbol.for("react.element"),
//         type: "li",
//         key: null,
//         ref: null,
//         props: {
//           children: "Item1",
//         },
//         _owner: null,
//         _store: {},
//       },
//       {
//         $$typeof: Symbol.for("react.element"),
//         type: "li",
//         key: null,
//         ref: null,
//         props: {
//           children: "Item2",
//         },
//         _owner: null,
//         _store: {},
//       },
//     ],
//   },
//   _owner: null,
//   _store: {},
// };

// console.log("Item3:", item3);

// //Another way of doing this is by using the React.createElement method
// const Item1 = <li>Item1</li>
// console.log("Item: ",Item1)
// const Item2 = <li>Item2</li>
// console.log("Item: ",Item2)
// // why we write the items in array is because the createElement method takes an array of children as a parameter since order of the children matters in react
// const ul = <ul>{Item1}{Item2}</ul>
// const rootelem = document.getElementById("parent");
// // we are using reactdom.createroot because we are trying to render the react element in the html file
// const reactRoot = ReactDOM.createRoot(rootelem);
// console.log("React Root: ",reactRoot)
// reactRoot.render(ul);
// console.log("List :",ul)

//Another way of doing this is by using the React.createElement method
// why we write the items in array is because the createElement method takes an array of children as a parameter since order of the children matters in react
const ul = <ul><li>Item1</li><li>Item2</li></ul>
//react element is an object that represents the html element
const rootelem = document.getElementById("parent");
// we are using reactdom.createroot because we are trying to render the react element in the html file
const reactRoot = ReactDOM.createRoot(rootelem);
console.log("React Root: ",reactRoot)
reactRoot.render(ul);
console.log("List :",ul)