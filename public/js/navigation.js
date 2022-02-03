function tag_danjon(element){
    if(element.classList.contains("disactive")){
        if(element.id == "danjon_look"){
            element.classList.toggle("active");
            element.classList.toggle("disactive");
            document.getElementById("danjon_follow").classList.toggle("active");
            document.getElementById("danjon_follow").classList.toggle("disactive");
            document.getElementById("danjon_look_page").style.display = "block";
            document.getElementById("danjon_follow_page").style.display = "none";
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