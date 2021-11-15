import React, { useEffect } from "react";
import loadable from "@loadable/component";
import { useParams } from "react-router-dom";
import { URLQuery, HTMLDocumentMetaUpdate } from "../utils";

const LoadableComponentFallback = () => "Loading...";

const LoadableComponentResolver = {
  Home: loadable(() => import("./Home")),
  Post: loadable(() => import("./Post")),
  NotFound: loadable(() => import("./NotFound")),
};

function RouteProvider(props) {
  const params = useParams();

  Object.assign(params, URLQuery.get());

  useEffect(() => {
    if (props.document) {
      HTMLDocumentMetaUpdate(props.document(params));
    } else HTMLDocumentMetaUpdate();
  }, [props, params]);

  const LoadableComponent = LoadableComponentResolver[props.name];

  if (!LoadableComponent)
    console.warn("<LoadableComponent /> missing for: " + props.name);

  return LoadableComponent ? (
    <LoadableComponent
      fallback={<LoadableComponentFallback />}
      params={params}
      {...props}
    />
  ) : null;
}

export default RouteProvider;
