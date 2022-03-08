function regex(){
  let data = "Belajar menimba ilmu programming bersama Niomic";

  let reg = new RegExp("bersama");

  console.log(reg.exec(data));
}

regex();
