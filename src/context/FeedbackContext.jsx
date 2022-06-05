import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from "react";
import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState(FeedbackData)

    const [feedbackEditState, setFeedbackEditState] = useState({
        item: {},
        edit: false
    })

    const editFeedback = (item) => {
        setFeedbackEditState({
            item,
            edit: true
        })
    }

    const updateFeedback = (id, updFeedback) =>{
        console.log(id, updFeedback)
        setFeedback(feedback.map(item=>item.id===id ? {...item, ...updFeedback} : item))
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((i) => i.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([...feedback, newFeedback])
    }

    return (
        <FeedbackContext.Provider value={{ feedback, addFeedback, editFeedback, deleteFeedback, feedbackEditState, updateFeedback}}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext