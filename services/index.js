import axios from "axios";

export const fetchitem = async (id) => {

  const   body= {
        Id: id
    }
    try {
    

        const response = await axios.post(`https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getclientdatabyid`, body)

        return response.data
  


    } catch (err) {
        console.log('Facing error at getting client data => ' + err);
    }
}