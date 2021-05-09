import "./App.css";
import { NavBar } from "./components/NavBar"

// const filterCriteria = ({title, list}) => {
//   return <>
//     <h3>{title}</h3>
//     {list.map(item => {
//       return <li>{item}</li>
//     })}
//   </>
// }

// const Filters = ({title, options}) => {
//   return <>
//     <h2>Filters</h2>
//     <ul>
//       {options.map(({title, list}) => {
//         <FilterCriteria title={title} list={list} />
//       })};
//     </ul>
//   </>
// }

function App() {
  // const filterComponentData = {
  //   title: 'Filters',
  //   options: [
  //     {title: 'Category', list: ['Eating out', 'Groceries', 'Electronic']},
  //     {title: 'Type', list: ['Income', 'Expense']}
  //   ]
  // }
  return (
    <>
      <div className="layout">
        <NavBar/>
      </div>
      
      {/* <Filters 
        title={filterComponentData.title} 
        options={filterComponentData.options} 
        />  */}
    </>
  )
}

export default App;