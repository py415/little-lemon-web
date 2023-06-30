import { JWTUser } from "@/interfaces/JWTUser";
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

interface AuthContextType {
  authTokens: AuthToken | null;
  setAuthTokens: Dispatch<SetStateAction<AuthToken | null>>;
  user: JWTUser | null;
  setUser: Dispatch<SetStateAction<JWTUser | null>>;
}

export const AuthContext = createContext<AuthContextType>({
  authTokens: null,
  setAuthTokens: () => {},
  user: null,
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
  const [authTokens, setAuthTokens] = useState<AuthToken | null>(null);
  const [user, setUser] = useState<JWTUser | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const item = localStorage.getItem("authTokens");
      const data = item ? JSON.parse(item) : null;

      if (data) {
        setAuthTokens(data);
        setUser(jwt_decode(data.access));
      }
    }
  }, []);

  const contextValue = useMemo(
    () => ({
      authTokens,
      setAuthTokens,
      user,
      setUser,
    }),
    [authTokens, user]
  ) as AuthContextType;

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
