"use client";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export async function registerUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // User log here
    console.log("New user created:", userCredential);
    return {
      user: userCredential.user,
      error: null,
    };
  } catch (error) {
    return {
      user: null,
      error: error.message,
    };
  }
}
