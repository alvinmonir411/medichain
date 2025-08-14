import axios from "axios";

export async function userData(Data) {
  try {
    const res = await axios.post(`${process.env.URL}newuser`, Data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
// add a new thing