import React, { lazy, useEffect, Suspense } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { URLQuery, HTMLDocumentMetaUpdate } from "../utils";
import { updateRoute } from "../redux";

const SuspenseFallback = () => "Loading...";

const RouteComponentResolver = {
  Home: lazy(() => import("./Home")),
  Post: lazy(() => import("./Post")),
  NotFound: lazy(() => import("./NotFound")),
};

function RouteProvider(routeProps) {
  // Initialize dispatch.

  const dispatch = useDispatch();

  // Use react-router-dom's location hook.

  const location = useLocation();

  // Use react-router-dom's params hook.

  const params = useParams();

  // Get url query params and assign them to params.

  Object.assign(params, URLQuery.get());

  // On location or params change, update route reducer.

  useEffect(() => {
    dispatch(updateRoute({ ...location, params }));
  }, [dispatch, location, params]);

  // On route props or params change, update html document meta tags.

  useEffect(() => {
    if (routeProps.document) {
      HTMLDocumentMetaUpdate(routeProps.document(params));
    } else HTMLDocumentMetaUpdate();
  }, [routeProps, params]);

  // Resolve route component to render.

  const RouteComponent = RouteComponentResolver[routeProps.name];

  // If route component exists...

  if (RouteComponent) {
    // Determine if component is already wrapperd in React.Suspense by parsing component name.

    const isSuspenseComponent =
      RouteComponent.name && RouteComponent.name.includes("Suspense");

    // Assign props to pass to route component.

    const componentProps = { ...{ ...routeProps, location, params } };

    // Render route component.

    return isSuspenseComponent ? (
      <RouteComponent {...componentProps} />
    ) : (
      <Suspense fallback={<SuspenseFallback />}>
        <RouteComponent {...componentProps} />
      </Suspense>
    );
  } else return "<RouteComponent /> missing for reactRoute: " + routeProps.name;
}

export default RouteProvider;

// https://reactrouter.com/docs/en/v6/api#overview
