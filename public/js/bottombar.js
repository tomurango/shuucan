//tab ページ切り替え
tabBar.listen('MDCTabBar:activated',function(event){
    var index = event["detail"]["index"];
    page_nav(index);
});

function page_nav(index){
    //pcの場合にdialogを表示している時非表示にするための記述
    document.getElementById("dungeon_detail_div").style.display = "none";
    //一回全部を非表示にする
    var top_level_pages = document.getElementsByClassName('second_page');
    for (var i=0, len=top_level_pages.length|0; i<len; i=i+1|0) {
        top_level_pages[i].style.display = "none";
    }
    //sidenavボタンをすべてdisactive
    document.getElementById("side_world").classList.remove("active");
    document.getElementById("side_danjon").classList.remove("active");
    document.getElementById("side_premia").classList.remove("active");
    document.getElementById("side_set").classList.remove("active");
    //indexによって処理を分岐して記述する
    if(index==0){
        //ワールドページ表示
        document.getElementById("world_page").style.display = "flex";
        //sideのactive
        document.getElementById("side_world").classList.add("active");
        //headerの名前表示切替
        document.getElementById("name_on_header").textContent="ワールド";
    }else if(index==1){
        //ダンジョンページ表示
        document.getElementById("danjon_page").style.display = "flex";
        //sideのactive
        document.getElementById("side_danjon").classList.add("active");
        //headerの名前表示切替
        document.getElementById("name_on_header").textContent="ダンジョン";
    }else if(index==2){
        //プレミアページ表示
        document.getElementById("premia_page").style.display = "flex";
        //sideのactive
        document.getElementById("side_premia").classList.add("active");
        //headerの名前表示切替
        document.getElementById("name_on_header").textContent="プレミア";
    }else if(index==3){
        //セッテイページ表示
        document.getElementById("set_page").style.display = "flex";
        //sideのactive
        document.getElementById("side_set").classList.add("active");
        //headerの名前表示切替
        document.getElementById("name_on_header").textContent="設定";
    }
}