import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, pass: string) => Promise<boolean>;
  register: (email: string, pass: string, name: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check local storage on boot
    const savedUser = localStorage.getItem('orient_user');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const login = async (email: string, pass: string) => {
    // MOCK API CALL
    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        const mockUser: User = {
          id: 'u-123',
          name: 'Sarah Chen',
          email: email,
          role: 'MEMBER',
          tier: 'GOLD'
        };
        setUser(mockUser);
        localStorage.setItem('orient_user', JSON.stringify(mockUser));
        resolve(true);
      }, 800);
    });
  };

  const register = async (email: string, pass: string, name: string) => {
     // MOCK API CALL
     return new Promise<boolean>((resolve) => {
       setTimeout(() => {
         const mockUser: User = {
           id: 'u-new',
           name: name,
           email: email,
           role: 'MEMBER',
           tier: 'BRONZE'
         };
         setUser(mockUser);
         localStorage.setItem('orient_user', JSON.stringify(mockUser));
         resolve(true);
       }, 800);
     });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('orient_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
