export async function getStyles() {
  const res = await fetch("https://marevision-backend.up.railway.app/api/style")
  return res.json()
}
