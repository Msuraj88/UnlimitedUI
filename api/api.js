const fileKey = "6Tfe5vJdC8IYQiwXzd8Jfp";
const apiKey = "figd_sxpJemNB1NEAHlMDIt8mTLuJcclXMgfjtBMgZvuH";

async function fetchFileComponents(fileKey, apiKey) {
  let resp = await fetch(`https://api.figma.com/v1/files/${fileKey}`, {
    method: "GET",
    headers: {
      "X-Figma-Token": apiKey,
    },
  });
  let response = resp.json();
  return response;
}

async function filterComponentsByName(
  fileKey,
  apiKey,
  componentName = "Page 1"
) {
  const document = await fetchFileComponents(fileKey, apiKey);
  console.log(document.document.children);
  const components = document.document.children.find(
    (node) => node.name === componentName
  );
  console.log(components);
  //   for (const component of components) {
  const thumbnail = await fetchComponentThumbnail(
    fileKey,
    components[0].id,
    apiKey
  );
  console.log(thumbnail);
  componentThumbnails[components[0].id] = thumbnail;
  //   }

  return componentThumbnails;
}

const componentName = "ComponentName";
filterComponentsByName(fileKey, apiKey, "Cancer website")
  .then((components) => {
    console.log("Filtered Components:", components);
  })
  .catch((error) => console.error(error));

async function fetchComponentThumbnail(fileKey, componentId, apiKey) {
  const response = await fetch(
    `https://api.figma.com/v1/images/${fileKey}?ids=${componentId}`,
    {
      headers: {
        "X-Figma-Token": apiKey,
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      `Error fetching component thumbnail: ${response.statusText}`
    );
  }

  const data = await response.json();
  return data.images[componentId];
}
