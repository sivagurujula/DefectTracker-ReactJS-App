import React from 'react'

class Defect extends React.Component{
    constructor(props){
        super(props)
    }
    render (){
        return (
            <tr >
                <td>{this.props.defect.category}</td>
                <td>{this.props.defect.description}</td>
                <td>{this.props.defect.priority}</td>
                <td>{this.props.defect.status}</td>
                <td>{this.props.defect.changestatus == "Close Defect"?
                    <a href="">{this.props.defect.changestatus}</a>:this.props.defect.changestatus}
                </td>
            </tr>
        )
    }
}
export default Defect;