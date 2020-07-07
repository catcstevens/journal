import React, {useState} from "react"
import {withRouter} from "react-router-dom"

const EntryForm = ({history, category, addEntryToJournal}) => {
    const [entry,setEntry] = useState(null)
    const [errorMessage,setErrorMessage] = useState(null)

    function onTextAreaChange (event) {
        setEntry(event.target.value)
    }

    function handleSubmit (event) {
        event.preventDefault()
        // If we have an entry, call addEntryToJournal
        if (entry && entry.length > 0) {
            setErrorMessage(null)
            addEntryToJournal({category, entry})
            return history.push("/")
        }
        // If there is nothing in the textarea, show a message
        return setErrorMessage("Entry cannot be blank")
    }

    return (
        <form onSubmit={handleSubmit}>
            {errorMessage && <p>{errorMessage}</p>}
            <div>
                <textarea onChange={onTextAreaChange}></textarea>
            </div>
            <input type="submit" value="Create new entry" />
        </form>
    )
}

export default withRouter(EntryForm)