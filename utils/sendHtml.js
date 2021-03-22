export const sendHtml = (res, filename) => {
  res.sendFile(path.join(__dirname, filename));
}