function tag_danjon(element){
    if(element.classList.contains("disactive")){
        if(element.id == "danjon_look"){
            element.classList.toggle("active");
            element.classList.toggle("disactive");
            document.getElementById("danjon_follow").classList.toggle("active");
            document.getElementById("danjon_follow").classList.toggle("disactive");
            document.getElementById("danjon_look_page").style.display = "flex";
            document.getElementById("danjon_follow_page").style.display = "none";
            //dungeonの情報を取ってくる見た目を整えて挿入準備が完了したらコメントアウトを解除して運用開始
            /*dungeon_look();*/
        }else if(element.id == "danjon_follow"){
            element.classList.toggle("active");
            element.classList.toggle("disactive");
            document.getElementById("danjon_look").classList.toggle("active");
            document.getElementById("danjon_look").classList.toggle("disactive");
            document.getElementById("danjon_follow_page").style.display = "block";
            document.getElementById("danjon_look_page").style.display = "none";
        }
    }else{
        //activeのボタンを押したので何もしないで関数を終了させる
        return ;
    }
}

function tag_world(element){
    if(element.classList.contains("disactive")){
        if(element.id == "world_look"){
            element.classList.toggle("active");
            element.classList.toggle("disactive");
            document.getElementById("world_follow").classList.toggle("active");
            document.getElementById("world_follow").classList.toggle("disactive");
            document.getElementById("world_look_page").style.display = "block";
            document.getElementById("world_follow_page").style.display = "none";
        }else if(element.id == "world_follow"){
            element.classList.toggle("active");
            element.classList.toggle("disactive");
            document.getElementById("world_look").classList.toggle("active");
            document.getElementById("world_look").classList.toggle("disactive");
            document.getElementById("world_follow_page").style.display = "block";
            document.getElementById("world_look_page").style.display = "none";
        }
    }else{
        //activeのボタンを押したので何もしないで関数を終了させる
        return ;
    }
}

/* 同じダンジョンを繰り返し取得しないように書き換える */
//とりあえず一度だけ取得する考えで記述
var get_flag = true;
//ダンジョンの探索を押したときにdungeonのデータを取ってきてそうにゅうする流れを執り行う関数
function dungeon_look(){
    if(get_flag){
        firebase.firestore().collection("dungeons").limit(10).get().then(function(dungeons){
            get_flag = false;
            //loop
            console.log("dungeons 数", dungeons.size);
            dungeons.forEach(function(dungeon){
                //完了タスクとそうじゃないタスクに振り分ける
                console.log(dungeon.data(), dungeon.id);
            });
        }).catch(function(error){
            console.log("error", error);
        });
    }else{
        //console.log()
        return 
    }
    //console.log("dungeon のデータを取ってくる");
    //console.log("dungeon のデータを挿入する");
}

function dungeon_detail(dungeon_ele){
    //divを表示
    document.getElementById("dungeon_detail_div").style.display = "block";
    console.log(dungeon_ele.id);
}
function dungeon_detail_back(){
    //divを非表示
    document.getElementById("dungeon_detail_div").style.display = "none";
}

function dungeon_follow(ele){
    //すべてのfoldan_btnをdisactiveにする

    var ele_id = ele.id;
    console.log(ele_id);
    //選択したfoldan_btnをactiveにする

    if(ele_id == "fol_dan_all"){
        console.log("display all followed !");
    }else{
        console.log("display choised");
    }
}