"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
// import getData from "@/pages/api/getdata";

function Jobdetails({ data }) {
    const router = useRouter();

    // useEffect(() => {
    //     getData();
    // }, []);

    return (
        <div className="App">
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Welcome to ConnectCareers</h1>
                    <p>Where you discover exciting job opportunities.</p>
                    <button className="btn-primary">Get Started</button>
                </div>
            </section>

            <h1
                style={{
                    textAlign: "center",
                    background: "#f2f2f2",
                    fontWeight: "700",
                    fontSize: "2rem",
                }}
            >
                Recent Jobs
            </h1>
            {
                <section className="items-section">
                    <div className="items-container">
                        {data?.map((x, i) => {
                            return (
                                <div key={i}>
                                    <div className="item-card">
                                        <Image
                                            src="https://picsum.photos/id/20/500/300"
                                            width={500}
                                            height={200}
                                            alt="item"
                                        />
                                        <h2>{x.JobPosition}</h2>
                                        <p>Category: {x?.Category}</p>
                                        <p>Experience: {x?.Experience}</p>
                                        <p>Location: {x?.Location}</p>
                                        <p>Status: {x?.JobStatus}</p>
                                        <button
                                            onClick={() => {
                                                router.push("/applicant");
                                                localStorage.setItem("apply-data", JSON.stringify(x));
                                            }}
                                            style={{
                                                backgroundColor: "#ff7900",
                                                color: "#fff",
                                                border: "none",
                                                borderRadius: "4px",
                                                padding: "10px 20px",
                                                fontSize: "16px",
                                                cursor: "pointer",
                                            }}
                                        >
                                            Apply
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            }
        </div>
    );
}

export default Jobdetails;
