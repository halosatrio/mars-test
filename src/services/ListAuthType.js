export const authType = [
  { id: 1, name: "No" },
  { id: 2, name: "apiKey" },
  { id: 3, name: "OAuth" },
];

export function getAuthType() {
  return authType.filter((a) => a);
}
