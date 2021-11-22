

export const uploadImage = async file => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'plantz');
  const options = {
    method: 'POST',
    body: formData,
  };

  try {
    const response = await fetch(
      'https://api.Cloudinary.com/v1_1/solaiman/image/upload',
      options,
    );
    const data = await response.json();
    console.log(data);
    return data.url;
  } catch (err) {
    console.log(err);
    alert('An Error Occured While Uploading');
  }
};

export const scanImage = async photoUrl => {
  try {
    const response = await fetch(
      `https://app.zenserp.com/api/v2/search?apikey=99d44ee0-26c5-11ec-a8f7-6ba64da64672&image_url=${photoUrl}`,
    );
    const data = await response.json();
    console.log(data.possible_related_search);
    return data.possible_related_search;
  } catch (err) {
    console.log(err);
  }
};
