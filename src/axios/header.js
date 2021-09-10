export default function header(token) {
  return { headers: { auth: token } };
}
