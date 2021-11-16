import React, { useEffect, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { URLQuery, HTMLDocumentMetaUpdate } from "../utils";

const SuspenseFallback = () => "Loading...";

const LazyComponentResolver = {
  Home: lazy(() => import("./Home")),
  Post: lazy(() => import("./Post")),
  NotFound: lazy(() => import("./NotFound")),
};

function RouteProvider(props) {
  const params = useParams();

  Object.assign(params, URLQuery.get());

  useEffect(() => {
    if (props.document) {
      HTMLDocumentMetaUpdate(props.document(params));
    } else HTMLDocumentMetaUpdate();
  }, [props, params]);

  const LazyComponent = LazyComponentResolver[props.name];

  if (!LazyComponent)
    console.warn("<LazyComponent /> missing for: " + props.name);

  return LazyComponent ? (
    <Suspense fallback={<SuspenseFallback />}>
      <LazyComponent params={params} {...props} />
    </Suspense>
  ) : null;
}

export default RouteProvider;
