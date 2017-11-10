import * as React from "react";

export default function Thing({ className, children }) {
    return (
        <div className={className}>
            {children}
        </div>
    );
}