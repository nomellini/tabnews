function status(request, response) {
  response.status(200).json({ text: "Fernando Nomellini á é í ó ú" });

  //response.status(200).send("Fernando Nomellini á é í ó ú");
}

export default status;
