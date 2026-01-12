function submitBooking(){
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const msg = document.getElementById("msg");

  if(!name || !phone || !date || !time){
    msg.innerText = "Please fill in all fields / 请填写完整信息";
    return;
  }

  const key = date + "_" + time;
  if(localStorage.getItem(key)){
    msg.innerText = "This time is already booked / 该时间已被预约";
    return;
  }

  localStorage.setItem(key, JSON.stringify({
    name, phone, service, date, time
  }));

  msg.innerText = "Booking successful! / 预约成功！我们将联系您";
}
