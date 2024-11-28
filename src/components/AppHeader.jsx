import { useGlobalContext } from "../contexts/GlobalContext";

const Search = () => {
    const { searchQuery, setSearchQuery } = useGlobalContext();

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <>

            <div className="container">
                <h1>ecco la lista dei film</h1>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search for a movie..."
                />
            </div>

        </>

    );
};

export default Search;
