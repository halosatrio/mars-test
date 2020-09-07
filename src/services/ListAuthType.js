export const authType = [
  { _id: 1, name: "No" },
  { _id: 2, name: "apiKey" },
  { _id: 3, name: "OAuth" },
];

export function getAuthType() {
  return authType.filter((a) => a);
}
