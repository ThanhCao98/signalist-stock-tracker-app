"use server";

import { auth } from "@/lib/better-auth/auth";
import { inngest } from "@/lib/inngest/client";
import { headers } from "next/headers";

export const signUpWithEmail = async (data: SignUpFormData) => {
     try {
        const response = await auth.api.signUpEmail({
            body: {
                email: data.email,
                password: data.password,
                name: data.fullName,
            }
        })
        if(response) {
            await inngest.send({
                name: "app/user.created",
                data: {
                    email: data.email,
                    name: data.fullName,
                    country: data.country,
                    investmentGoals: data.investmentGoals,
                    riskTolerance: data.riskTolerance,
                    preferredIndustry: data.preferredIndustry,
                }
            });
        }

        return { success: true, data: response };

     } catch (error) {
        console.log('Sign up failed', error);
        return { success: false, message: "Sign up failed" };
     }
}

export const signInWithEmail = async (data: SignInFormData) => {
     try {
        const response = await auth.api.signInEmail({
            body: {
                email: data.email,
                password: data.password,
            }
        })

        return { success: true, data: response };

     } catch (error) {
        console.log('Sign in failed', error);
        return { success: false, message: "Sign in failed" };
     }
}

export const signOut = async () => {
    try {
        await auth.api.signOut({ headers: await headers() });
    } catch (error) {
        console.log('Sign out failed', error);
        return { success: false, message: "Sign out failed" };
    }
}