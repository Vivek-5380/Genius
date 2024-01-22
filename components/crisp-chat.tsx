"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("02a3e75b-c3ea-4f7f-8bf9-dc8a3e0a670f");
    } , []);

    return null;
};