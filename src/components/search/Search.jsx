const Search = ({val, onSearch, onSubmit, ...props})=>{
    return(
        <div className="search mb-5">
            <input
            value = {val}
            className = "form-control"
            onChange={onSearch}
            placeholder = "Search for a meal."
            {...props}
            />
         <button onClick={onSubmit} className="btn btn-primary">Search</button> 
        </div>
    )
}

export default Search