interface Props {
  isLoggedIn: boolean;
}

const protectedAuthorize = <P extends object>(
    Component: React.ComponentType<P>
  ): React.FC<P & Props> => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  
    return ({ ...props }: Props) =>
      isLoggedIn ? (
        <Component {...props as P} isLoggedIn={isLoggedIn} />
      ) : null;
  };
  
  export default protectedAuthorize;