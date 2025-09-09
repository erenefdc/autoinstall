"use client";

import Giscus from "@giscus/react";

export default function Comments() {
    return (
        <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Leave a comment 💭</h2>
            <Giscus
                repo="erenefdc/autoinstall" 
                repoId="R_kgDOPsJPlA"
                category="General"
                categoryId="DIC_kwDOPsJPlM4CvMsf"
                mapping="pathname"
                strict="0"
                reactionsEnabled="1"
                emitMetadata="1"
                inputPosition="top"
                theme="preferred_color_scheme"
                lang="en"
                loading="lazy"
            />
        </div>
    );
}
