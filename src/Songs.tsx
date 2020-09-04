import React, {Component} from 'react';
import Song from './Song';

interface State {
    data:Array<any>
  }

class Songs extends React.Component<{}, State>{
    defTitle: string;
    defArtist: string;
    defAlbum: string;
    defDate: string;
    defArray: Array<any>;
    arrKey: number;

    constructor({}){
        super({});
        this.state = {
            data:[]
        };
      this.defTitle = "";
      this.defArtist = "";
      this.defAlbum = "";
      this.defDate = "";
      this.defArray = [{}];
        this.arrKey=0;

      this.save = this.save.bind(this);
    }
    
      render(){
        return(
            <div>
            <div>
                <h3>Create Song</h3>
                <p>Title: &nbsp;</p>
                <input onChange={(titl:any) => this.updateTitl(titl)}></input>
                <br></br>
                <p>Artist: &nbsp;</p>
                <input onChange={(arti:any) => this.updateArtis(arti)}></input>
                <br></br>
                <p>Album: &nbsp;</p>
                <input onChange={(albu:any) => this.updateAlbu(albu)}></input>
                <br></br>
                <p>Date: &nbsp;</p>
                <input onChange={(date:any) => this.updateDat(date)}></input>
                <br></br>
                <button onClick={this.save}>Save</button>
            </div>
            {this.state.data.map((d:any) => <Song  id={d.id} title={d.title} artist={d.artist} album={d.album} date={d.date} editable={false} deleted={false}/>)}
            </div>
        );
      }


    updateTitl(tit:any){
        this.defTitle= tit.target.value;
    }

    updateArtis(art:any){
      this.defArtist= art.target.value;
    }

    updateAlbu(alb:any){
      this.defAlbum= alb.target.value;
    }

    updateDat(dat:any){
      this.defDate= dat.target.value;
    }

    save(){
        this.defArray = [{key:this.newKey(),id:this.arrKey,title:this.defTitle,artist:this.defArtist,album:this.defAlbum,date:this.defDate}];
      this.setState({
          data: this.state.data.concat(this.defArray)
      });
    }

    newKey(){
        this.arrKey=this.arrKey+1;
        return this.arrKey;
    }
  
}

export default Songs;