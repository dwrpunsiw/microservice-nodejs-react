import buildClient from "../api/build-client";

const LandingPage = ({ currentUser }) => {
  //   console.log(currentUser);
  return currentUser ? (
    <h1> You are sign in</h1>
  ) : (
    <h1>You are NOT signed in</h1>
  );
};

LandingPage.getInitialProps = async (context) => {
  //   if (typeof window === "undefined") {
  //     // we are on the server!
  //     // requests should be made to http://ingress-nginx-controller.ingress-nginx.svc.cluster.local
  //     //   const response = await axios.get(
  //     //     "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser"
  //     //   );
  //     // http://SERVICENAME.NAMESPACE.svc.cluster.local
  //     const { data } = await axios.get(
  //       "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser",
  //       {
  //         headers: {
  //           //   Host: "ticketing.dev",
  //           ...req.headers,
  //         },
  //       }
  //     );

  //     return data;
  //   } else {
  //     // we are on the browser!
  //     // requests can be made with a base url of ''
  //     const response = await axios.get("/api/users/currentuser");
  //     return response.data;
  //   }

  const client = buildClient(context);

  const { data } = await client.get("/api/users/currentuser");

  return data;
};

export default LandingPage;
