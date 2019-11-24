import React from 'react'
import './../../app.css'
import Defect from './Defect.js'

class DefectList extends React.Component{
    constructor(props){
        super(props);
       /* this.state = {
            isLoaded : false,
            error : null,
            defects : [] 
        }*/
    }
    componentDidMount(){
       /* this.setState(
            {
                isLoaded : true,
                defects : Defects.defects,
                error : null
            });*/
            
       /* fetch('../Data/Products.json').
            then(res => res.json()).
            then(
                (result) =>{
                    this.setState(
                        {
                            isLoaded : true,
                            defects : result.defects,
                            error : null
                        }
                    );
                },
                (error) =>{
                    this.setState(
                        {
                            isLoaded : true,
                            error
                        }
                    );
                }
            )*/
    }
    render(){
        const {error,isLoaded,defects } = this.props;
        if(!isLoaded || !defects){
            return <span>Loading...</span>
        }
        if(error){
            return <span>Error : {error.message}</span>
        }

        console.log(defects)
        let defectRows = defects.map( defect => {
                                            return (<Defect key={Math.random()} defect={defect} />)
                                            } );

        return <React.Fragment>
                <div align="center">
                <h2 >Defect Details</h2>
                <span className="redBackground">Search Results: {defects.length}</span> <br></br>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Defect Category</th>
                            <th>Description</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Change Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {defectRows}
                    </tbody>
                </table>  
                </React.Fragment>   
    }
}


export default DefectList
