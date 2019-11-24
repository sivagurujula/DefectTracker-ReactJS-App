import {connect} from 'react-redux'
import DefectsList from '../Components/DefectList'
import Defects from '../Data/Products.json'

const getFilteredDefects = (state)=>{
    const {priority,category} = state;
    console.log("Priority "+priority+" category: "+category)
    if(!state.defects){
        return state.defects
    }
    else if(state.priority != "All" && state.category != "All"){
        return Defects.defects.filter( (defect,priority,category) => (defect.priority == state.priority
            && defect.category == state.category))
    }
    else if(state.category != "All"){
        return Defects.defects.filter((defect,priority,category) => (defect.category == state.category))
    }
    else if(state.priority != "All"){
        return Defects.defects.filter((defect,priority,category) => (defect.priority == state.priority))
    }
    else {
        state = {...state,defects:Defects.defects}
        console.log(Defects.defects)
            console.log('All Defects'+state.defects)
            
        return state.defects
    }
}

const mapStateToProps = (state={...state} ) => {
    console.log(state)
    return {
       ...state,
        isLoaded : true,
        defects: getFilteredDefects(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
       /* onPriorityChange : priority => {
            dispatch(priorityActionCreator(priority))
        },
        onCategoryChange : category => {
            dispatch(categoryActionCreator(category))
        }*/
    }
}

const VisibleDefectsList = connect(
    mapStateToProps,
    mapDispatchToProps
)(DefectsList)

export default VisibleDefectsList