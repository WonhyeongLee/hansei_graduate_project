import React, {Component} from 'react';
import {음식,재료} from './foodData';

class Recomand extends Component{

    render(){   

        var lists=[];
        var data = this.props.data;
        var z=0;
        if(data==null){
            return lists.push(<h1>empty</h1>);
        }
         else{
            while(z<data.length){
            lists.push(data[z].value);
            z++;
            }
        }
        
        var 추천음식=[];

        for(var j=0; j<음식.length; j++){
            var cnt=0;
       for(var i=0; i<음식[j].value.length; i++){
       
           for(var k=0; k<재료.length; k++){
               if(음식[j].value[i].ingredient==재료[k].ingredient){
               cnt=cnt+1;
               }
            }	
        }
           
           if(cnt>=음식[j].value.length*0.8){
           
             추천음식.push(음식[j]);
            }
       }

        var 최종추천음식=[];

       for(var m=0; m<추천음식.length;m++){
           var cnt2=0;

           for(var l=0; l<추천음식[m].value.length; l++){

                for(var a=0; a<data.length;a++){

                    if(추천음식[m].value[l].tag==lists[a]){
                        cnt+1                        
                    }
                }
            }
            if(cnt2==lists.length){
            최종추천음식.push(<li>{추천음식[m].label}</li>);
            }

       }

           
        return(
            <div>
                
                <br></br>
                {최종추천음식}
                
                </div>

        );


    }

}
export default Recomand;