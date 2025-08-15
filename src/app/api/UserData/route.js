import axios from "axios";

export async function newUser(Data) {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_URL}/users/user`,
      Data
    );
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
