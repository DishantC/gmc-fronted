export const CLEANER_DEFAULT_IMAGE =
  'https://strapi-newserver-assets.s3.ap-south-1.amazonaws.com/istockphoto_1176991319_612x612_19c2a04b6a.jpg?updated_at=2022-12-20T07:04:17.296Z';

export const SUPERVISOR_DEFAULT_IMAGE =
  'https://strapi-newserver-assets.s3.ap-south-1.amazonaws.com/3463ed71e2d1cbf3fddabbfa4879eb92_4717847e5a.jpg?updated_at=2022-12-20T07:04:17.524Z';

export const APARTMENT_DEFAULT_IMAGE =
  'https://strapi-newserver-assets.s3.ap-south-1.amazonaws.com/building_concept_illustration_114360_4469_72a0bba12d.webp';

const includeExtra = true;

export const uploadImageSelect = {
  selectionLimit: 0,
  mediaType: 'photo',
  includeBase64: false,
  includeExtra,
};

export const uploadImageCapture = {
  saveToPhotos: true,
  mediaType: 'photo',
  includeBase64: false,
  includeExtra,
};
