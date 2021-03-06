import React, {Component} from "react"

export default class Room extends Component{
    constructor(props){
        super(props);
        this.state={
            votesToSkip: 2,
            guestCanPause: false, 
            isHost: false,
        };
        // match gives you information of the url, and you can get the roomCode from the paramteres of the url
        this.roomCode=this.props.match.params.roomCode
        //updating the state and causing you to re-render
        this.getRoomDetails();
    }
    getRoomDetails(){
        fetch('/api/get-room'+'?code='+this.roomCode).then((response)=>response.json()).then((data)=>{
            this.setState({
                votesToSkip:data.votes_to_skip,
                guestCanPause:data.guest_can_pause, 
                isHost: data.is_host,
            });
        });
    }
    render(){
        return(
            <div>
                <h3>{this.roomCode}</h3>
                <p>Votes : {this.state.votesToSkip.toString()}</p>
                <p>Guest Can Pause: {this.state.guestCanPause.toString()}</p>
                <p>Host Hai Kya? {this.state.isHost.toString()}</p>
            </div>
        )
    }
}