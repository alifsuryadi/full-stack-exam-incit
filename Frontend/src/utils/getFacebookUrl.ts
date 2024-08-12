export function getFacebookUrl(from: string) {
  const rootURl = "https://facebook.com/login/oauth/authorize";

  const options = {
    client_id: import.meta.env.VITE_FACEBOOK_OAUTH_CLIENT_ID as string,
    redirect_uri: import.meta.env.VITE_FACEBOOK_OAUTH_REDIRECT_URL as string,
    scope: "user:email",
    state: from,
  };

  const qs = new URLSearchParams(options);

  return `${rootURl}?${qs.toString()}`;
}
