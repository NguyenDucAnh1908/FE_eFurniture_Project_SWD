import React, { useState } from 'react';

// @function  UserContext
const UserContext = React.createContext(null);

const UserProvider = ({ children }) => {
  // User is the name of the "data" that gets stored in context
  const [user, setUser] = useState(() => {
    // Nếu có dữ liệu user trong localStorage thì lấy nó, ngược lại trả về user mặc định
    const storedUser = localStorage.getItem('account');
    return storedUser ? JSON.parse(storedUser) : {
      isAuthenticated: false,
      token: '',
      refresh_token: '',
      account: {}
    };
  });

  // Login updates the user data with a name parameter
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('account', JSON.stringify(userData));
  };

  // Logout updates the user data to default
  const logout = () => {
    setUser({
      isAuthenticated: false,
      token: '',
      refresh_token: '',
      account: {}
    });
    localStorage.removeItem('account');
    localStorage.removeItem('jwt');
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider } 
