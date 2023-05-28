function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  //console.log(e);
  //console.log(e.target.checked);
  if(e.target.checked == true){
    //console.log("true!");
    document.getElementById("text").style.backgroundColor = "red";
  }else{
    document.getElementById("text").style.backgroundColor = "transparent";
  }

}
