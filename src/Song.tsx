import React, {Component} from 'react';
import ReactDOMServer from 'react-dom/server';

var RDS = require('react-dom/server');

interface Props {
  id:number,
  title:string,
  artist:string,
  album:string,
  date:string,
  editable:boolean,
  deleted:boolean,
}

interface State {
  id:number,
  title:string,
  artist:string,
  album:string,
  date:string,
  editable:boolean,
  deleted:boolean,
}

class Song extends React.Component<Props,State>{
    defTitle: string;
    defArtist: string;
    defAlbum: string;
    defDate: string;

    constructor(props:Props){
      super(props);

      this.state={
        id:this.props.id,
        title:this.props.title,
        artist:this.props.artist,
        album:this.props.album,
        date:this.props.date,
        editable:this.props.editable,
        deleted:this.props.deleted,
      };

      this.de = this.de.bind(this);
      this.ed = this.ed.bind(this);
      this.sa = this.sa.bind(this);
      this.ca = this.ca.bind(this);

      this.defTitle = this.props.title;
      this.defArtist = this.props.artist;
      this.defAlbum = this.props.album;
      this.defDate = this.props.date;
    }
  
    render(){
      if(this.state.deleted){
        return null
      }else{
        return this.state.editable ?
          this.renderInput() :
          this.renderView()
      }
    }

    renderInput(){
      return(
        <div id={RDS.renderToString(this.state.id)} className={"song"}>
          <h3>{RDS.renderToString(this.state.id)}</h3>
          <p>Title: &nbsp;</p>
          <input defaultValue={this.state.title} onChange={(tit:any) => this.updateTitle(tit)}></input>
          <br></br>
          <p>Artist: &nbsp;</p>
          <input defaultValue={this.state.artist} onChange={(art:any) => this.updateArtist(art)}></input>
          <br></br>
          <p>Album: &nbsp;</p>
          <input defaultValue={this.state.album} onChange={(alb:any) => this.updateAlbum(alb)}></input>
          <br></br>
          <p>Date: &nbsp;</p>
          <input defaultValue={this.state.date} onChange={(dat:any) => this.updateDate(dat)}></input>
          <br></br>
          <button onClick={this.ca}>Cancel</button>
          <button onClick={this.sa}>Save</button>
          <button onClick={this.de}>Delete</button>
        </div>
      );
    }

    renderView(){
      return(
        <div id={RDS.renderToString(this.state.id)} className={"song"}>
          <h3>{RDS.renderToString(this.state.id)}</h3>
          <p>Title: &nbsp;</p>
          <p>{this.state.title}</p>
          <br></br>
          <p>Artist: &nbsp;</p>
          <p>{this.state.artist}</p>
          <br></br>
          <p>Album: &nbsp;</p>
          <p>{this.state.album}</p>
          <br></br>
          <p>Date: &nbsp;</p>
          <p>{this.state.date}</p>
          <br></br>
          <button onClick={this.ed}>Edit</button>
          <button onClick={this.de}>Delete</button>
        </div>
      );
    }

    updateTitle(tit:any){
        this.defTitle= tit.target.value;
    }

    updateArtist(art:any){
      this.defArtist= art.target.value;
    }

    updateAlbum(alb:any){
      this.defAlbum= alb.target.value;
    }

    updateDate(dat:any){
      this.defDate= dat.target.value;
    }

    de(){
      this.setState({
        deleted: true,
      });
    }

    ed(){
      this.setState({
        editable: true,
      });
    }

    sa(){
      this.setState({
        title: this.defTitle,
        artist: this.defArtist,
        album: this.defAlbum,
        date: this.defDate,
        editable: false,
      });
    }

    ca(){
      this.setState({
        editable: false,
      });
    }
  }

export default Song;


