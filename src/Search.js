import react from 'react';
import './Search.css';

function Search(){
    return(
        <div className='Search'>
            <form>
                <input type='search' className='formInput' placeholder='Enter a city...' />
                <input type='submit' className='formSubmit' value='Search' />
                <button>Current</button>
            </form>
        </div>
    )
}

export default Search;