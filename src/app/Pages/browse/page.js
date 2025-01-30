"use client";

import React from "react";
import BrowseHeader from "../../Components/header/browseHeader"



import { useRouter } from "next/navigation";


export default function Home() {

    const router = useRouter();


    return (
        <div className="app-bg-Dark">
            <BrowseHeader />

        </div>
    );
}
