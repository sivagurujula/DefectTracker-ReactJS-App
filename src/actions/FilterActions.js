import {FILTER_PRIORITY,FILTER_CATEGORY} from '../constants/ActionConstants.js'

export function priorityActionCreator(priority){
    return  {
        type :FILTER_PRIORITY,
        priority
        }
}

export function categoryActionCreator(category){
    return {
        type : FILTER_CATEGORY,
        category
    }
}

export function requestPriorities(priorities){
    return {
        type : "FETCH_PRIORITIES_REQUEST",
        isLoading : true,
        priorities
    }
}

export function recievePriorites(priorities){
    return {
        type : "FETCH_PRIORITIES_SUCCESS",
        isLoading : false,
        priorities:priorities
    }
}

export function fetchPriorities(priorities){
    return function(dispatch){
        dispatch(requestPriorities(priorities))
        return fetch('http://localhost:8080/api/priorities').
                then(response => response.json(),
                error => console.log('An error occurred.', error)
                ).then(json => {console.log(json._embedded);
                                const tempPriorities = ["Critical","High","Medium","Low"]
                                dispatch(recievePriorites(tempPriorities))
                                }
                    )
    }

}

