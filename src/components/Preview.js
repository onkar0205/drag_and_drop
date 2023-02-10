import React, { Component } from 'react';
import $ from "jquery";

class Preview extends Component{
    render(){
        return(
            <div className="modal fade" id={this.props.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body mobile">
                            {
                                this.props.fields.map((field, index) => {
                                    return this.renderField(field, index)
                                })
                            }
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentWillReceiveProps(){
    }
    renderField(field, index){
        if(field === undefined || index === -1){
            return;
        }
        if(this.props.previews) {
            let Preview = this.props.previews.filter((tool) => {
                if (tool.states.toolType === field.toolType) {
                    return tool;
                }else{
                    return false;
                }
            })[0];
            if (Preview) {
                let PreviewClonedComponent = React.cloneElement(Preview.preview, field);
                return <div key={index}> { PreviewClonedComponent } </div>
            }
        }

        if(field.toolType === 'SINGLE_FIELD') {
            if(field.type === 'Textarea') {
                return (
                    <div key={index} className="form-group">
                        <label className="label" htmlFor={field.title}>{field.title}</label>
                        <textarea value={field.defaultValue} placeholder={field.placeholder} className="form-control"
                                  type={field.type} readOnly={field.validation.isReadOnly}
                                  required={field.validation.isRequired} />
                    </div>
                );
            
            }
        }
    }
}

export default Preview;