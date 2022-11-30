import React from "react";
import LanguageSelector from '../components/LanguageSelector';
import ApiProgress from '../shared/ApiProgress';
import UserSingupPage from '../pages/UserSingupPage';
import LoginPage from '../pages/LoginPage';
function App() {
  return (
    <div className="row">
      <div className="col">
          <UserSingupPage />
      </div>
      <div className="col">
          <LoginPage />
      </div>
      <LanguageSelector />
    </div>
  );
}

export default App;
