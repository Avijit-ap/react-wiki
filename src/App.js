
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards.js";
import Filters from "./components/Filter/Filters.js";
import Pagination from "./components/Pagination/Pagination.js";
import Search from "./components/Search/Search.js";
/*https://youtu.be/35QCQnohLg8?t=5479 */

function App() {
  let [pageNumber, updatePageNumber] = useState(1);
  let [search, setSearch] = useState("");

  //console.log(pageNumber);
  let [status, updateStatus] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;
  

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      console.log(data)
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
<h1 className="text-center ubuntu my-4">
Rick & Morty <span className="text-primary">Wiki</span>
</h1>
<Search updatePageNumber={updatePageNumber} setSearch={setSearch}/>
<div className="container">
<div className="row">
<div className="col-3">
<Filters />
</div>
<div className="col-8">
<div className="row">
<Cards results={results}/>
</div>
</div>
</div>
</div>
<Pagination info={info} pageNumber={pageNumber} updatePageNumber={updatePageNumber}/>
</div>
);
}

    
 


export default App;
