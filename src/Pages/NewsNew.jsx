
import React, { Component } from 'react';
import FileInputList from '../FileInputList'
import Resizer from 'react-image-file-resizer'
import axios from 'axios'

class NewsNew extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoading:false,
            isEvent:false,
            files: [],
            isInvalid: false
         }
    }
    render() { 
        return ( 
            <div>
                <h2>Post Article</h2>
                <form className='newArticle' 
                onSubmit={this.handleArticleSubmit}>
                    <label>
                        Title:
                        <input type="text" name="title" onChange={this.handleChange} />
                    </label>
                    <label>
                        Body:
                        <textarea name="body" onChange={this.handleChange} />
                    </label>
                    <label>
                        <input type="radio" id='news' name="topic" value='news' onChange={this.handleChange} />
                        <label htmlFor='news'>News</label>
                        <input type="radio" id='event' name="topic" value='event' onChange={this.checkEvent} />
                        <label htmlFor='event'>Event</label>
                    </label>
                    {this.state.isEvent&&
                    <label>
                    <input type='date' name='eventDate'></input>
                </label>}
                    <button type='submit'>Create Article</button>
                </form>
                <br></br>
                <h2>Upload Photos</h2>
                {this.state.isInvalid && <h3>Please Enter a Name and Location for Each Picture</h3>}
                <form 
                className='newPhoto'
                onSubmit={(event)=>this.onFileSumbit(event)}>
                    <label className='fileUpload'>
                        <p>Click 'Choose Files' to Upload Photos:</p>
                        <input 
                        type='file' 
                        accept='.jpeg, .png, .jpg'
                        multiple 
                        id='fileUpload' 
                        name='fileName' 
                        onChange={(event)=>this.onFileChange(event)}
                        />
                    </label>
                    <FileInputList 
                    valid={this.state.valid}
                    files={this.state.files}
                    updateFileInfo={this.updateFileInfo} />
                    <br></br>
                    <button onClick={(event)=>this.uploadImages(event)}>Submit Photos</button>
                </form>
            </div>
         )
    }

    onFileChange = (event) => { 
        const arr= []
        const count=event.target.files.length
        for (let i = 0; i < count; i++) {
            const file=event.target.files[i]
            Resizer.imageFileResizer(
                file,
                300,
                300,
                'JPEG',
                100,
                0,
                uri => {
                    this.afterFileConvert(file.name, uri, count, arr,i);
                },
                'base64'
            );
        }
    }

    afterFileConvert = (name, uri, count, arr,i) => {
        const obj={
            name: name,
            location:'',
            description:'',
            image: uri,
            id:i
        }
        arr.push(obj)
        if (arr.length===count){
           this.setState ({
            files:arr,
        }) 
        }
    }

    updateFileInfo = (fileID,infoType,update) => {
        let files=this.state.files
        let currentFile={}
        for (let i = 0; i < files.length; i++) {
            if (fileID===files[i].id) {
                currentFile=files[i]
                currentFile[infoType]=update
                files[i]=currentFile
            }
        }
        this.setState({
            files:files,
        })

        return
    }

    uploadImages = (event) => {
        event.preventDefault()
        let isValid=this.checkValidation()
        console.log(isValid)
        let arr=this.state.files
        
        if (isValid) {
           axios.post("https://chebsy-be.herokuapp.com/api/images",arr)
        .then(res => {
          console.log(res)
        }) 
        }
        

    }  
    

        checkValidation = (valid=true) => {
            let arr=this.state.files
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i].name==='') {
                        valid=false
                    } else if (arr[i].location==='') {
                        valid=false
                    }
                }
            if (valid===false) {
               this.setState({
                isInvalid:true
            })
            }
            
            return valid
            
        }
 

        

        
    
   

    // onFileSubmit = (event) => {
    //     event.preventDefault();
    //     const files = {
            
    //     }
    //     axios.post('https://news-northcoders.herokuapp.com/api/articles',{article}).then(res => {
    //         console.log(res)
    //     })
    // }

}

    
 
export default NewsNew;