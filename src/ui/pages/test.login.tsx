import { useEffect, useState } from "react";

function TestLogin() {
  const CLIENT_ID =
    "1023627729244-i0tade29e9nmlph0j3ngk5nv81c97d5n.apps.googleusercontent.com";
  const REDIRECT_URI = "http://localhost:3000/authcallback";
  const AUTH_URI = "https://accounts.google.com/o/oauth2/auth";
  const TOKEN_URI = "https://oauth2.googleapis.com/token";

  const [authCode, setAuthCode] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState(null);

  // Função para redirecionar o usuário para a página de login do Google
  const redirectToGoogleLogin = () => {
    const scope = "profile email";
    const url = `${AUTH_URI}?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scope}`;
    window.location.href = url;
  };

  // Função para capturar o código de autorização na URL de callback
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    if (code != null) {
      setAuthCode(code);
    } else {
      console.error("Authorization code not found in URL.");
    }
  }, []);

  // Função para trocar o código de autorização pelo token de acesso
  useEffect(() => {
    const exchangeAuthCodeForToken = async (code: string) => {
      const response = await fetch(TOKEN_URI, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          code: code,
          client_id: CLIENT_ID,
          client_secret: "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",
          redirect_uri: REDIRECT_URI,
          grant_type: "authorization_code",
        }),
      });

      const data = await response.json();
      setAccessToken(data.access_token);
    };

    if (authCode) {
      exchangeAuthCodeForToken(authCode);
    }
  }, [authCode]);

  // Exibir perfil do usuário
  const fetchUserProfile = async () => {
    const response = await fetch(
      "https://www.googleapis.com/oauth2/v1/userinfo?alt=json",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const profile = await response.json();
    console.log(profile);
  };

  return (
    <div>
      <h1>Login com Google</h1>
      {!accessToken && (
        <button onClick={redirectToGoogleLogin}>Login com Google</button>
      )}
      {accessToken && (
        <>
          <h2>Autenticado com Sucesso</h2>
          <button onClick={fetchUserProfile}>Ver Perfil</button>
        </>
      )}
    </div>
  );
}

export default TestLogin;
