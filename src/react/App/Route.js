import React, { useEffect, lazy, Suspense } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewRoute, updateCurrentRoute } from "../redux";
import { URLQuery, HTMLDocumentMetaUpdate } from "../utils";

const SuspenseFallback = () => "Loading...";

const RouteComponentResolver = {
  Home: lazy(() => import("./Home")),
  Post: lazy(() => import("./Post")),
  NotFound: lazy(() => import("./NotFound")),
};

function RouteProvider(props) {
  // Initialize dispatch.

  const dispatch = useDispatch();

  // Update location in route reducer.

  const location = useLocation();

  useEffect(() => {
    dispatch(addNewRoute(location));
  }, [location.pathname]); // eslint-disable-line

  // Update params of current route in route reducer.

  const params = useParams();

  Object.assign(params, URLQuery.get());

  useEffect(() => {
    dispatch(updateCurrentRoute({ params }));
  }, [params]); // eslint-disable-line

  // Update HTML meta tags based on provided props.

  useEffect(() => {
    if (props.document) {
      HTMLDocumentMetaUpdate(props.document(params));
    } else HTMLDocumentMetaUpdate();
  }, [props, params]);

  // Resolve route component to render.

  const RouteComponent = RouteComponentResolver[props.name];

  if (RouteComponent) {
    const isSuspenseComponent =
      RouteComponent.name && RouteComponent.name.includes("Suspense");

    const componentProps = { ...{ ...props, location, params } };

    return isSuspenseComponent ? (
      <RouteComponent {...componentProps} />
    ) : (
      <Suspense fallback={<SuspenseFallback />}>
        <RouteComponent {...componentProps} />
      </Suspense>
    );
  } else return "<RouteComponent /> missing for react route: " + props.name;
}

export default RouteProvider;

// https://reactrouter.com/docs/en/v6/api#overview
