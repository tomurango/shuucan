function tag_danjon(element){
    if(element.classList.contains("disactive")){
        if(element.id == "danjon_look"){
            element.classList.toggle("active");
            element.classList.toggle("disactive");
            document.getElementById("danjon_follow").classList.toggle("active");
            document.getElementById("danjon_follow").classList.toggle("disactive");
        }else if(element.id == "danjon_follow"){
            element.classList.toggle("active");
            element.classList.toggle("disactive");
            document.getElementById("danjon_look").classList.toggle("active");
            document.getElementById("danjon_look").classList.toggle("disactive");
        }
    }else{
        //activeのボタンを押したので何もしないで関数を終了させる
        return ;
    }
}