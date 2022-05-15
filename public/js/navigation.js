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
            dungeon_look();
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
                //ダンジョンごとに挿入していく
                //console.log(dungeon, dungeon.data(), dungeon.id);
                insert_dungeon(dungeon.data(), dungeon.id);
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
    
    var dnj_id = dungeon_ele.id.split('_')[0];
    console.log(dnj_id); 

    //恐らくglobal変数からダンジョンの情報を持ってきて、挿入とかする感じでいいとおもう
}
function dungeon_detail_back(){
    //divを非表示
    document.getElementById("dungeon_detail_div").style.display = "none";
}

function dungeon_follow(ele){
    //すべてのfoldan_btnをdisactiveにする
    $('.foldan_btn').removeClass('active');
    var ele_id = ele.id;
    console.log(ele_id);
    var query_id = '#' + ele_id;
    //選択したfoldan_btnをactiveにする
    $(query_id).addClass('active');
    if(ele_id == "fol_dan_all"){
        console.log("display all followed !");
    }else{
        console.log("display choised");
    }
    //まずはデータベースの確認（global変数を含めて）をした後に入れ込んでく形で行こうか
    //その前にアプリ読み込み時にfollow dungeon allの情報を取得してから挿入するまでの流れを作る
    //その前にダンジョンに取り組んだ人の挑戦を記録できるようにする
    //その前に今あるダンジョンを取得してきてちゃんと表示できるようにする
    //ダンジョンの作成はとりあえず私側で手動にて行うので、実装ん面は取得からの挿入で問題ないと考える

    //#fol_dan_thread のなかにしていされた dungeon の情報を入れ込んでいく
    //document.getElementById()

}

//だんじょんを挿入する関数
function insert_dungeon(dnj_data, dnj_id){
    //console.log(dnj_data, dnj_id);
    //つづっととかの挿入関数もってくる
    /*
    <div id="" class="mdc-card danjon_card" onclick="dungeon_detail(this)">
                <div id="" class="mdc-card__media mdc-card__media--16-9 dnj_media_thum">
                </div>
                <div class="mdc-card__content team_info_container">
                  <p class="danjon_name">ダンジョン名</p>
                  <p class="danjon_first">１ 目標を小さくする</p>
                </div>
              </div>
              */

    

    var dnj_card = '<div id="' + dnj_id + '_dnjcard" class="mdc-card danjon_card" onclick="dungeon_detail(this)"><div id="" class="mdc-card__media mdc-card__media--16-9 dnj_media_thum"></div><div class="mdc-card__content team_info_container"><p class="danjon_name"></p><p class="danjon_first"></p></div></div>';

    
    var cards_container = document.getElementById("dnj-card-container");
    var dnj_card_promise = new Promise(function(resolve, reject){
        cards_container.insertAdjacentHTML("afterbegin", dnj_card);
        resolve();
    });
    var queryid = "#" + dnj_id + "_dnjcard"; 
    dnj_card_promise.then(function(){
        //つづきはここから
        //ここでtextContentいれる
        $(queryid).find(".danjon_name").text(dnj_data.name);
        $(queryid).find(".danjon_first").text(dnj_data.explain);
        $(queryid).find(".dnj_media_thum").css({
            backgroundImage: 'url("'+ dnj_data.imageURL +'")' // "" で括っていないとIEでは表示されない
        });
        /*
        //過去にボタンを押したかどうかで処理を追加で書いていこう
        if(data.goodList.includes(global_user.uid)){
            //goodListにある
            $(queryid).find(".good").addClass("active");
        }else if(data.badList.includes(global_user.uid)){
            //badList
            $(queryid).find(".bad").addClass("active");
        }
        */
    });
}


