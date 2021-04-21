export async function handleResponse(response) {
  if (response.ok) return response.json();
  //for server side validation error
  if (response.status === 400) {
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error('Network response was not OK');
}

export async function handleError(err) {
  console.error('API call failed' + err);
  throw err;
}
