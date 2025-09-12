export function setFullFilePathForPhotoFieldInArray(array: any[]) {
  return array.map((item) => {
    item.photo = process.env.BASE_PHOTO_URL + item.photo;
    return item;
  });
}

export function setFullFilePathForPhotoField(photo: string) {
  return process.env.BASE_PHOTO_URL + photo;
}
