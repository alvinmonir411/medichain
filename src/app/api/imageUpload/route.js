import axios from "axios";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const imageFile = formData.get("image");

    const imgbbFormData = new FormData();
    imgbbFormData.append("image", imageFile);

    const response = await axios.post(
      `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`,
      imgbbFormData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    // Log the actual error for better debugging
    console.error("Error in API route:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
