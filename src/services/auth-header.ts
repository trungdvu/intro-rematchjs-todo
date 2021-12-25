export function authHeader(): { Authorization: string } {
  const auth = JSON.parse(localStorage.getItem("auth") || "{}");
  return { Authorization: `Bearer ${auth?.token || ""}` };
}
