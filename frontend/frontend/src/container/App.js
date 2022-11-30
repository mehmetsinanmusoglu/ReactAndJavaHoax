import React from "react";
import LanguageSelector from '../components/LanguageSelector';
import ApiProgress from '../shared/ApiProgress';
import UserSingupPage from '../pages/UserSingupPage';
import LoginPage from '../pages/LoginPage';
function App() {
  return (
    <div className="row">
      <div className="col">
        <ApiProgress path = "/api/1.0/users">
          <UserSingupPage />
        </ApiProgress>
      </div>
      <div className="col">
        <ApiProgress path = "/api/1.0/auth">
          <LoginPage />
        </ApiProgress>
      </div>
      <LanguageSelector />
    </div>
  );
}

export default App;
