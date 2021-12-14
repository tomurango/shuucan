//tab ページ切り替え
tabBar.listen('MDCTabBar:activated',function(event){
    var index = event["detail"]["index"];
    //console.log("index => ", index);
    //一回全部を非表示にする
    var top_level_pages = document.getElementsByClassName('second_page');
    for (var i=0, len=top_level_pages.length|0; i<len; i=i+1|0) {
        top_level_pages[i].style.display = "none";
    }
    //indexによって処理を分岐して記述する
    if(index==0){
        //ワールドページ表示
        document.getElementById("world_page").style.display = "flex";
    }else if(index==1){
        //ダンジョンページ表示
        document.getElementById("danjon_page").style.display = "flex";
    }else if(index==2){
        //セッテイページ表示
        document.getElementById("set_page").style.display = "flex";
    }
});
