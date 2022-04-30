export const myAge = () => {
  const birth = new Date("10/29/1993");
  const now = new Date();
  let age = now.getFullYear() - birth.getFullYear();
  const month = now.getMonth() - birth.getMonth();
  if (month < 0 || (month === 0 && now.getDate() < birth.getDate())) {
    age--;
  }
  return age;
};
