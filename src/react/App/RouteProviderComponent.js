import React, { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import {
  URLQuery,
  HTMLDocumentMetaUpdate,
  HTMLStructuredDataUpdate,
} from "../utils";
import { updateRoute } from "../redux";
import { elementId } from "../../shared";
import Suspense from "./Suspense";

const RouteProviderComponentResolver = {
  "404": lazy(() => import("./NotFound")),
  Home: lazy(() => import("./Home")),
  Post: lazy(() => import("./Post")),
};

function RouteProviderComponent(routeProps) {
  // Initialize dispatch.

  const dispatch = useDispatch();

  // Use react-router-dom's location hook.

  const location = useLocation();

  // Use react-router-dom's params hook.

  const params = useParams();

  // Clean params of any unnecessary keys.

  delete params["*"];

  // Get url query params and assign them to params.

  Object.assign(params, URLQuery.get());

  // On location or params change, update route reducer.

  useEffect(() => {
    dispatch(updateRoute({ ...location, params }));
  }, [dispatch, location, params]);

  // On route props, params, or location change, update html document meta tags.

  useEffect(() => {
    const documentMetaUpdate =
      routeProps.document && routeProps.document(params, location);
    HTMLDocumentMetaUpdate(documentMetaUpdate);
  }, [routeProps, params, location]);

  // On route props, params, location, or component data change, update html structured data.

  useEffect(() => {
    const structuredDataUpdate =
      routeProps.structuredData && routeProps.structuredData(params, location);
    HTMLStructuredDataUpdate(structuredDataUpdate);
  }, [routeProps, params, location]);

  // Resolve lazy component.

  const RouteLazyComponent = RouteProviderComponentResolver[routeProps.name];

  return RouteLazyComponent ? (
    <main id={elementId.main}>
      <Suspense
        Component={RouteLazyComponent}
        {...{ ...routeProps, location, params }}
      />
    </main>
  ) : (
    "Missing RouteLazyComponent for: " + routeProps.name
  );
}

export default RouteProviderComponent;
