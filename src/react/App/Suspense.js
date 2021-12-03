import React, { Suspense as SuspenseProvider } from "react";

const SuspenseLoader = () => <div className="suspense-loader">Loading...</div>;

const Suspense = ({ Component: LazyComponent, ...props }) => (
  <SuspenseProvider fallback={<SuspenseLoader />}>
    <LazyComponent {...props} />
  </SuspenseProvider>
);

export default Suspense;
