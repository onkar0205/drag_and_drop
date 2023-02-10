import React, { Component } from 'react';
var InputTypes = [ 'Checkbox','Email', 'File',
    'Month', 'Number', 'Password', 'Range', 'Search', 'Tel', 'Text', 'Time', 'Url', 'Week', 'Textarea'];
class SingleField extends Component{
    constructor(props){
        super(props);
        this.state = {  
            name : '',
            // toolType : 'SINGLE_FIELD',
            // defaultValue : '',
            // placeholder : '',
            // description : '',
            
        }
        this.changeValue = this.changeValue.bind(this);
    }

    componentWillMount(){
        this.setState(this.props.field);
    }

    changeValue(stateFor, value){
        switch (stateFor){
            case "NAME" :
                this.setState( { name : value } )
                break;
            case "TITLE" :
                this.setState( { title : value } )
                break;
            default:
                return;
        };
        setTimeout(() => {
            return this.props.changeState(this.state, this.props.index);
        }, 0)
    }

    render(){
        return(
            <div className="card card-outline-primary">
                <div className="card-header">
                    <i className="fa fa-wpforms mr-1"></i> Single Field { this.state.title }
                    <span className='pull-right cross' onClick={() => this.props.removeField(this.props.index)}>x</span>
                </div>
                <div className="card-body">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a onClick={(e) => { e.preventDefault(); this.setState({ tab : 'general' }) }} className={this.state.tab === 'general' ? 'nav-link active' : 'nav-link'} href="/general">General</a>
                        </li>
                        <li className="nav-item" style={{
                            textAlign: 'right',
                            position: 'absolute',
                            right: '15px',
                        }}>
                            <a onClick={(e) => { e.preventDefault(); this.setState({ tab : '' })}} className={this.state.tab === '' ? 'nav-link active font-weight-bold' : 'nav-link'} href="/hide">-</a>
                        </li>
                    </ul>
                    <div hidden={this.state.tab !== 'general'} className="general">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        
                                        <label htmlFor="name">Question</label>
                                        <input type="text"
                                            value={this.state.name}
                                            onChange={(e) => this.changeValue("NAME", e.target.value)}
                                            placeholder='Name' className='form-control' />
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="title">Ans</label>
                                        <input type="text"
                                               value={this.state.placeholder}
                                               onChange={(e) => this.changeValue("PLACEHOLDER", e.target.value)}
                                               placeholder='Ans' className='form-control' />
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className="card-footer">

                </div>
            </div>
        )
    }
}

export default SingleField;