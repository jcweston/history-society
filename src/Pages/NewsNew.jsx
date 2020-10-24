
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
            article: {
                username: 'admin',
                title:'',
                body:'',
                event:false,
                eventDate:new Date()
            },
            picturesInvalid: false,
            articleInvalid:false,
            userArr:[]
         }
    }
    render() { 
        return ( 
            <div>
                <h2>Post Article</h2>
                {this.state.articleInvalid && <h3>Please Fill all Required Fields</h3>}
                <form className='newArticle' 
                onSubmit={this.articleSubmit}>
                    <label>
                        <h4>Title (Required):</h4>
                        <input type="text" name="title" onChange={this.onArticleChange} />
                    </label>
                    <label>
                        <h4>Body (Required):</h4>
                        <textarea className='inputTextarea' type='text' name="body" onChange={this.onArticleChange} />
                    </label>
                    <label>
                        <h4>Article Type (Required):</h4>
                        <input type="radio" id='news' name="topic" value='news' onChange={this.eventCheck} />
                        <label htmlFor='news'>News</label>
                        <input type="radio" id='event' name="topic" value='event' onChange={this.eventCheck} />
                        <label htmlFor='event'>Event</label>
                    </label>
                    {this.state.isEvent&&
                    <label>
                        Event Date:
                    <input type='date' name='eventDate'  onChange={this.onArticleChange} />
                    </label>}
                    <button type='submit'>Create Article</button>
                </form>
                <br></br>
                <h2>Upload Photos</h2>
                {this.state.picturesInvalid && <h3>Please Enter a Name and Location for Each Picture</h3>}
                <form 
                className='newPhoto'>
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
                <h2>Make New Account</h2>
                <form>
                    <label>
                        Account Name
                        <input type='text' />
                    </label>
                    <button onClick={(event)=>this.createAccount(event)}>Create Account</button>
                </form>
                
                <h3>List of Accounts</h3>
                {this.state.userArr.map((element,i) => {
                    const username=element.username
                    return (
                        <p key={i}>{username}</p>
                    )
                })}
            </div>
         )
    }

    componentDidMount = () => {
        this.getAccounts()
    }

    getAccounts = () => [
        axios.get('https://chebsy-be.herokuapp.com/api/users')
        .then(response=>{
            this.setState({
                userArr:response.data.users
            })
            console.log(response.data.users)
        })
    ]

    createAccount = (event) => {
        event.preventDefault();
        let admin = {
            username:'admin',
            name:'admin'
        }
        axios.post("https://chebsy-be.herokuapp.com/api/users",admin)
        .then(response =>{
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })

    }

    onArticleChange = (event) => {
        let name=event.target.name
        let type=event.target.type
        let value=event.target.value
        let article=this.state.article
        if (name==='title'||'body') {
            article[name]=value
        } else if (type==='radio') {
            
        } else if (type==='date') {
            article.eventDate=value
        }
        this.setState({
            article:article,
        })
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

    eventCheck = (event) => {
        let article=this.state.article
        let isEvent=false
        if (event.target.value==='event') {
            article.event=true
            isEvent=true
        } else {
            article.event=false
            isEvent=false
        }
        this.setState({
            article:article,
            isEvent:isEvent
        })
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

    
    

    fileValidation = (valid=true) => {
            let arr=this.state.files
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i].name===''||arr[i].location==='') {
                        valid=false
                    }
                }
            if (valid===false) {
               this.setState({
                picturesInvalid:true
            })
            }
            
            return valid
        }

    articleValidation = () => {
        let valid=true
        let article = this.state.article
        if(article.title===''||article.body==='') {
            valid=false
        }
        if(article.event===true&&article.date==='') {
            valid=false
        }
        if (valid===false) {
            this.setState({
                articleInvalid:true
            })
        }
        return valid
    }

    articleSubmit = (event) => {
        event.preventDefault()
        const isValid=this.articleValidation()
        let article=this.state.article
        if (!article.event) {
            delete article.eventDate
        }
        console.log(article)
        if (isValid) {
            axios.post("https://chebsy-be.herokuapp.com/api/articles",article)
        .then(response =>{
            this.resetArticle()
        })
        .catch(error => {
            console.log(error)
        })
        }
    }

    uploadImages = (event) => {
        event.preventDefault()
        const isValid=this.fileValidation()
        console.log(isValid)
        let arr=this.state.files
        for (let i = 0; i < arr.length; i++) {
            delete arr[i].id
        }
        console.log(arr);
        if (isValid) {
           axios.post("https://chebsy-be.herokuapp.com/api/images",arr)
        .then(res => {
          console.log(res)
        })
        .catch(error => {
            console.log(error)
        })
        }
    }  
    

}

    
 
export default NewsNew;