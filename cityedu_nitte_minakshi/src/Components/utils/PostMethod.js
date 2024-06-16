export const handleSubmit = async (event, value) => {
  event.preventDefault();
  const response = await fetch("https://planedu-mailing-service.onrender.com/mail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(value),
  });
  const responseData = await response.json();
  return responseData;
};
