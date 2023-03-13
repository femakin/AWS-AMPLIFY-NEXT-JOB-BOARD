import { useEffect } from "react";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
// import awsconfig from "../aws-exports";
import { useRouter } from "next/navigation";
import { Auth } from "aws-amplify";

// Amplify.configure({ ...awsconfig, ssr: true });
function Authaccount({ signOut, user }) {
    const router = useRouter();
    useEffect(() => {
        Auth.currentAuthenticatedUser({
            bypassCache: false,
        })
            .then((result) => {
                if (user.attributes.email === "femiakinyemi65@gmail.com") {
                    router.push("/admin");
                } else {
                    router.push("/applicant");
                }
            })
            .catch((err) => console.log(err));
    }, []);
}

export default withAuthenticator(Authaccount);
