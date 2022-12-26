function createUUID() {
  const temp_url = URL.createObjectURL(new Blob());
  const uuid = temp_url.toString();
  URL.revokeObjectURL(temp_url);
  return uuid.slice(uuid.lastIndexOf("/") + 1);
}

export default createUUID;
