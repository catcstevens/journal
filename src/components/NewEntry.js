  
import React,{useState,useEffect} from 'react'
import EntryForm from "./EntryForm"

const NewEntry = ({match,categories,addEntryToJournal}) => {

    const [errorMessage,setErrorMessage] = useState(null)
    const selectedCategory = match.params ? match.params.id : -1
    const category = categories[selectedCategory]

    useEffect(() => {
        // If we have a valid selected category, unset the error message
        // If we have an invalid selected category, set an error message
        category
        ? setErrorMessage(null)
        : setErrorMessage("Invalid category")
    },[category,categories])


    return (
        <div>
            <h1>New Entry for {category}</h1>
            {errorMessage && <p>{errorMessage}</p>}
            {category && <EntryForm category={category} addEntryToJournal={addEntryToJournal}/>}
        </div>
    )
}

export default NewEntry