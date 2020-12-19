import React, { Component } from 'react';
import { 음식 } from './foodData';

class Recomand extends Component {


    render() {

        var lists = []; // 태그내용 저장
        var lists2 = []; //냉장고배열 저장
        var lists3 = []; //최종 추천음식을 저장


        var data = this.props.data; //태그 배열을 받아옴
        var food = this.props.food; //냉장고 재료 배열을 받아옴
        var z = 0;
        var p = 0;

        // 냉장고 재료가 비어있을경우 lists 배열에 empty를 푸쉬
        if (data == null) {
            return lists.push(<h1>empty</h1>);
        }
        else {
            //냉장고 재료를 lists 배열에 넣고 콘솔에 출력
            while (z < data.length) { 
                lists.push(data[z].value);
                console.log("태그" + lists[z]);
                z++;
            }
        }
        // 냉장고 재료가 비어있을경우 lists2 배열에 empty를 푸쉬
        if (food == null) { 
            return lists2.push(<h1>empty</h1>);
        }
        //냉장고 재료배열을 lists2 배열에 넣고 콘솔에 출력
        else {
            while (p < food.length) { 
                lists2.push(food[p]);
                console.log("재료" + lists2[p]);
                p++;
            }
        }

        //레시피 데이터베이스의 재료와 비교하여 추천가능한 음식을 추천음식 배열에 저장
        var 추천음식 = [];

        for (var j = 0; j < 음식.length; j++) {
            var cnt = 0;
            for (var i = 0; i < 음식[j].value.length; i++) {

                for (var k = 0; k < lists2.length; k++) {
                    if (음식[j].value[i].ingredient == lists2[k]) {// 재료비교
                        cnt = cnt + 1;

                    }
                }
            }

            if (cnt >= 음식[j].value.length * 0.5) {

                추천음식.push(음식[j]);
                console.log("추천음식"+음식[j]);
            }
        }
        
        // 추천음식 배열과 태그배열을 비교하여 일치하는 요소들을 저장
        var 최종추천음식 = [];

        for (var m = 0; m < 추천음식.length; m++) {
            var cnt2 = 0;

            for (var l = 0; l < 추천음식[m].value.length; l++) {

                for (var a = 0; a < data.length; a++) {

                    if (추천음식[m].value[l].tag == lists[a]) {
                        cnt2 = cnt2 + 1;
                    }
                }
            }

            if (cnt2 == lists.length) {

                최종추천음식.push(추천음식[m]);
            }

          
        }
          // lists3에 최종추천음식들을 저장
          for (var c = 0; c < 최종추천음식.length; c++) {
            lists3.push(<li><a href={최종추천음식[c].link}>{최종추천음식[c].label}</a></li>)
        }
        return (
            <div>
                {lists3}
            </div>

        );


    }

}
export default Recomand;