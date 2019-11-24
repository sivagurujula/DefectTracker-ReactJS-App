import {connect} from 'react-redux'
import FilterDetails from '../Components/FilterDetails'
import {priorityActionCreator,categoryActionCreator,fetchPriorities} from '../actions/FilterActions'

const mapStateToProps = (state) => {
    return {
        ...state,
        priority : state.priority,
        category : state.category,
        priorities : state.priorities
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPriorityChange : priority => {
            console.log(priority)
            dispatch(priorityActionCreator(priority))
        },
        onCategoryChange : category => {
            dispatch(categoryActionCreator(category))
        },
        fetchPriorities : () =>{
            dispatch(fetchPriorities())
        }
    }
}


const FilterDefectsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterDetails)


export default FilterDefectsContainer