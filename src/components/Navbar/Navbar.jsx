"use client";

import React, { useEffect, useState } from "react";
import { Amplify } from "aws-amplify";
import { useRouter } from "next/router";
import "@aws-amplify/ui-react/styles.css";
// import awsconfig from '../../aws-exports';
import { Auth } from "aws-amplify";

// ({ ...awsconfig, ssr: true });

const Navbar = () => {
    const [authenticated, setauthenticated] = useState(false);
    const { asPath} = useRouter();
    const router = useRouter();

    useEffect(() => {
        Auth.currentAuthenticatedUser({
            bypassCache: false,
        })
            .then((result) => {
                setauthenticated(result);
            })
            .catch((err) => console.log(err));
    }, [asPath]);

    return (
        <div>
            {
                <header
                    style={{ backgroundColor: "#fff", color: "#21312a", padding: "1rem" }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <h1
                            style={{
                                margin: 0,
                                fontWeight: 700,
                                fontSize: "1.5rem",
                                cursor: "pointer",
                            }}
                            onClick={() => {
                                router.push("/");
                            }}
                        >
                            ConnectCareers
                        </h1>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <button
                                onClick={() => router.push("/auth")}
                                style={{
                                    marginRight: "1rem",
                                    backgroundColor: "#fff",
                                    color: "#21312A",
                                    border: "none",
                                    padding: "0.5rem 1rem",
                                }}
                            >
                                {authenticated
                                    ? "Welcome" + " " + authenticated.attributes.email
                                    : "Sign up/Login"}
                            </button>
                        </div>
                    </div>
                </header>
            }
        </div>
    );
};

export default Navbar;
