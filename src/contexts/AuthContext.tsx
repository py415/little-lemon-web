import jwt_decode from "jwt-decode";
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface AuthToken {
  access: string;
  refresh: string;
}

interface User {
  exp: number;
  iat: number;
  jti: string;
  token_type: string;
  user_id: number;
  username: string;
}

interface AuthContextType {
  authToken?: AuthToken;
  setAuthToken: Dispatch<SetStateAction<AuthToken>>;
  user?: User;
  setUser: Dispatch<SetStateAction<User>>;
}

export const AuthContext = createContext<AuthContextType>({
  setAuthToken: () => {},
  setUser: () => {},
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = (props) => {
  // Props
  const { children } = props;
  // Hooks
  const [authToken, setAuthToken] = useState<AuthToken>();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const item = localStorage.getItem("authTokens");
      const data = item ? JSON.parse(item) : null;

      if (data) {
        setAuthToken(data);
        setUser(jwt_decode(data.access));
      }
    }
  }, []);

  const contextValue = useMemo(
    () => ({
      authToken,
      setAuthToken,
      user: user,
      setUser,
    }),
    [authToken, user]
  ) as AuthContextType;

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
