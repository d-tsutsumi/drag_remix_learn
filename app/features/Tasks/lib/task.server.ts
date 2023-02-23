

export const post = async (request :Request) => {
  const body = await request.formData();
  const title = body.get("title");
  const description = body.get("description");

  if(!title  || !description) return

}