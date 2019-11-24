import {FILTER_CATEGORY,FILTER_PRIORITY} from '../constants/ActionConstants.js'
import Defects from '../Data/Products.json'

const filterDefectsReducer = (state={defects:Defects.defects,priority:"All",category:"All",priorities:[]},action)=>{
    switch (action.type){
        case FILTER_PRIORITY: 
            console.log('state at reducer')
            console.log(state)
            console.log(action.priority)
            const newState = Object.assign({},state,{priority:action.priority})
            console.log('newState')
            console.log(newState)
            return newState
        case FILTER_CATEGORY:
            return Object.assign({},state,{category:action.category})
        case "FETCH_PRIORITIES_SUCCESS":
                return Object.assign({},state,{priorities:action.priorities})
        default:
            return state;
    }

}

export default filterDefectsReducer