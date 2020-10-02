import React, { Component } from 'react';


class FileInputList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const files=this.props.files
        return ( 
            <div>
               {files.map((element,i) => {
                    return (
                    <div className={this.checkEven(i+1)} key={i}>
                        <label className='fileInput'>
                            Name (Required) 
                            <input 
                            type='text'
                            name='text'
                            id={element.id}
                            defaultValue={element.name}
                            onChange={this.handleChange}
                            />
                        </label> 
                        <label className='fileInput'>
                            Location (Required) 
                            <input 
                            type='text'
                            name='location'
                            id={element.id}
                            onChange={this.handleChange}
                            />
                        </label>
                        <label className='fileInput'>
                            Description (Optional) 
                            <textarea 
                            name='description'
                            id={element.id}
                            onChange={this.handleChange}
                            />
                        </label>
                    </div>              
    )})} 
            </div>
         );
    }

    checkEven = (i) => {
        if (i%2!==0) {
            return 'fileInputForm even'
        } else return 'fileInputForm'
    }

    handleChange = (event) => {
        const fileID=parseInt(event.target.id);
        const infoType=event.target.name;
        const update=event.target.value
        this.props.updateFileInfo(fileID,infoType,update)
    }
}
 
export default FileInputList;