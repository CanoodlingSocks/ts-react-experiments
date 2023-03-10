import { Route, Navigate } from "react-router-dom";

type ProtectedRouteProps = {
    element: JSX.Element;
     path: string;
     isLoggedIn: boolean;
}

export const ProtectedRoute =  ({ element, ...rest }: ProtectedRouteProps) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return isLoggedIn ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/test" replace={true} />
  );
};
