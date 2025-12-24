//app/pages/signup.tsx

"use client";
import React, { useState } from "react";
import { signUpWithEmail } from "../lib/auth";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
    
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = async () => {
        const { user, error } = await signUpWithEmail(email, password);
        if (error) {
            alert(error.message);
        } else if (user) {
            router.push("/"); // redirect home after signup
        }
    };


    return (
        <div>
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={handleSignUp}>Sign Up</button>
        </div>
    );
}
