import React, { Component } from 'react';

class Canvas extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            width: 200,
            height: 200
         }
         this.canvasRef = React.createRef()
         this.image = new Image()
         this.image.src='https://scontent.fman2-1.fna.fbcdn.net/v/t1.0-9/31206473_2061632187427358_6825920373104574464_o.png?_nc_cat=105&_nc_sid=e3f864&_nc_ohc=yDncBKccFRYAX9XW8wv&_nc_oc=AQmV_5g6qoaSzVjJLG1ouCwPiTdWCiXXhQTxcpU4UBfn38IJXN1L-COVrnWCzO30PsM&_nc_ht=scontent.fman2-1.fna&oh=73b610d1948fc51f83c3eb7904ab2854&oe=5F8A469A'
    }
    

    render() { 
        return ( 
            <>
                <canvas id='canvas'
                ref={this.canvasRef}
                width={this.state.width}
                height={this.state.height} />
                <img 
            </>
         );
    }

    componentDidMount() {
        const ctx = this.canvasRef.current.getContext('2d')
        this.image.onLoad = () => {
            ctx.drawImage(this.image,0,0, 400, 400)
        }
        
    }
}
 
export default Canvas;