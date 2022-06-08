import { createContext, useEffect, useState } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [feedbackEditState, setFeedbackEditState] = useState({
        item: {},
        edit: false
    })

    useEffect(()=>{
        fetchData()
    }, [])

    const fetchData = async () => {
        const response = await fetch('/feedback?_sort=id&_order=desc')
        const data = await response.json()
        setFeedback(data) 
        setIsLoading(false)
    }

    const editFeedback = (item) => {
        setFeedbackEditState({
            item,
            edit: true
        })
    }

    const updateFeedback = async (id, updFeedback) =>{
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updFeedback),
        })
        const data = await response.json()
        setFeedback(feedback.map(item=>item.id===id ? {...item, ...data} : item))
    }

    const deleteFeedback = async (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            await fetch(`/feedback/${id}`, {
                method: 'DELETE',
            })
            setFeedback(feedback.filter((i) => i.id !== id))
        }
    }

    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback),
        })
        const data = await response.json()
        setFeedback([data, ...feedback])
    }

    return (
        <FeedbackContext.Provider value={{ feedback, addFeedback, editFeedback, 
        deleteFeedback, feedbackEditState, updateFeedback, isLoading}}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext