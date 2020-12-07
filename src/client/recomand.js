import React, {Component} from 'react';
import {음식} from './foodData';

class Recomand extends Component{

     
    render(){   

        var lists=[];
        var lists2=[];
        var lists3=[];


        var data = this.props.data;
        var food= this.props.food;
        var z=0;
        var p=0;
        if(data==null){
            return lists.push(<h1>empty</h1>);
        }
         else{
            while(z<data.length){
            lists.push(data[z].value);
            console.log("태그"+lists[z]);
            z++;
            }
        }
        if(food==null){
            return lists2.push(<h1>empty</h1>);
        }
         else{
            while(p<food.length){
            lists2.push(food[p]);
            console.log("재료"+lists2[p]);
            p++;
            }
        }
        
        var 추천음식=[];

        for(var j=0; j<음식.length; j++){
            var cnt=0;
       for(var i=0; i<음식[j].value.length; i++){
       
           for(var k=0; k<lists2.length; k++){
               if(음식[j].value[i].ingredient==lists2[k]){
               cnt=cnt+1;

               }
            }	
        }
           
           if(cnt>=음식[j].value.length*0.7){
           
             추천음식.push(음식[j]);
            }
       }

        var 최종추천음식=[];

       for(var m=0; m<추천음식.length;m++){
           var cnt2=0;

           for(var l=0; l<추천음식[m].value.length; l++){

                for(var a=0; a<data.length;a++){

                    if(추천음식[m].value[l].tag==lists[a]){
                        cnt2=cnt2+1;                        
                    }
                }
            }

            if(cnt2==lists.length){
        
        최종추천음식.push(추천음식[m].label);
            }

        for(var c=0; c<최종추천음식.length; c++){
        lists3.push(<li>{최종추천음식[c]}</li>)
        }
       }           
    return(
            <div>     
                {lists3}           
            </div>

        );


    }

}
export default Recomand;