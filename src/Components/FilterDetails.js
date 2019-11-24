import React from 'react'
import PropTypes from 'prop-types'

class FilterDetails extends React.Component{
    constructor(props){
        super(props);
        console.log('Props')
        console.log(props)
    }
    componentWillMount(){
        this.props.fetchPriorities();
    }
    render(){
        const priorityOptions = this.props.priorities;
             const optionsHtml = priorityOptions.map( (item,i ) => {return (<option key={i} value={item}>{item}</option>)});
    
        return (<div style={{border: '2px ridge ',borderRadius: '5px'}}>
            <h2 align="center"> Filter details</h2>
            <div align="center" ><b >Priority</b> 
             

                <select onChange={(e)=>{ this.props.onPriorityChange(e.target.value)} }
                    value={this.props.priority} >
                    <option>All</option>
                    {optionsHtml}
                </select>
            </div> <br></br>
            <div align="center"><b >Category</b> 
                <select onChange={(e)=> {this.props.onCategoryChange(e.target.value)}} 
                    value={this.props.category}>
                    <option>All</option>
                    <option>UI</option>
                    <option>Functional</option>
                    <option>Change Request</option>
                </select>
            </div>
            </div>)
    }
}

FilterDetails.propTypes = {
    priority: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    onPriorityChange: PropTypes.func.isRequired,
    onCategoryChange: PropTypes.func.isRequired
}
export default FilterDetails
