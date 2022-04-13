const Search = ({val, onSearch, ...props})=>{
    return(
        <div className="search mb-5">
            <input
            value = {val}
            className = "form-control"
            onChange={onSearch}
            placeholder = "Ieškoti patiekalo."
            {...props}
            />
            
        </div>
    )
}

export default Search