import axios from "axios";

export class apiChat {
  async sendMessage(message: String, to: String) {
    const data = await axios.post(`http://192.168.100.72:5000/sendMessage`, {
      to: to,
      message: message
    })
    .catch((err)=>{
      console.log(err);
    })
    return data;
  }

  async getMessages(user: String) {
    const data = await axios.post(`http://192.168.100.72:5000/getMessages`, {
      user: user
    })
    .then((res)=>{
      return res.data
    })
    .catch((err)=>{
      console.log(err);
      return err
    })
    
    return data
  }

  async getChats() {
    const data = await axios.get(`http://192.168.100.72:5000/getChats`)
    .then((res)=>{
      return res.data
    })
    .catch((err)=>{
      console.log(err);
      return err
    })
    
    return data
  }
}