'use strict';

// const APP_PATH = `/login.html`; // https://ユーザー名.github.io/<ココ> or ルートパス利用なら`/`だけでOK
const LOGIN_URL = `/auth0Test/login.html`; // https://ユーザー名.github.io/<ココ> or ルートパス利用なら`/`だけでOK
const LOGOUT_URL = `/auth0Test/`; // https://ユーザー名.github.io/<ココ> or ルートパス利用なら`/`だけでOK
let auth0 = null;
const fetchAuthConfig = () => fetch("auth_config.json"); // auth_config.json読み込み

const configureClient = async () => {
  const response = await fetchAuthConfig();
  const config = await response.json();

  auth0 = await createAuth0Client({
    domain: config.domain,
    client_id: config.clientId
  });
};

window.onload = async () => {
  await configureClient();

  updateUI();

  const isAuthenticated = await auth0.isAuthenticated();

  if (isAuthenticated) {
    // show the gated content
    return;
  }

  // NEW - check for the code and state parameters
  const query = window.location.search;
  if (query.includes("code=") && query.includes("state=")) {

    // Process the login state
    await auth0.handleRedirectCallback();
    
    updateUI();

    // Use replaceState to redirect the user away and remove the querystring parameters
    window.history.replaceState({}, document.title, APP_PATH);
  }
};

const updateUI = async () => { 
  const isAuthenticated = await auth0.isAuthenticated();

//   document.getElementById("btn-logout").disabled = !isAuthenticated;
//   document.getElementById("btn-login").disabled = isAuthenticated;
  
  // NEW - add logic to show/hide gated content after authentication
  if (isAuthenticated) {
    // document.getElementById("gated-content").classList.remove("hidden");
    console.log("ログイン状態")
    // window.location.href = "/login.html"

    // document.getElementById(
    //   "ipt-access-token"
    // ).innerHTML = await auth0.getTokenSilently();

    // document.getElementById("ipt-user-profile").innerHTML = JSON.stringify(
    //   await auth0.getUser()
    // );

    //プロフ画像
    // const profile = await auth0.getUser();
    // document.getElementById("ipt-user-profile-image").src = profile.picture;

  } else {
    // document.getElementById("gated-content").classList.add("hidden")
  }
};

// ログインボタン押下
const login = async () => {
  await auth0.loginWithRedirect({
    // ログイン後遷移するURL
    // redirect_uri: window.location.origin + APP_PATH
    redirect_uri: window.location.origin + LOGIN_URL
  });
};

// ログアウトボタン押下
const logout = () => {
  auth0.logout({
    // ログアウト後遷移するURL
    // returnTo: window.location.origin
    returnTo: window.location.origin + LOGOUT_URL
  });
};
